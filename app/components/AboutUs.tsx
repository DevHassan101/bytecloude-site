"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';


export default function AboutUs() {
    const texts = ["Our Expertise", "Our Passion", "Our Vision"];
    const [textIndex, setTextIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        texts[textIndex].slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, texts[textIndex].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "reverse",
            repeatDelay: 2,
            onComplete: () => {
                setTextIndex((prev) => (prev + 1) % texts.length);
                count.set(0);
            },
        });

        return () => controls.stop();
    }, [textIndex]);

    const skillData = [
        { label: "Strategy", value: 85 },
        { label: "User Experience", value: 95 },
        { label: "Development", value: 90 }
    ];

    return (
        <section className="main-about-section relative pt-20 pb-8 md:py-22 px-6 md:px-28 overflow-hidden">
            {/* light1:center-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#3bbbfc] opacity-15 blur-[120px] rounded-full"></div>
            {/* light2:top-corner-glow */}
            <div className="absolute -top-20 -right-20 w-100 h-100 bg-[#3bbbfc] opacity-5 blur-[100px] rounded-full"></div>
            {/* about-section-start */}
            <div className="about-section flex flex-wrap justify-between items-center relative z-10 ">
                <div className="about-left basis-full lg:basis-[56%]">
                    <div className="about-content">
                        <div className="about-title">
                            <div className="inline-flex items-center gap-3 text-[13px] md:text-sm text-white uppercase tracking-widest">
                                <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                <span className="font-semibold">Who we are</span>
                                <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h1 className="mt-6 md:mt-6 text-4xl md:text-[50px] text-white font-bold leading-[1.1] tracking-tight">
                                Your Digital Future
                            </h1>
                            <div className="text-4xl md:text-[50px] font-bold leading-[1.1] tracking-tight h-[1.2em] flex items-center  bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span key={textIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="inline-block">
                                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                                            {displayText}
                                        </motion.span>
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="about-desc mt-5 md:mt-5">
                            <p className="text-justify tracking-tight md:tracking-normal md:text-left pr-3 md:pr-0 max-w-xl text-white/80 text-[15px] md:text-lg">Our mission is to empower startups and enterprises with innovative the solutions
                                that boost online visibility, enhance lead generation and drive measurable growth in today's digital world.</p>
                            <div className="about-info grid grid-cols-2 gap-y-8 gap-x-4 mt-10 md:mt-12">
                                {[
                                    { id: 2, label: "Experience Team", icon: "fluent:people-community-48-filled" },
                                    { id: 1, label: "Proven Results", icon: "mingcute:target-fill" },
                                    { id: 3, label: "Fast Approach", icon: "mingcute:rocket-fill" },
                                    { id: 4, label: "Award Winnings", icon: "basil:award-solid" },
                                ].map((item) => (
                                    <div key={item.id} className="flex items-center group cursor-default">
                                        {/* Icon Orb with Neon Glow */}
                                        <div className="relative flex items-center justify-center w-8.5 h-8.5 md:w-12 md:h-12 shrink-0 mr-3 md:mr-4 rounded-full bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] shadow-[0_0_15px_rgba(59,188,252,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#3bbbfc]/70 group-hover:rotate-6">

                                            {/* Glass reflection layer */}
                                            <div className="absolute inset-0.5 rounded-full border-t border-white/40 bg-white/5 opacity-40"></div>

                                            {/* Icon */}
                                            <div className="relative z-10 text-white drop-shadow-md">
                                                <Icon
                                                    icon={item.icon}
                                                    className="w-4 h-4 md:w-5.5 md:h-5.5"
                                                />
                                            </div>

                                            {/* Outer Glow Ring */}
                                            <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-100 group-hover:opacity-100 transition-all duration-500"></div>
                                        </div>
                                        {/* Label */}
                                        <small className="text-[12px] md:text-[16px] text-white/85 font-medium tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300 leading-tight">
                                            {item.label}
                                        </small>
                                    </div>
                                ))}
                            </div>
                            <div className="about-bars w-full md:max-w-120 space-y-8 md:space-y-10 mt-10 md:mt-12">
                                {skillData.map((skill, index) => (
                                    <div key={index} className="group">
                                        {/* Label and Percentage */}
                                        <div className="flex justify-between items-end mb-2 md:mb-3">
                                            <span className="text-sm md:text-[17px] text-white/90 font-medium tracking-wide transition-colors duration-300 group-hover:text-[#3bbbfc]">
                                                {skill.label}
                                            </span>
                                            <span className="text-[11px] md:text-sm font-bold text-white bg-[#3bbbfc]/10 px-2 md:px-3 py-1 rounded-md border border-[#3bbbfc]/20 shadow-[0_0_15px_rgba(59,188,252,0.1)]">
                                                {skill.value}%
                                            </span>
                                        </div>
                                        {/* Progress Track */}
                                        <div className="relative w-full h-2 md:h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                                            {/* Glowing Progress Fill */}
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out relative"
                                                style={{
                                                    width: `${skill.value}%`,
                                                    background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)",
                                                    boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)"
                                                }}
                                            >
                                                {/* Animated Shine Effect */}
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="about-btn mt-10 md:mt-14">
                                <div className="flex justify-start items-center">
                                    <button className="group/btn relative flex items-center gap-3 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] p-1 pr-5 md:pr-10 rounded-full transition-all duration-500 shadow-[0_10px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_30px_rgba(59,187,252,0.6),0_0_60px_rgba(59,187,252,0.3)] active:scale-95 hover:bg-position-[100%_0] animate-gradient-slow">
                                        <div className="bg-white w-8.75 h-8.75 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-300 group-hover/btn:-rotate-45 group-hover/btn:scale-110 shadow-sm">
                                            <Icon icon="si:arrow-right-duotone" className="w-5.5 h-5.5 md:w-7.5 md:h-7.5 text-[#01a8fc]" />
                                        </div>
                                        <span className="text-white font-semibold tracking-normal md:tracking-wide text-sm md:text-[17px] pr-2">Explore Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right basis-full lg:basis-[44%] mt-14 md:mt-0">
                    <div className="about-content relative">
                        <div className="about-image relative w-full h-55 md:h-86 flex flex-col justify-center items-center group overflow-hidden rounded-[10px] md:rounded-2xl">
                            <Image
                                src="/images/aboutimg1.png"
                                alt="AboutUs1"
                                fill
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div
                                className="image-overlay absolute top-0 right-0 w-full h-full"
                                style={{
                                    backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)",
                                    transition: "all 0.5s ease"
                                }}
                            />
                        </div>
                        <div className="absolute top-45 md:-top-5 right-30 md:-left-10 w-20 h-20 md:w-30 md:h-30 rounded-xl md:rounded-3xl bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0086cc] flex flex-col justify-center items-center z-20 border border-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-110 group shadow-2xl overflow-hidden"
                            style={{ boxShadow: "0 20px 40px -10px rgba(1, 168, 252, 0.5)" }}>
                            <div className="absolute inset-0.5 rounded-xl md:rounded-3xl border-t border-white/50 bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-xl md:text-3xl lg:text-4xl text-white font-black leading-none tracking-tighter drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                                    5+
                                </span>
                                <p className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight mt-1.5 md:mt-2 text-center opacity-90">
                                    Years of <br />
                                    <span className="text-white/80 font-medium lowercase italic">Experience</span>
                                </p>
                            </div>
                            <div className="absolute -inset-full w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-all duration-1000 group-hover:left-full -left-full"></div>
                            <div className="absolute -bottom-4 w-full h-1/2 bg-white/20 blur-xl opacity-50"></div>
                        </div>
                        {/* Bottom Images Grid with Enhanced Effects */}
                        <div className="images-box relative flex flex-wrap justify-between items-start md:items-center mt-1.5 md:mt-2.5">
                            {/* Left Image */}
                            <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src="/images/aboutimg1.webp"
                                    alt="AboutUs2"
                                    fill
                                    className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-1"
                                />
                                <div
                                    className="image-overlay absolute bottom-0 left-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                {/* Corner Accent */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-[#3bbbfc]/80 to-transparent rounded-tl-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                            </div>
                            {/* Right Image */}
                            <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src="/images/aboutimg2.jpg"
                                    alt="AboutUs3"
                                    fill
                                    className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:-rotate-1"
                                />
                                <div
                                    className="image-overlay absolute top-0 right-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#3bbbfc]/80 to-transparent rounded-br-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about-section-end */}
        </section>
    );
}