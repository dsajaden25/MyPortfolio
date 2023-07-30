import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import ProfilePic from "../assets/profilepic.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col h-full max-w-screen-lg justify-center 
      items-center mx-auto px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:ml-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">I am a Full Stack Developer</h2>
          <p className="text-gray-400 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            porro, quis aperiam delectus voluptates illo suscipit doloremque id
            numquam officiis fugiat molestias tenetur, assumenda ad quibusdam ab
            cupiditate, alias explicabo.
          </p>
          <div>
              <Link to="portfolio" smooth duration={500} className="group w-fit px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center 
              rounded-md cursor-pointer ">
                  Portfolio <span className="group-hover:rotate-90 duration-300"><BiRightArrowAlt className="ml-1" size={20} /></span>
                 
              </Link>
          </div>
        </div>
        <div>
            <img src={ProfilePic} alt="Jade" className="rounded-2xl w-2/6 mx-auto md:w-1/2"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
