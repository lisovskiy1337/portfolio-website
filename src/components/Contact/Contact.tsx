import axios from "axios";
import React, { memo, useCallback, useState } from "react";

interface IProps {
  submitted: boolean;
  submitting: boolean;
  info: { error: boolean; msg: null | string };
}

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<IProps>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleServerResponse = useCallback(
    (ok: boolean, msg: null | string) => {
      if (ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg },
        });
        setForm({
          email: "",
          message: "",
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg },
        });
      }

      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      }, 2000);
    },
    []
  );

  const validateForm = () => {
    let isValid = true;

    if (!form.email) {
      isValid = false;
      setStatus((prev) => ({
        ...prev,
        info: { error: true, msg: "Please enter your email" },
      }));
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        isValid = false;
        setStatus((prev) => ({
          ...prev,
          info: { error: true, msg: "Please enter a valid email" },
        }));
      }
    }

    if (!form.message) {
      isValid = false;
      setStatus((prev) => ({
        ...prev,
        info: { error: true, msg: "Please enter your message" },
      }));
    }

    return isValid;
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setStatus((prev) => ({ ...prev, submitting: true }));

      axios({
        method: "POST",
        url: "https://formspree.io/f/mbjvrypw",
        data: form,
      })
        .then(() => {
          handleServerResponse(true, "Cool! I'll response asap!");
        })
        .catch((error) => {
          handleServerResponse(false, "Error" || error.message);
        })
        .finally(() => {
          setStatus((prev) => ({ ...prev, submitting: false }));
        });
    },
    [form, handleServerResponse]
  );

  return (
    <section id="contact">
      <div className="container">
        <h3 className="text-4xl mb-12 text-center">Contact</h3>
        <h4 className="text-xl text-center mb-8">
          You can contact me with the form below or via Gmail, Linkedin.
        </h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="Your Email"
            className={`mb-4 px-4 py-2 w-full sm:w-96 border-2 rounded-xl bg-transparent outline-none`}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleInput}
            placeholder="Something you want to say"
            className={`px-4 py-2 w-full sm:w-96 border-2 rounded-xl bg-transparent outline-none resize-none`}
            rows={8}
          />
          {status.info.msg && (
            <p
              className={`${
                status.info.msg && status.info.error
                  ? "text-red-500"
                  : "text-green-400"
              } transition-all duration-200 mt-1`}
            >
              {status.info.msg}
            </p>
          )}
          <button
            type="submit"
            className="w-[8rem] h-12 bg-[#6accc9] hover:bg-[#6ee1dd] rounded-xl mt-3 transition-all duration-200"
          >
            {status.submitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);
