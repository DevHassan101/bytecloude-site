// "use client";

// import Image from "next/image";
// import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Icon } from '@iconify/react';


// export default function AboutUs() {
//     const texts = ["Our Expertise", "Our Passion", "Our Vision"];
//     const [textIndex, setTextIndex] = useState(0);
//     const count = useMotionValue(0);
//     const rounded = useTransform(count, (latest) => Math.round(latest));
//     const displayText = useTransform(rounded, (latest) =>
//         texts[textIndex].slice(0, latest)
//     );

//     useEffect(() => {
//         const controls = animate(count, texts[textIndex].length, {
//             type: "tween",
//             duration: 1.5,
//             ease: "easeInOut",
//             repeat: 1,
//             repeatType: "reverse",
//             repeatDelay: 2,
//             onComplete: () => {
//                 setTextIndex((prev) => (prev + 1) % texts.length);
//                 count.set(0);
//             },
//         });

//         return () => controls.stop();
//     }, [textIndex]);

//     const skillData = [
//         { label: "Strategy", value: 85 },
//         { label: "User Experience", value: 95 },
//         { label: "Development", value: 90 }
//     ];

//     return (
//         <section className="main-about-section relative pt-16 pb-10 md:py-22 px-6 md:px-28 overflow-hidden">
//             {/* light1:center-glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#3bbbfc] opacity-15 blur-[120px] rounded-full"></div>
//             {/* light2:top-corner-glow */}
//             <div className="absolute -top-20 -right-20 w-100 h-100 bg-[#3bbbfc] opacity-5 blur-[100px] rounded-full"></div>
//             {/* about-section-start */}
//             <div className="about-section flex flex-wrap justify-between items-center relative z-10 ">
//                 <div className="about-left basis-full lg:basis-[56%]">
//                     <div className="about-content">
//                         <div className="about-title">
//                             <div className="inline-flex items-center gap-3 text-[13px] md:text-sm text-white uppercase tracking-widest">
//                                 <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
//                                 <span className="font-semibold">Who we are</span>
//                                 <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                             <h1 className="mt-6 md:mt-6 text-4xl md:text-[50px] text-white font-bold leading-[1.1] tracking-tight">
//                                 Your Digital Future
//                             </h1>
//                             <div className="text-4xl md:text-[50px] font-bold leading-[1.1] tracking-tight h-[1.2em] flex items-center  bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] overflow-hidden">
//                                 <AnimatePresence mode="wait">
//                                     <motion.span key={textIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="inline-block">
//                                         <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
//                                             {displayText}
//                                         </motion.span>
//                                     </motion.span>
//                                 </AnimatePresence>
//                             </div>
//                         </div>
//                         <div className="about-desc mt-3 md:mt-5">
//                             <p className="text-justify tracking-tight md:tracking-normal md:text-left pr-3 md:pr-0 max-w-xl text-white/80 text-[15px] md:text-lg">Our mission is to empower startups and enterprises with innovative the solutions
//                                 that boost online visibility, enhance lead generation and drive measurable growth in today's digital world.</p>
//                             <div className="about-info grid grid-cols-2 gap-y-8 gap-x-4 mt-7 md:mt-10">
//                                 {[
//                                     { id: 2, label: "Experience Team", icon: "fluent:people-community-48-filled" },
//                                     { id: 1, label: "Proven Results", icon: "mingcute:target-fill" },
//                                     { id: 3, label: "Fast Approach", icon: "mingcute:rocket-fill" },
//                                     { id: 4, label: "Award Winnings", icon: "basil:award-solid" },
//                                 ].map((item) => (
//                                     <div key={item.id} className="flex items-center group cursor-default">
//                                         <div className="relative flex items-center justify-center w-9 h-9 md:w-12 md:h-12 shrink-0 mr-3 md:mr-4 rounded-full bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] shadow-[0_0_15px_rgba(59,188,252,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#3bbbfc]/70 group-hover:rotate-6">
//                                             <div className="absolute inset-0.5 rounded-full border-t border-white/40 bg-white/5 opacity-40"></div>
//                                             <div className="relative z-10 text-white drop-shadow-md">
//                                                 <Icon icon={item.icon} className="w-4 h-4 md:w-5.5 md:h-5.5"/>
//                                             </div>
//                                             <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-100 group-hover:opacity-100 transition-all duration-500"></div>
//                                         </div>
//                                         <small className="text-[12px] md:text-[16px] text-white/85 font-medium tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300 leading-tight">
//                                             {item.label}
//                                         </small>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="about-bars w-full md:max-w-120 space-y-8 md:space-y-10 mt-7 md:mt-10">
//                                 {skillData.map((skill, index) => (
//                                     <div key={index} className="group">
//                                         <div className="flex justify-between items-end mb-2 md:mb-3">
//                                             <span className="text-sm md:text-[17px] text-white/90 font-medium tracking-wide transition-colors duration-300 group-hover:text-[#3bbbfc]">
//                                                 {skill.label}
//                                             </span>
//                                             <span className="text-[11px] md:text-sm font-bold text-white bg-[#3bbbfc]/10 px-2 md:px-3 py-1 rounded-md border border-[#3bbbfc]/20 shadow-[0_0_15px_rgba(59,188,252,0.1)]">
//                                                 {skill.value}%
//                                             </span>
//                                         </div>
//                                         <div className="relative w-full h-2 md:h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
//                                             <div className="h-full rounded-full transition-all duration-1000 ease-out relative"
//                                                 style={{ width: `${skill.value}%`, background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)", boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)" }}>
//                                                 <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="about-btn mt-9 md:mt-13">
//                                 <div className="flex justify-start items-center">
//                                     <button className="group/btn relative flex items-center gap-3 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] p-1 pr-5 md:pr-10 rounded-full transition-all duration-500 shadow-[0_10px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_30px_rgba(59,187,252,0.6),0_0_60px_rgba(59,187,252,0.3)] active:scale-95 hover:bg-position-[100%_0] animate-gradient-slow">
//                                         <div className="bg-white w-8.75 h-8.75 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-300 group-hover/btn:-rotate-45 group-hover/btn:scale-110 shadow-sm">
//                                             <Icon icon="si:arrow-right-duotone" className="w-5.5 h-5.5 md:w-7.5 md:h-7.5 text-[#01a8fc]" />
//                                         </div>
//                                         <span className="text-white font-semibold tracking-normal md:tracking-wide text-sm md:text-[17px] pr-2">Explore Now</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="about-right basis-full lg:basis-[44%] mt-10 md:mt-0">
//                     <div className="about-content relative">
//                         <div className="about-image relative w-full h-50 md:h-86 flex flex-col justify-center items-center group overflow-hidden rounded-[10px] md:rounded-2xl">
//                             <Image src="/images/aboutimage1.webp" alt="AboutUsOurTeam" fill sizes="(max-width: 768px) 100vw, 50vw" quality={75}
//                             className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-1" />
//                             <div className="image-overlay absolute top-0 right-0 w-full h-full"
//                             style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)", transition: "all 0.5s ease" }} />
//                         </div>
//                         <div className="absolute top-40 md:-top-5 right-30 md:-left-10 w-20 h-20 md:w-30 md:h-30 rounded-xl md:rounded-3xl bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0086cc] flex flex-col justify-center items-center z-20 border border-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-110 group shadow-2xl overflow-hidden"
//                             style={{ boxShadow: "0 20px 40px -10px rgba(1, 168, 252, 0.5)" }}>
//                             <div className="absolute inset-0.5 rounded-xl md:rounded-3xl border-t border-white/50 bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
//                             <div className="relative z-10 flex flex-col items-center">
//                                 <span className="text-xl md:text-3xl lg:text-4xl text-white font-black leading-none tracking-tighter drop-shadow-md group-hover:scale-110 transition-transform duration-500">
//                                     5+
//                                 </span>
//                                 <p className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight mt-1.5 md:mt-2 text-center opacity-90">
//                                     Years of <br />
//                                     <span className="text-white/80 font-medium lowercase italic">Experience</span>
//                                 </p>
//                             </div>
//                             <div className="absolute -inset-full w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-all duration-1000 group-hover:left-full -left-full"></div>
//                             <div className="absolute -bottom-4 w-full h-1/2 bg-white/20 blur-xl opacity-50"></div>
//                         </div>
//                         <div className="images-box relative flex flex-wrap justify-between items-start md:items-center mt-1.5 md:mt-2.5">
//                             <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
//                                 <Image src="/images/aboutimage2.webp" alt="AboutUsOurVision" fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority={false}
//                                 className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-1" />
//                                 <div className="image-overlay absolute bottom-0 left-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
//                                 style={{ backgroundImage: "linear-gradient(125deg, rgba(59, 188, 252, 0.600), transparent)" }} />
//                                 <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-[#3bbbfc]/80 to-transparent rounded-tl-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
//                             </div>
//                             <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
//                                 <Image src="/images/aboutimage3.webp" alt="AboutUsOurVision" fill sizes="(max-width: 768px) 100vw, 50vw" quality={75} priority={false} 
//                                 className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:-rotate-1" />
//                                 <div className="image-overlay absolute top-0 right-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
//                                 style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)" }} />
//                                 <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#3bbbfc]/80 to-transparent rounded-br-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* about-section-end */}
//         </section>
//     );
// }

"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const icons = {
    people: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M11.5 7.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M6 6a4 4 0 1 0 0 8a4 4 0 0 0 0-8m20 0a4 4 0 1 0 0 8a4 4 0 0 0 0-8M8.5 16.5q0-.334.053-.651l-4.7 1.259a2.5 2.5 0 0 0-1.767 3.062l.906 3.38a6 6 0 0 0 7.996 4.03A7.48 7.48 0 0 1 8.5 22zm15 5.5a7.48 7.48 0 0 1-2.49 5.58q.315.124.647.213a6 6 0 0 0 7.348-4.243l.906-3.38a2.5 2.5 0 0 0-1.768-3.062l-4.696-1.259q.053.319.053.651zm-11-8a2.5 2.5 0 0 0-2.5 2.5V22a6 6 0 0 0 12 0v-5.5a2.5 2.5 0 0 0-2.5-2.5z" /></svg>
    ),
    target: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a1 1 0 1 1 0 2a8 8 0 1 0 8 8a1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 1 1 0 2a4 4 0 1 0 4 4a1 1 0 1 1 2 0a6 6 0 1 1-6-6m6.571-3.9a.5.5 0 0 1 .5.5v1.83a.5.5 0 0 0 .5.499H21.4a.5.5 0 0 1 .5.5v.915l-1.888 1.888a2 2 0 0 1-1.414.586h-2l-3.89 3.889a1 1 0 0 1-1.414-1.414l3.89-3.889v-2a2 2 0 0 1 .585-1.414l1.89-1.89z" strokeWidth="0.4" stroke="#fff" /></svg>
    ),
    rocket: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#fff" d="m18.165 2.765l.255.032c.674.093 1.566.218 2.071.724c.414.413.573 1.085.668 1.685l.056.386c.126.91.159 2.102-.056 3.426c-.424 2.613-1.815 5.731-5.308 8.145c-.019.188-.02.378-.016.568l.01.284c.016.437.032.874-.09 1.298c-.19.66-.867 1.095-1.5 1.407l-.31.147l-.4.176c-.748.318-1.758.644-2.391.01c-.38-.379-.536-.935-.663-1.488l-.047-.207a8 8 0 0 0-.2-.774q-.075-.22-.162-.445a3 3 0 0 1-.203.225c-.345.345-.86.586-1.284.755c-.463.183-.987.343-1.472.475l-.249.066l-.477.119l-.432.1l-.517.11l-.323.063a1.01 1.01 0 0 1-1.177-1.177l.086-.431l.154-.698l.124-.51l.094-.36c.132-.484.292-1.008.476-1.47c.168-.425.409-.94.754-1.285l.08-.077l-.064-.026a8 8 0 0 0-.519-.177l-.277-.085c-.694-.21-1.436-.436-1.897-.898c-.56-.559-.371-1.41-.101-2.118l.11-.274l.177-.4l.147-.31c.312-.632.747-1.309 1.407-1.499c.35-.1.714-.106 1.08-.096l.22.007c.286.01.571.021.85-.006c2.414-3.494 5.532-4.885 8.145-5.309a11.8 11.8 0 0 1 3.171-.088M8.353 15.44a1 1 0 0 0-1.1-.06l-.11.074l-.093.083l-.125.158c-.26.376-.408.896-.523 1.382l-.108.468l-.051.213l.191-.046l.418-.096c.578-.135 1.219-.31 1.613-.665a1 1 0 0 0 .088-1.314l-.082-.094l-.024-.023zm7.183-6.974a2 2 0 1 0-2.829 2.828a2 2 0 0 0 2.829-2.828" /></g></svg>
    ),
    award: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.25 9.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0" /><path fill="#fff" fillRule="evenodd" d="M5 9.5a7 7 0 1 1 12.923 3.733l2.727 4.722a.75.75 0 0 1-.796 1.11l-2.616-.52l-.858 2.526a.75.75 0 0 1-1.36.134l-2.72-4.711a7 7 0 0 1-.6 0l-2.72 4.711a.75.75 0 0 1-1.36-.132l-.861-2.52l-2.614.513a.75.75 0 0 1-.795-1.11l2.727-4.723A6.97 6.97 0 0 1 5 9.5m2.086 4.985a7 7 0 0 0 3.027 1.758l-1.607 2.783l-.54-1.579a.75.75 0 0 0-.854-.493l-1.637.322zm6.801 1.758l1.605 2.779l.537-1.581a.75.75 0 0 1 .856-.495l1.638.326l-1.609-2.787a7 7 0 0 1-3.027 1.758M12 6.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" /></svg>
    ),
    arrowRight: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06" /></svg>
    )
};

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
    }, [textIndex, count, texts]);

    const skillData = useMemo(() => [
        { label: "Strategy", value: 85 },
        { label: "User Experience", value: 95 },
        { label: "Development", value: 90 }
    ], []);

    const infoItems = useMemo(() => [
        { id: 2, label: "Experience Team", icon: icons.people },
        { id: 1, label: "Proven Results", icon: icons.target },
        { id: 3, label: "Fast Approach", icon: icons.rocket },
        { id: 4, label: "Award Winnings", icon: icons.award },
    ], []);

    return (
        <section className="main-about-section relative pt-16 pb-10 md:py-22 px-6 md:px-28 overflow-hidden">
            {/* Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#3bbbfc] opacity-15 blur-[120px] rounded-full" aria-hidden="true" />
            <div className="absolute -top-20 -right-20 w-100 h-100 bg-[#3bbbfc] opacity-5 blur-[100px] rounded-full" aria-hidden="true" />

            <div className="about-section flex flex-wrap justify-between items-center relative z-10">
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
                            <div className="text-4xl md:text-[50px] font-bold leading-[1.1] tracking-tight h-[1.2em] flex items-center bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={textIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="inline-block"
                                    >
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1 }}
                                        >
                                            {displayText}
                                        </motion.span>
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="about-desc mt-3 md:mt-5">
                            <p className="text-justify tracking-tight md:tracking-normal md:text-left pr-3 md:pr-0 max-w-xl text-white/80 text-[15px] md:text-lg">
                                Our mission is to empower startups and enterprises with innovative the solutions that boost online visibility, enhance lead generation and drive measurable growth in today's digital world.
                            </p>

                            {/* ✅ Icons without library */}
                            <div className="about-info grid grid-cols-2 gap-y-8 gap-x-4 mt-7 md:mt-10">
                                {infoItems.map((item) => (
                                    <div key={item.id} className="flex items-center group cursor-default">
                                        <div className="relative flex items-center justify-center w-9 h-9 md:w-12 md:h-12 shrink-0 mr-3 md:mr-4 rounded-full bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] shadow-[0_0_15px_rgba(59,188,252,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#3bbbfc]/70 group-hover:rotate-6">
                                            <div className="absolute inset-0.5 rounded-full border-t border-white/40 bg-white/5 opacity-40" />
                                            <div className="relative z-10 text-white drop-shadow-md w-4 h-4 md:w-6 md:h-6">
                                                {item.icon}
                                            </div>
                                            <div className="absolute inset-0 rounded-full border border-white/20 scale-110 opacity-100 group-hover:opacity-100 transition-all duration-500" />
                                        </div>
                                        <small className="text-[12px] md:text-[16px] text-white/85 font-medium tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300 leading-tight">
                                            {item.label}
                                        </small>
                                    </div>
                                ))}
                            </div>

                            <div className="about-bars w-full md:max-w-120 space-y-8 md:space-y-10 mt-7 md:mt-10">
                                {skillData.map((skill, index) => (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-end mb-2 md:mb-3">
                                            <span className="text-sm md:text-[17px] text-white/90 font-medium tracking-wide transition-colors duration-300 group-hover:text-[#3bbbfc]">
                                                {skill.label}
                                            </span>
                                            <span className="text-[11px] md:text-sm font-bold text-white bg-[#3bbbfc]/10 px-2 md:px-3 py-1 rounded-md border border-[#3bbbfc]/20 shadow-[0_0_15px_rgba(59,188,252,0.1)]">
                                                {skill.value}%
                                            </span>
                                        </div>
                                        <div className="relative w-full h-2 md:h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out relative"
                                                style={{
                                                    width: `${skill.value}%`,
                                                    background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)",
                                                    boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)"
                                                }}
                                            >
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="about-btn mt-9 md:mt-13">
                                <div className="flex justify-start items-center">
                                    <button
                                        className="group/btn relative flex items-center gap-3 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] p-1 pr-5 md:pr-10 rounded-full transition-all duration-500 shadow-[0_10px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_30px_rgba(59,187,252,0.6),0_0_60px_rgba(59,187,252,0.3)] active:scale-95 hover:bg-position-[100%_0] animate-gradient-slow"
                                        aria-label="Explore ByteCloude services"
                                    >
                                        <div className="bg-white w-8.75 h-8.75 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-300 group-hover/btn:-rotate-45 group-hover/btn:scale-110 shadow-sm">
                                            <div className="w-4.5 h-4.5 md:w-7 md:h-7 text-[#01a8fc]">
                                                {icons.arrowRight}
                                            </div>
                                        </div>
                                        <span className="text-white font-semibold tracking-normal md:tracking-wide text-sm md:text-[17px] pr-2">
                                            Explore Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-right basis-full lg:basis-[44%] mt-10 md:mt-0">
                    <div className="about-content relative">
                        <div className="about-image relative w-full h-50 md:h-86 flex flex-col justify-center items-center group overflow-hidden rounded-[10px] md:rounded-2xl">
                            <Image
                                src="/images/aboutimage1.webp"
                                alt="ByteCloude team collaboration and expertise"
                                fill
                                sizes="(max-width: 768px) 100vw, 44vw"
                                quality={80}
                                priority={true}
                                className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-1"
                            />
                            <div
                                className="image-overlay absolute top-0 right-0 w-full h-full"
                                style={{
                                    backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)",
                                    transition: "all 0.5s ease"
                                }}
                            />
                        </div>

                        <div
                            className="absolute top-40 md:-top-5 right-30 md:-left-10 w-20 h-20 md:w-30 md:h-30 rounded-xl md:rounded-3xl bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0086cc] flex flex-col justify-center items-center z-20 border border-white/40 backdrop-blur-md cursor-pointer transition-all duration-500 hover:scale-110 group shadow-2xl overflow-hidden"
                            style={{ boxShadow: "0 20px 40px -10px rgba(1, 168, 252, 0.5)" }}
                            role="img"
                            aria-label="5 years of experience"
                        >
                            <div className="absolute inset-0.5 rounded-xl md:rounded-3xl border-t border-white/50 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-xl md:text-3xl lg:text-4xl text-white font-black leading-none tracking-tighter drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                                    5+
                                </span>
                                <p className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight mt-1.5 md:mt-2 text-center opacity-90">
                                    Years of <br />
                                    <span className="text-white/80 font-medium lowercase italic">Experience</span>
                                </p>
                            </div>
                            <div className="absolute -inset-full w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] transition-all duration-1000 group-hover:left-full -left-full" />
                            <div className="absolute -bottom-4 w-full h-1/2 bg-white/20 blur-xl opacity-50" />
                        </div>

                        <div className="images-box relative flex flex-wrap justify-between items-start md:items-center mt-1.5 md:mt-2.5">
                            <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src="/images/aboutimage2.webp"
                                    alt="ByteCloude vision and innovation"
                                    fill
                                    sizes="(max-width: 768px) 49vw, 22vw"
                                    quality={75}
                                    loading="lazy"
                                    className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:rotate-1"
                                />
                                <div
                                    className="image-overlay absolute bottom-0 left-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-[#3bbbfc]/80 to-transparent rounded-tl-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="about-image basis-[49%] h-40 md:h-60 relative group/img overflow-hidden rounded-[10px] md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src="/images/aboutimage3.webp"
                                    alt="ByteCloude workspace and culture"
                                    fill
                                    sizes="(max-width: 768px) 49vw, 22vw"
                                    quality={75}
                                    loading="lazy"
                                    className="w-full object-cover transition-transform duration-700 group-hover/img:scale-110 group-hover/img:-rotate-1"
                                />
                                <div
                                    className="image-overlay absolute top-0 right-0 w-full h-full transition-opacity duration-500 group-hover/img:opacity-80"
                                    style={{ backgroundImage: "linear-gradient(-125deg, rgba(59, 188, 252, 0.600), transparent)" }}
                                />
                                <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-[#3bbbfc]/80 to-transparent rounded-br-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}