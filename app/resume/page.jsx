"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaWordpress } from "react-icons/fa";
import { SiThreedotjs, SiTailwindcss, } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


//About data//
const about = {
    title: 'About me',
    discription: "I’m 23 years old and based in Limburg, Belgium. I’m passionate about designing and building digital experiences, with a strong interest in UX/UI and front-end development. I’m always looking to improve my skills and explore new tools within IT. I’m a social, ambitious, and creative person who enjoys learning, collaborating, and growing towards a career in digital product design.",
    info: [
        {
            fieldname: "Name",
            fieldValue:"Jarne Wils",
        },
        {
            fieldname: "Phone",
            fieldValue:"(+32)479489323",
        },
        {
            fieldname: "Experience",
            fieldValue:"Internship at FLUX – 3D Config",
        },
        {
            fieldname: "Nationality",
            fieldValue:"Belgium",
        },
        {
            fieldname: "Email",
            fieldValue:"jarnewils.werk@gmail.com",
        },
        {
            fieldname: "Languages",
            fieldValue:"Dutch, English, (French)",
        },
    ],
};

//Ervaring data//
const experience = {
    title: 'Work experience',
    discription: "My first experience as a digital designer and developer was during my internship at 3D Config, where I worked on creating 3D configurators using Three.js and React Three Fiber. This experience really sparked my passion for building digital products and pushed me to keep improving my skills and exploring new technologies.",
    items: [
        {
            company: "Student job",
            position:"Belcotex",
            duration:"2025-present",
        },
        {
            company: "internship",
            position:"FLUX (3D Config)",
            duration:"2025",
        },
        {
            company: "Student job",
            position:"Center Parcs",
            duration:"2021-2025",
        },
        {
            company: "Student job",
            position:"Carrefour",
            duration:"2019-2021",
        },
        {
            company: "Student job",
            position:"Tenten De Boer",
            duration:"summer of 2019",
        },
    ],
};

//Opleiding data//
const education = {
    title: 'My degrees',
    discription: "I recently graduated with a degree in Crossmedia Design and a teaching qualification. I am currently looking for a position as a UX/UI Designer or Web and App Developer where I can further develop my skills and gain more professional experience.",
    items: [
        {
            institution: "UCLL",
            degree:"Teacher Degree",
            duration:"2025-2026",
        },
        {
            institution: "AP Hogeschool Antwerpen",
            degree:"Crossmedia Design - GDM",
            duration:"2021 - 2025",
        },
        {
            institution: "Don Bosco Hechtel",
            degree:"Technical Sciences",
            duration:"2015-2021",
        },
        {
            institution: "Category B",
            degree:"Driver's license",
            duration:"2021",
        },
    ],
};

//skill data//
const skills = {
    title: 'Tools',
    discription: "Thanks to these technologies, I've been able to successfully complete several projects. While I have some familiarity with them, I'm still eager to improve my skills.",
    skillList: [
        {
            icon: <FaFigma />,
            name:"figma",
        },
        {
            icon: <FaWordpress />,
            name:"Wordpress",
        },
        {
            icon: <FaHtml5 />,
            name:"html",
        },
        {
            icon: <FaCss3 />,
            name:"css",
        },
        {
            icon: <SiTailwindcss />,
            name:"tailwind.css",
        },
        {
            icon: <FaJs />,
            name:"javascript",
        },
        {
            icon: <SiThreedotjs />,
            name:"Three.js",
        },
        {
            icon: <FaReact />,
            name:"React(native).js",
        },
    ],
};



const Resume = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5,
                ease: "easeIn",
            },
        }}
        className="min-h-[40vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList
                    className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
                    >
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Degrees</TabsTrigger>
                        <TabsTrigger value="skills">Tools</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/*inhoud */}
                    <div className="min-h-[70vh] w-full">

                        {/*experience */}
                            <TabsContent value="experience"className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">{experience.title}</h3>
                                    <p className="text-white/60 mx-auto xl:mx-0]">{experience.discription}</p>
                                    <ScrollArea className="h-[360px]">
                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li
                                                    key={index}
                                                    className="bg-[#27272c] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[4px] h-[4px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60 ">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>


                        {/*education */}
                            <TabsContent value="education"className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-3xl font-bold">{education.title}</h3>
                                    <p className="text-white/60 mx-auto xl:mx-0]">{education.discription}</p>
                                    <ScrollArea className="h-[360px]">
                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li
                                                    key={index}
                                                    className="bg-[#27272c] h-[150px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[4px] h-[4px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60 ">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>


                        {/*skills */}
                            <TabsContent value="skills"className="w-full h-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-3xl font-bold">{skills.title}</h3>
                                        <p className="text-white/60 mx-auto xl:mx-0]">{skills.discription}</p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider>
                                                        <Tooltip key={index}>
                                                            <TooltipTrigger className="w-full h-[100px] bg-[#27272e] hover:text-accent rounded-xl flex justify-center items-center">
                                                                <div className="text-4xl transition-all duration-300 justify-center items-center">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent sideOffset={0} avoidCollisions={false} className="transition-none">
                                                                <p>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>


                        {/*about me */}
                            <TabsContent value="about"className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-3xl font-bold">{about.title}</h3>
                                    <p className="text-white/60 mx-auto xl:mx-0]">{about.discription}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-2 max-w-[750px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => {
                                            return (
                                                <li
                                                key={index}
                                                className="flex justify-center items-center xl:justify-start gap-4"
                                                >
                                                    <span className="">{item.fieldname}</span>
                                                    <span className="text-sm text-accent">{item.fieldValue}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;