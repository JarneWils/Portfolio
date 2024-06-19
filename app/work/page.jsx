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
        category: "Ux/Ui Design",
        title: "Wizzle Woodz Vakantiepark",
        discription: "I designed a prototype for an app for employees and guests of a holiday park. The app allows guests to report issues to staff and helps them enhance their stay.",
        stack: [{ name: "Figma"}, { name: "Adobe Illustrator"}, { name: "Adobe Photoshop"}],
        image: '/assets/Wizzle-Woodz.png',
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fornt-end",
        title: "project 2",
        discription: "dit is een korte beschrijving van het project dat van toepassing is op deze plaats om te weten hoe de tekst eruit ziet",
        stack: [{ name: "html"}, { name: "css"}, { name: "javascript"}],
        image: '/assets/Wizzle-Woodz.png',
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "fornt-end",
        title: "project 3",
        discription: "dit is een korte beschrijving van het project dat van toepassing is op deze plaats om te weten hoe de tekst eruit ziet",
        stack: [{ name: "html"}, { name: "css"}, { name: "javascript"}],
        image: '/assets/Wizzle-Woodz.png',
        live: "",
        github: "",
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