'use client'
import Link from "next/link";
import { useState } from "react";
import { motion as m } from 'framer-motion';
import { list } from "postcss";


export default function Navbar() {
    
    const btnVariants = {
        hover:{
            scale:1.1,
            boxShadow: "0px 0px 5px #000",    
        }
    }

    const listVariants = {
        hidden :{
            opacity: 0,
            height:0,

        },
        hover: {
            opacity: 1,
            height: 'fit-content',
            transition: {
              duration: 0.4,
              type: "tween",
            }
        },
        btnHover:{
            scale:1.1,
            boxShadow: "0px 0px 5px #000",    
        },
        rotate:{
            rotate: 180
        }
    };

    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter() {
      setIsHovered(true);
    }
  
    function handleMouseLeave() {
      setIsHovered(false);
    }

  return (
    <div 
    className={"bg-gray-400 py-2 fixed w-full z-20 text-black h-16"}
    >
      <ul 
      className="flex space-x-3 w-fit align-middle h-full mx-auto"
      >
        <m.li 
        variants={btnVariants}
        whileHover="hover"
        className="h-full cursor-pointer flex items-center border-black border-2 rounded"
        >
          <Link 
          className="my-auto flex px-7"
          href={''}
          >
            Kontakt
          </Link>
        </m.li>
        <m.li 
        variants={btnVariants}
        whileHover="hover"
        className="h-full cursor-pointer flex items-center border-black border-2 rounded"
        >
          <Link 
          className="my-auto flex px-7"
          href={''}
          >
            Home
          </Link>
        </m.li>

        <m.li
        variants={btnVariants}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover="hover"
        className="h-full flex cursor-default items-center border-black border-2 rounded px-7"
        >
            <m.div
            className=""
            >
            Wykształcenie

            <m.svg
            variants={listVariants}
            animate={isHovered ? "rotate" : ""}
            whileHover="rotate"
            className="float-right ml-2 "
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </m.svg>

              <m.ul 
              variants={listVariants}
              animate={isHovered ? "hover" : "hidden"}
              
              className="bg-slate-400 absolute rounded-lg border-2 border-black z-10 w-44 px-7">
                <m.li
                className="my-3 border text-center px-1 border-black rounded"
                variants={listVariants}
                animate={isHovered ? "hover" : "hidden"}
                whileHover="btnHover"
                >
                  Szkoła śrenia
                </m.li>
                <m.li
                className="my-3 border text-center px-1 border-black rounded"
                variants={listVariants}
                animate={isHovered ? "hover" : "hidden"}
                whileHover="btnHover"
                >
                  Studia 
                </m.li>
                <m.li
                className="my-3 border text-center px-1 border-black rounded"
                variants={listVariants}
                animate={isHovered ? "hover" : "hidden"}
                whileHover="btnHover"
                >
                  Kursy
                </m.li>
              </m.ul>

            </m.div>
        </m.li>
      </ul>
    </div>
  );
}
