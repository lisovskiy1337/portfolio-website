import React, { useState, useEffect, memo } from "react";

const About = () => {
  const [items, setItems] = useState([
    "html",
    "css",
    "js",
    "react",
    "tailwind",
    "redux",
  ]);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        const firstItem = updatedItems.shift();
        if (firstItem) updatedItems.push(firstItem);
        return updatedItems;
      });
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLine((prev) => {
        const nextLine = prev + 11;
        if (nextLine >= 100) {
          return 0;
        }
        return nextLine;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="about">
      <div className="container">
        <h3 className="text-4xl mb-12 text-center">About me</h3>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 place-items-center">
          <img className="rounded-2xl max-h-96" src="./about.png" alt="about" />
          <p className="text-left lg:mt-32 leading-relaxed lg:max-w-md">
            I'm a passionate Junior Front-End Developer skilled in HTML,
            CSS/SCSS, JavaScript, React, Redux, and Tailwind. <br /> I bring
            ideas to life, crafting captivating and responsive websites that
            deliver exceptional user experiences. With a focus on clean and
            optimized code, I ensure efficiency and top performance. By staying
            up to date with the latest trends and techniques, I enhance
            functionality and interactivity. Explore my portfolio to see my work
            and how I can contribute to your organization's success. Don't
            hesitate to reach out for questions or collaborations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-6">
          <p className="text-lg border-b-2 pb-2 md:border-b-0 md:pb-0 md:border-r-2 md:pr-4 md:mr-7">
            Tech Stack
          </p>
          <div className="grid grid-cols-3  sm:grid-cols-6 place-items-center relative pb-2">
            {items.map((item, index) => (
              <img
                key={item}
                className={`array-item ${
                  index === 0 || index === items.length - 1 ? "transition" : ""
                }`}
                width={80}
                loading="lazy"
                src={`./images/techs/${item}.svg`}
                alt={item}
              />
            ))}
            <div
              className="line h-[2px] absolute left-0 bottom-0 bg-[color:var(--text-color)] transition-all duration-1000"
              style={{ width: `${line}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
