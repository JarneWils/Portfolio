"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Foto = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.4, ease:"easeIn" },
            }}
            />

            {/*foto*/}
            <motion.div
            initial={{opacity: 0,}}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.4, ease:"easeInOut" },
            }}
            className="w-[300px] h-[280px] xl:w-[600px] xl:h-[340px] mix-blend-lighten absolute">
                <Image
                src="/assets/selfie-7.jpg"
                sizes="full"
                priority
                quality={100}
                fill alt=""
                className="object-contain opacity-80 ml-2 xl:ml-0 xl:mt-0"/>
            </motion.div>
        
            {/*circel*/}
            <motion.svg
            className="w-[300px] h-[280px] xl:w-[600px] xl:h-[350px] mix-blend-lighten ml-2 xl:ml-0 mt-4 xl:mt-0"
            fill="transparant"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
            <motion.circle
            cx="250"
            cy="250"
            r="250"
            stroke="#00ADF8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 90 70", "5 160 30 10"],
                rotate: [120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            />
            </motion.svg>
            
        </div>
    )
};

export default Foto;