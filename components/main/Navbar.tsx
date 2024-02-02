"use client";
import React , {useState} from 'react'
import { Socials } from "@/constants";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie';
import animationData from '../sub/lotties/lottieflow-menu-nav-11-21-f97316-easey.json';

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

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

         {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
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
        </nav>
        <div className="mobile__menu md:hidden"><div className="h-auto w-auto flex flex-row items-center"> 
               <span className="font-bold ml-[13px] hidden md:block text-gray-300">
            Mazen Sghaier 
          </span>
          </div>
              <button onClick={toggleMobileMenu} className="focus:outline-none">
              <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                    }}
                    height={50}
                    width={265}
                    style={{ color: '#3B82F6' }}
                  />
              </button>
              {showMobileMenu && (
                <div className="mobile__menu-items absolute top-20 left-0 right-0 bg-black text-slate-950 divide-y gap-6">
                  <ul className="flex flex-col items-center justify-between w-full h-auto  bg-[#0300145e]  text-gray-200 gap-6 p-8">
                    <li className="nav__item">
                      <a href="#about-me"  className="cursor-pointer counter text-xl font-meduim hover:text-orange-400" >
                        About me
                      </a> 
                    </li>
                    <li className="nav__item">
                      <a href="#skills" className="cursor-pointer counter text-xl font-meduim hover:text-orange-400">
                        Skills
                      </a>
                    </li>
                    <li className="nav__item">
                      <a href="#projects" className="cursor-pointer counter text-xl font-meduim hover:text-orange-400">
                        Projects
                      </a>
                    </li>
                  </ul>
                  <div className='flex justify-between items-center p-3'>
                    <SocialIcon url="https://www.facebook.com/sghaier.mazen" fgColor="#f97316" bgColor="transparent"/>
                    <SocialIcon url="https://www.youtube.com/watch?v=eMG7SmSM5v8&t=3s" fgColor="#b45f06" bgColor="transparent"/>
                    <SocialIcon url="https://github.com/MazenSghaier" fgColor="#f97316" bgColor="transparent"/>
                    <SocialIcon url="https://twitter.com/MazenSghaier2" fgColor="#b45f06" bgColor="transparent"/>
                    <SocialIcon url="https://www.linkedin.com/in/mazen-sghaier-12ab3818b/" fgColor="#f97316" bgColor="transparent"/>
                  </div>
                </div>
              )}
            </div>
      </div>
    </div>
  );
};

export default Navbar;
