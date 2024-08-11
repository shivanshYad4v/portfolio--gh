import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I'm Shivansh Yadav, a 4th-year engineering student at Netaji
          Subhas University of Technology with a strong focus on front-end
          development. I've honed my skills in React.js and Tailwind CSS,
          crafting responsive and engaging web applications. Alongside my
          passion for front-end technologies, I have a solid foundation in Data
          Structures and Algorithms, which empowers me to build efficient and
          scalable solutions.
        </p>

        <div className="mt-8">
          <a
            href="https://shivanshYad4v.github.io/portfolio-gh/Resume.pdf"
            className="text-white bg-blue-500 px-6 py-3 my-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
