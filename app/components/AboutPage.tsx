"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StatsSection from "./StatsSection";
import { Icon } from '@iconify/react';

export default function AboutSection() {
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

    return (
        <>
            <section className="about-banner py-28 px-12 md:px-0">
                <div className="about-overlay-banner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice"
                        style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="15%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="75%" stopColor="white" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                            </radialGradient>
                        </defs>
                        <g fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.1">
                            <circle r="100" cx="400" cy="400" />
                            <circle r="200" cx="400" cy="400" />
                            <circle r="300" cx="400" cy="400" />
                            <circle r="400" cx="400" cy="400" />
                            <circle r="500" cx="400" cy="400" />
                            <circle r="600" cx="400" cy="400" />
                        </g>
                        <circle r="400" cx="400" cy="400" fill="url(#cccircular-grad)" opacity="0.5" />
                    </svg>
                </div>
                <div className="about-heading relative text-center mt-4">
                    <h1 className="text-4xl md:text-7xl font-semibold mb-4 text-white">About Us</h1>
                    <p className="text-sm md:text-lg text-white/80">We craft innovation digital solution that drive growth and deliver results for your business.</p>
                </div>
            </section>
            <section className="main-about-section relative pt-18 md:pt-34 pb-22 px-6 md:px-28 overflow-hidden">
                {/* light1:center-glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#3bbbfc] opacity-15 blur-[120px] rounded-full"></div>
                {/* light2:top-corner-glow */}
                <div className="absolute -top-20 -right-20 w-100 h-100 bg-[#3bbbfc] opacity-5 blur-[100px] rounded-full"></div>
                {/* about-section-start */}
                <div className="about-section flex flex-wrap-reverse md:flex-row justify-between items-start relative z-10">
                    <div className="about-left basis-full lg:basis-[36%] mt-15 md:mt-0">
                        <div className="about-content relative h-full">
                            <div className="about-image relative w-full h-115 md:h-170 border-2 border-white/70 rounded-2xl md:rounded-3xl flex flex-col justify-center items-center group overflow-hidden">
                                <Image src="/images/aboutnew1.webp" alt="AboutUs1" fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority={false}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                                <div className="image-overlay absolute top-0 right-0 w-full h-full"
                                style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 187, 252, 0.600), transparent)", transition: "all 0.5s ease" }} />
                            </div>
                            <div className="absolute top-75 md:-top-8 right-7 md:-right-14 w-20 h-20 md:w-30 md:h-30 rounded-xl md:rounded-3xl bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0086cc] flex flex-col justify-center items-center z-20 border border-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-110 group shadow-2xl overflow-hidden"
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
                            <div className="images-box w-[80%] h-48 md:h-64 absolute -bottom-15 right-13 md:-right-18 flex flex-wrap justify-between items-center mt-4 gap-1">
                                <div className="about-image w-full h-full border-2 border-white/70 rounded-2xl relative group/img overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <Image src="/images/aboutnew2.webp" alt="AboutUs2" fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority={false}
                                    className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:-rotate-1" />
                                    <div className="image-overlay absolute top-0 right-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(125deg, rgba(59, 188, 252, 0.600), transparent)", transition: "all 0.5s ease" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right basis-full lg:basis-[63%] pl-0 lg:pl-28">
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
                            <div className="about-desc mt-5 bg">
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
                                            <div className="relative flex items-center justify-center w-8.5 h-8.5 md:w-12 md:h-12 shrink-0 mr-3 md:mr-4 rounded-full bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] shadow-[0_0_15px_rgba(59,188,252,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#3bbbfc]/70 group-hover:rotate-6">
                                                <div className="absolute inset-0.5 rounded-full border-t border-white/40 bg-white/5 opacity-40"></div>
                                                <div className="relative z-10 text-white drop-shadow-md">
                                                    <Icon icon={item.icon} className="w-4 h-4 md:w-5.5 md:h-5.5" />
                                                </div>
                                                <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-100 group-hover:opacity-100 transition-all duration-500"></div>
                                            </div>
                                            <small className="text-[12px] md:text-[16px] text-white/85 font-medium tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300 leading-tight">
                                                {item.label}
                                            </small>
                                        </div>
                                    ))}
                                </div>
                                <div className="about-more-info flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-10">
                                    <div className="happy-clients basis-full lg:basis-[63%] border border-[#3bbbfc]/30 ring-1 ring-[#3bbbfc]/10 shadow-lg shadow-[#01a8fc]/20 py-4.5 md:py-5 px-15 md:px-2 rounded-[14px] md:rounded-3xl text-center transition-all duration-500 hover:shadow-[#01a8fc]/60 hover:-translate-y-1 group"
                                        style={{ background: "linear-gradient(135deg, rgba(59, 187, 252, 0.15) 0%, rgba(1, 168, 252, 0.05) 100%)" }}>

                                        <div className="w-full">
                                            <div className="clients-round flex justify-center items-center mb-3 md:mb-2">
                                                {[
                                                    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&auto=format&fit=crop",
                                                    "https://media.istockphoto.com/id/2235903620/photo/happy-50-years-old-business-man-in-suit-standing-in-office-headshot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=2say2ge83Ytw-k3YPSCweS8BcXoira3VoIiZjwGzghQ=",
                                                    "https://plus.unsplash.com/premium_photo-1733971878518-fee3ce2b7aa6?q=80&w=1170&auto=format&fit=crop",
                                                    "https://plus.unsplash.com/premium_photo-1734498806767-55b6004d3eb9?w=600&auto=format&fit=crop&q=60"
                                                ].map((src, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-9 h-9 md:w-12 md:h-12 border md:border-2 border-white rounded-full overflow-hidden -ml-2 md:-ml-4 first:ml-0 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:z-50 relative"
                                                        style={{ zIndex: 10 - index }}
                                                    >
                                                        <img className="w-full h-full object-cover" src={src} alt="Client" />
                                                    </div>
                                                ))}

                                                <div className="z-10 w-9 h-9 md:w-12 md:h-12 border md:border-2 border-white/50 -ml-2 md:-ml-4 rounded-full bg-white/10 backdrop-blur-md flex justify-center items-center shadow-lg group-hover:bg-white/20 transition-colors">
                                                    <Icon icon="gravity-ui:heart-fill" className="text-white drop-shadow-md w-5 h-5 md:w-6 md:h-6" />
                                                </div>
                                            </div>

                                            <div className="space-y-1 md:space-y-0">
                                                <h2 className="text-[15px] md:text-lg font-extrabold text-[#50c5ff] tracking-tight drop-shadow-sm">
                                                    50+ Happy Clients
                                                </h2>
                                                <p className="text-blue-50 text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-80">
                                                    Trusted by industry leaders
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="welcome-clients hidden lg:basis-[35%] lg:flex justify-center items-center">
                                        <div className="relative flex items-center justify-center">
                                            <div className="group relative flex items-center justify-center w-40 h-40 rounded-full 
                                                  backdrop-blur-sm border border-[#3bbbfc]/30 ring-1 ring-[#3bbbfc]/10 
                                                  cursor-pointer transition-all duration-500 hover:scale-105 shadow-xl shadow-[#01a8fc]/20"
                                                style={{ background: "linear-gradient(135deg, rgba(59, 187, 252, 0.15) 0%, rgba(1, 168, 252, 0.05) 100%)" }}>
                                                <div className="absolute inset-0 p-0.5 flex items-center justify-center animate-[spin_15s_linear_infinite]">
                                                    <svg viewBox="0 0 120 120" className="w-full h-full">
                                                        <defs>
                                                            <path id="textCircleNew" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                                                        </defs>
                                                        <text className="fill-white text-[9px] font-bold uppercase tracking-[0.2em]">
                                                            <textPath href="#textCircleNew" startOffset="0%">
                                                                Build a Success Brand ByteCloud • Build a Success Brand ByteCloud •
                                                            </textPath>
                                                        </text>
                                                    </svg>
                                                </div>
                                                <div className="absolute w-[40%] h-[40%] rounded-full border border-[#3bbbfc]/30 bg-[#3bbbfc]/5 backdrop-blur-md pointer-events-none" />
                                                <div className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45">
                                                    <Icon icon="lineicons:arrow-angular-top-right" width="32" height="32" className="text-[#3bbbfc] drop-shadow-md" />
                                                </div>
                                                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                            </div>
                                        </div>
                                    </div>
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
                </div>
                {/* about-section-end */}
            </section>
            <StatsSection />
        </>
    );
}