"use client";

import CountUp from "react-countup";

const stats = [
{
    num: 3,
    text: "| Years of experience",
},
{
    num: 7,
    text: "| Projects completed",
},
{
    num: 6,
    text: "| Technologies",
},
{
    num: 5,
    text: "| Design programs",
},
];

const Stats = () => {
    return (
        <div className="container mx-auto mb-10 xl:mb-0">
            <div className="xl:flex xl:flex-wrap max-w-[100vw] mx-auot">
                {stats.map((item, index) => {
                    return (
                    <div 
                    className="flex-1 flex gap-2 xl:gap-0 mt-2 xl:mt-0 items-center justify-center xl:justify-start" 
                    key={index}>
                        <CountUp
                        end={item.num}
                        duration={2}
                        delay={1}
                        className="text-4xl xl:text-4xl xl:font-semibold"
                        />
                        <p>{item.text}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stats;