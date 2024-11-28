'use client'
import Image from "next/image";
import bg from "./Images/pexels-joyston-judah-331625-933054.jpg"
import { motion as m, MotionValue, useTransform ,useScroll, useSpring } from 'framer-motion'
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress,280);
  return (
    <>
      <m.img alt="" src={bg.src}
      className="w-full -z-10 absolute"
      style={{
        top:"10rem",
        y
      }}
      transition={{duration:1}}
      >
      </m.img>
      <div className="bg-white absolute top-full w-full h-svh">

      </div>
    </>
  );
}
