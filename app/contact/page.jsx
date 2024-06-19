"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,  SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        discription: "(+32)479489323",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        discription: "jarnewils.werk@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Adres",
        discription: "Lentestraat 10, 3670 Oudsbergen",
    },
];

const Contact = () => {
    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 1,
                ease: "easeIn",
            }
        }}
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">

                    {/*form*/}
                    <div className="xl:w-[64%] order-2 xl:order-none">
                        <form className="flex flex-col gap-2 p-10 bg-[#27272e] rounded-xl">
                            <h3 className="text-3xl text-accent font-semibold">Let's work togehter!</h3>
                            <p className="text-white/60 text-base pt-2 pb-2">If you are interested in working with me, please select a service and feel free to contact me!</p>
                            {/*input*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <Input type="firstname" placeholder="First name"/>
                                <Input type="lastname" placeholder="Last name"/>
                                <Input type="email" placeholder="Email"/>
                                <Input type="phone" placeholder="Phone number"/>
                            </div>
                            {/*select*/}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="text-accent font-bold">Select a service</SelectLabel>
                                        <SelectItem value="uxui">UX/UI Design</SelectItem>
                                        <SelectItem value="frontend">Front-end Development</SelectItem>
                                        <SelectItem value="motiondesign">Motion Design</SelectItem>
                                        <SelectItem value="musicproduction">Music Production</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/*select*/}
                            <Textarea
                            className="h-200px"
                            placeholder="Type your message."
                            />
                            {/*button*/}
                            <Button size="md" className="max-w-40 mt-5">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272e] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-20px">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">{item.title}</p>
                                            <h3 className="text-white/60 text-base">{item.discription}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </motion.section>
    )
};

export default Contact;