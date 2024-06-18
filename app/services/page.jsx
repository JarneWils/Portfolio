"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Ux/Ui design',
        discription: 'As a UX/UI designer, I make your apps and websites look good and user-friendly. My goal is to create a smooth and enjoyable experience for users.',
        href: " ",
    },
    {
        num: '02',
        title: 'Web/App development',
        discription: 'With my current knowledge, I do my best to make your designs a reality and easy to use. My goal is to create a smooth and enjoyable user experience.',
        href: " ",
    },
    
    {
        num: '03',
        title: 'Motion design',
        discription: 'With programs like After Effects, I enjoy creating attractive animations that are useful for my designs or social media. They make messages more attractive.',
        href: " ",
    },
    {
        num: '04',
        title: 'Music production',
        discription: 'My free time is dedicated to music. With a passion for writing and producing music in every genre, I enjoy bringing my ideas to life.',
        href: " ",
    },
];

const Services = () => {
    return (
        <section className="min-h-[60] flex flex-col justify-center py-10 xl:py-0 mt-2">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 0.1, duration: 0.4, ease:"easeIn"},
                }}
                className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                    return (
                        <div
                        key={index}
                        className="flex-1 flex flex-col justify center gap-3 group"
                        >

                            {/*Top*/}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-200">
                                    {service.num}
                                </div>
                                <Link 
                                href={service.href}
                                className="w-[50px] h-[50px] rounded-full bg-white hover:bg-accent rotate-45 hover:rotate-0 transition-all duration-200 flex justify-center items-center ">
                                    <BsArrowRight className="text-primery text-2xl transition-all duration-300"/>
                                </Link>
                            </div>

                            {/*Titel*/}
                            <h2
                            className="text-2xl font-extrabold group-hover:text-accent"
                            >
                            {service.title}
                            </h2>

                            {/*beschrijving*/}
                            <p className="text-md text-white/60">{service.discription}</p>

                            {/*border*/}
                            <div className="border-b border-white/20 w-full"></div>

                        </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
};

export default Services;