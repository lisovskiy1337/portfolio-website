import React, { useCallback } from "react";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <footer className="bg-[#0c0b42] px-[5%] py-8">
      <div className="container">
        <div className="flex justify-between">
          <ul className="flex gap-4 ">
            <li>
              <a
                href="mailto:lisovskiy1337@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-3 rounded-full bg-white text-black hover:-translate-y-1 duration-200"
              >
                <SiGmail size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vladyslav-lisovskiy329/"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-3 rounded-full bg-white text-black hover:-translate-y-1 duration-200"
              >
                <AiFillLinkedin size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lisovskiy1337"
                target="_blank"
                rel="noreferrer"
                className="inline-block p-3 rounded-full bg-white text-black hover:-translate-y-1 duration-200"
              >
                <AiFillGithub size={28} />
              </a>
            </li>
          </ul>
          <button
            onClick={handleScrollTop}
            className="h-12 w-12 flex justify-center items-center rounded-full bg-white text-black"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
