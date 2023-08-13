"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from 'react-icons/fa';


export default function Intro() {

  return (
    <section className='hero text-white py-28 sm:mb-0 scroll-mt-[100rem]' >
      <div className='container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h4 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className='text-2xl font-bold text-gray-950 lg:leading-[94px] lg:text-[38px]'>Hello, I'm Milana Zaborovska, an aspiring</motion.h4>
        <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className='text-5xl mt-3 font-bold lg:text-[88px] lg:leading-[94px] text-gray-950'><span className="type-forHeader"></span>
</motion.h1>
        <motion.p initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} className=' font-normal text-base w-full lg:w-3/6 mt-9 text-gray-950'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quos nam labore porro ratione optio possimus modi aut laboriosam eos.</motion.p>
        <div className='mt-11'>
          <motion.div className='mt-6 flex items-center gap-3 text-gray-950'
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{
            delay: 0.1,
          }}
          >
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV {" "}<BsDownload className='opacity-60 group-hover:translate-y-1 transition'/> 
            </a>
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/milana-zaborovska-81b568214/"
              target="_blank"
            >
              <BsLinkedin/>
            </a>
            <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/m1lanaz"
                target="_blank"
            >
              <FaGithubSquare/>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
