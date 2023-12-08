"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <motion.a
         initial={{
          x:500, opacity:0, scale:0.5
          }}
          animate={{
              x:0, opacity: 1, scale:1
          }}
          transition={{duration:1.5}}
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        > 
               <span className="font-bold ml-[13px] hidden md:block text-gray-300">
            Mazen Sghaier 
          </span>
        </motion.a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <motion.div 
        initial={{
            x:-500, opacity:0, scale:0.5
        }}
        animate={{
            x:0, opacity: 1, scale:1
        }}
        transition={{duration:1.5}}
            className='flex flex-row items-center'>
                <SocialIcon url="https://www.facebook.com/sghaier.mazen" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.linkedin.com/in/mazen-sghaier-12ab3818b/" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://github.com/MazenSghaier" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.youtube.com/watch?v=eMG7SmSM5v8&t=3s" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://twitter.com/MazenSghaier2" fgColor="gray" bgColor="transparent"/>
            </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
