import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 ">
      <div className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="mr-0 md:mr-10 mb-8 md:mb-0">
          <img
            className="rounded-lg w-screen max-w-[300px] h-auto"
            src="/images/myImage.jpg"
            alt="Aydin Vesali Moghaddam"
          />
        </div>

        {/* Text and Social Links Section */}
        <div className="w-full bg-white  dark:bg-gray-800 text-gray-800   dark:text-gray-200 md:w-[60%] lg:w-[50%] text-center md:text-left">
          <h1 className=" font-bold text-3xl mt-6 mb-8">
            Hey, it's me, Aydin Vesali Moghaddam
          </h1>

          <p className=" mb-10 ">
            I'm Aydin, an 18-year-old high schooler with a passion for web
            development. My tech journey started with HTML, CSS, and JavaScript,
            and I was hooked by the thrill of crafting dynamic, interactive
            websites. As I grew, Node.js and ReactJS became my go-to tools for
            building scalable applications. Feel free to connect if you have
            questions, collaboration ideas, or just want to discuss the latest in
            web development!
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/iam-aydin"
              className="bg-gray-800 dark:bg-white text-gray-200  dark:text-gray-800 rounded-lg p-4 w-48 flex items-center gap-2 transition duration-300"
            >
              <img
                 src="/images/github3.png"
                width="20px"
                height="20px"
                alt="Github"
              />
              <span>Visit my Github</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
              className="bg-gray-800 dark:bg-white text-gray-200  dark:text-gray-800  rounded-lg p-4 w-48 flex items-center gap-2  transition duration-300"
            >
              <img
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span>Follow me on LinkedIn</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://twitter.com/ichbinaydin"
              className=" bg-gray-800 dark:bg-white text-gray-200  dark:text-gray-800  rounded-lg p-4 w-48 flex items-center gap-2 transition duration-300"
            >
              <img
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                width="20px"
                height="20px"
                alt="Twitter"
              />
              <span>Follow me on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}