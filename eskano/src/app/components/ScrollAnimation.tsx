"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image'

export const ScrollAnimation = ({ children }) => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "200%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["100%", "-15%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "150%"]
  );

  return (
    <>
        <section className="scroll-container" ref={containerRef}>
        <div className="copy">
          <h2>{ children }</h2>
        </div>
        <div className="img-container">
          <motion.div className="img-inner" style={{ translateX: imageValue }}>
            <motion.div
              className="bottom-shadow"
              style={{ translateX: bottomShadowValue }}
            />
            <Image src='/assets/plant.png' alt="a green plant" width={500} height={500} />
            <motion.div
              className="top-shadow"
              style={{ translateX: topShadowValue }}
              />
          </motion.div>
        </div>
      </section>
    </>
  );
};

