"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

//components//
import Stairs from "./Stairs";
import { ST } from "next/dist/shared/lib/utils";

const StrairTransition = () => {
    const pathName = usePathname();
    return (
    <>
    <AnimatePresence mode="wait">
        <div key={pathName}>
            <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex ">
                <Stairs />
                <motion.div className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                initial={{opacity: 1}}
                animate={{
                    opacity: 0,
                    transition: {delay: 1, duration: 0.2, ease: "easeInOut"},
                }}
                />
            </div>
        </div>
    </AnimatePresence>
    </>
    );
};

export default StrairTransition;