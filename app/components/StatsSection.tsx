'use client'

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    to: string | number;
    duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ to, duration = 3000 }) => {

    const [count, setCount] = useState<number | string>(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number | null = null;
            const endValue = parseFloat(to.toString());

            const step = (timestamp: number) => {
                if (startTime === null) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                if (endValue % 1 === 0) {
                    const currentCount = Math.floor(progress * endValue);
                    setCount(currentCount);
                } else {
                    const currentCount = (progress * endValue).toFixed(1);
                    setCount(currentCount);
                }

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }, [isInView, to, duration]);

    return (
        <span ref={countRef} className="tabular-nums">
            {count}
        </span>
    );
};

export default function StatsSection() {
    const stats = [
        { label: "Completed Projects", value: "150", suffix: "+" },
        { label: "Happy Clients", value: "100", suffix: "+" },
        { label: "Years of Experience", value: "5", suffix: "+" },
        { label: "Client Ratings", value: "4.8", suffix: "" },
    ];

    return (
        <section className="stats-section pt-4 pb-6 py-0 md:py-6 md:pb-0 px-6 md:px-28 bg-black">
            <div className="relative flex flex-wrap lg:flex-nowrap justify-around items-center py-6 md:py-8 px-6 rounded-2xl md:rounded-3xl border border-[#3bbbfc]/50 backdrop-blur-xl shadow-2xl overflow-hidden"
                 style={{ background: "linear-gradient(135deg, rgba(59, 187, 252, 0.300) 0%, rgba(1, 168, 252, 0.300) 100%)", 
                       boxShadow: "0 15px 40px -10px rgba(1, 168, 252, 0.25)"}}>

                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#01a8fc]/10 via-transparent to-[#3bbbfc]/10 pointer-events-none" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#01a8fc]/25 rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#01a8fc]/25 rounded-full blur-[80px]" />

                {stats.map((stat, index) => (
                    <div key={index} className="relative flex flex-col items-center px-8 py-4 md:py-6 group">
                        <h2 className="text-[35px] md:text-5xl text-white font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                            <CountUp to={stat.value} />
                            <span className="text-[#3bbbfc]">{stat.suffix}</span>
                        </h2>
                        <div className="flex items-center gap-2 mt-2 md:mt-3">
                            <span className="w-1.5 h-1.5 bg-[#3bbbfc] rounded-full" />
                            <p className="text-[10px] md:text-[12px] text-white/70 font-bold uppercase tracking-[0.2em] text-center">
                                {stat.label}
                            </p>
                        </div>
                        {index !== stats.length - 1 && (
                            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-14 bg-linear-to-b from-transparent via-white/40 to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
