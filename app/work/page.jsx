"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//components//
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Wizzle Woodz app",
        title: "Ux/Ui Design",
        discription: "I designed a prototype for an app for employees and guests of a holiday park. The app allows guests to report issues to staff and helps them enhance their stay.",
        stack: [{ name: "Ux/Ui"}, { name: "Figma"}, { name: "html"}, { name: "css"}],
        image: '/assets/Wizzle-Woodz2.png',
        live: "",
        github: "https://wizzlewoodz.netlify.app",
    },
    {
        num: "02",
        category: "Forward Redesign",
        title: "Ux/Ui Design",
        discription: "This is a redesign of the website for FORWARD, a sports coaching company. They wanted the site to exude power and a winning spirit.",
        stack: [{ name: "Ux/Ui"}, { name: "Figma"}, { name: "Illustrator"}, { name: "Photoshop"}],
        image: '/assets/Forward.png',
        live: "",
        github: "https://www.figma.com/design/vf1SuEqY2NvyQFhO7hyrvr/FORWARD?node-id=1-798&t=iIyCzzBXQ03KrZoi-1",
    },
    {
        num: "03",
        category: "F*CK OFF app",
        title: "Ux/Ui Design",
        discription: "This is a creative app with a main feature to help you avoid encountering people you dislike in real life. The app provides the best routes to escape.",
        stack: [{ name: "Ux/Ui"}, { name: "Figma"}, { name: "Illustrator"}, { name: "Photoshop"}],
        image: '/assets/FckOff.png',
        live: "",
        github: "https://www.figma.com/design/uuVemaPXZaBFVjbMRA1tvh/F*CK-OFF?node-id=1-1466&t=Hkc2dgAYZh3yYvR1-1",
    },
    {
        num: "04",
        category: "Wizzle Woodz website",
        title: "Front-end",
        discription: "This is the website for my UX/UI project. Here, you can find everything about the app, including my entire design process.",
        stack: [{ name: "Front-end"}, { name: "html"}, { name: "css"}, { name: "javascript"}],
        image: '/assets/WizzleWeb.png',
        live: "",
        github: "https://wizzlewoodz.netlify.app",
    },
    {
        num: "05",
        category: "Cursed Pack website",
        title: "Front-end",
        discription: "I created a sample pack for other producers. To sell it, I built this website to make it easy for people to buy.",
        stack: [{ name: "Front-end"}, { name: "html"}, { name: "css"}, { name: "javascript"}],
        image: '/assets/Cursed.png',
        live: "",
        github: "https://cursed-samplepack.netlify.app/",
    },
];

const Work = () => {
    const [project, SetProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        SetProject(projects[currentIndex]);
    };

    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1,
        transition: {
            delay: 0.4,
            duration: 1,
        }
        }}
        className=" xl:h-[70vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container x-auto">
                <div className="flex flex-col xl:flex-row gap-[60px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[40%]">

                        {/*nummer*/}
                        <div>
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                        </div>

                        {/*category*/}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}
                        </h2>

                        {/*beschrijving*/}
                        <p className="text-sm text-white/60">
                            {project.discription}
                        </p>

                        {/*stack*/}
                        <ul className="xl:flex gap-4">
                            {project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-accent text-xl">
                                        {item.name}
                                        {index !== project.stack.length -1 && ","}
                                    </li>
                                );
                            })}
                        </ul>

                        {/*border*/}
                        <div className="border border-white/60 mt-2"></div>

                        {/*buttons*/}
                        <div>
                            <Link href={project.github} className="text-white/60">
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger className="ml-6 mt-2 xl:mt-0 xl:mb-2 text-white hover:text-primery w-[50px] h-[50px] rounded-full bg-white/15 hover:bg-accent rotate-0 hover:rotate-45 transition-all duration-200 flex justify-center items-center ">
                                        <BsArrowUpRight className="text-2xl" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>view project</p>
                                    </TooltipContent>
                                 </Tooltip>
                               </TooltipProvider>
                               view project
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        className=" rounded-xl">
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                    <div className="h-[410px] relative group flex justify-center items-center">

                                        {/*overlay*/}
                                        <div>
                                        </div>

                                        {/*Foto*/}
                                        <div className="relative w-full h-full">
                                            <Image
                                            src={project.image}
                                            fill
                                            alt=""
                                            className="object-cover"
                                            />
                                        </div>

                                    </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns 
                            containerStyles="text-xl"
                            btnStyles="mr-4 mt-4 px-2 py-2 bg-white/10 hover:bg-accent rounded-xl"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Work;