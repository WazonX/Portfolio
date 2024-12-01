'use client'
import Image from "next/image";
import bg from "./Images/pexels-joyston-judah-331625-933054.jpg"
import { motion as m, MotionValue, useTransform ,useScroll, useSpring } from 'framer-motion'
import { useRef } from "react";
import AnimationSettings from './Common/PageLoadAnimation'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress,280);
  console.log(AnimationSettings)
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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}      
        transition= {{ duration: 1}}
        variants={{
          hidden: { opacity: 0, y:20},
          visible: {opacity: 1, y:0}
        }}
      
      className="bg-white absolute top-full w-full h-svh">

      </m.div>
    </m.div>
  );
}
