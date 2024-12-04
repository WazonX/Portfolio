'use client'
import Image from "next/image";
import bg from "./Images/pexels-joyston-judah-331625-933054.jpg"
import { motion as m, MotionValue, useTransform ,useScroll, useSpring } from 'motion/react'
import { useRef } from "react";
import AnimationSettings from './Common/PageLoadAnimation'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress,280);
  return (
    <m.div
    >
      <m.img alt="" src={bg.src}
            transition= {{ duration: 1 }}
            initial= {{ opacity: 0, scale:1.1 }}
            animate= {{ opacity: 1,  scale:1}}
            exit= {{ opacity: 0,  scale:0.5}}
          
      className="w-full -z-10 absolute"
      style={{
        top:"10rem",
        y
      }}
      >
      </m.img>
      <m.div
      className="bg-white absolute top-full w-full h-svh pt-20">
        <m.div
        className="h-fit w-fit flex justify-center"
        >
          <m.img
          className="bg-black w-1/4 rounded-lg aspect-square mx-6"
          src={bg.src}
          />
          <m.div
          className="flex text-black w-1/2 my-auto text-lg"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit libero esse repellat nemo blanditiis? Placeat nihil ducimus quidem fuga odio debitis qui optio deserunt, maiores rerum neque, harum libero eum dignissimos nulla culpa amet aut a corrupti! Officiis, illum minus aliquam accusamus molestiae quis quae facere repellendus velit veniam aperiam?
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
}
