import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { GrResume } from "react-icons/gr";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
        LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://www.github.com/jaden25",
    },
    {
      id: 3,
      child: (
        <>
        Mail
          <AiFillMail size={30} />
        </>
      ),
      href: "mailto:dsajaden@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
        Resume
          <GrResume size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between h-14 items-center w-40 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white " +
              " " +
              style
            }
          >
            <a href={href} className="flex justify-between w-full text-white" download={download} target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;
