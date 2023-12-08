"use client"

import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skillName: string;
}

const SkillDataProvider = ({ src, width, height, index,skillName} : Props) => {

  const [isHovered, setIsHovered] = useState(false);
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
        <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index * animationDelay}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
        >
            <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
            />
       {isHovered && (
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 text-white">
                    <p className="text-lg font-bold">{skillName}</p>
                </div>
            )}     
    <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-28 xl:w-32 rounde-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
  </motion.div>
  
  )
}

export default SkillDataProvider