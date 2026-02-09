'use client';

import Image from "next/image";
import { Icon } from '@iconify/react';
import { useState } from "react";

export default function AboutFaqs() {
    const faqs = [
        {
            id: 1,
            question: "How do you ensure the scalability of your digital products?",
            answer: "We build with a 'growth-first' mindset, utilizing modern frameworks like Next.js and React to ensure your platform can handle increasing traffic without performance drops."
        },
        {
            id: 2,
            question: "What is your typical project timeline from start to finish?",
            answer: "Most custom projects range from 4 to 12 weeks. We use an agile approach, delivering functional milestones every two weeks so you see constant progress."
        },
        {
            id: 3,
            question: "Do you provide post-launch maintenance and support?",
            answer: "Absolutely. We offer dedicated support packages that include security updates, speed optimization, and feature scaling to keep your digital presence electrified."
        },
        {
            id: 4,
            question: "Can you integrate custom third-party APIs into our existing systems?",
            answer: "Yes, we specialize in seamless integrations—whether it's payment gateways, CRM systems, or custom internal tools—to ensure your workflow is fully automated."
        },
        {
            id: 5,
            question: "How do you handle UI/UX design for complex software?",
            answer: "Our design process focuses on user psychology. We create intuitive wireframes and high-fidelity prototypes to ensure the final product is as easy to use as it is beautiful."
        },
        {
            id: 6,
            question: "What makes your agency's development process different?",
            answer: "We don't just write code; we solve business problems. Our 'Electrify' method combines transparent communication with high-performance tech stacks to drive measurable ROI."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    const toggleAccordion = (id) => {
        setActiveIndex(activeIndex === id ? null : id);
    };


    return (
        <>
            <section className="main-faqs-section relative pt-14 pb-20 md:pt-25 md:pb-80 px-6 md:px-28 overflow-hidden">
                {/* faqs-header-start */}
                <div className="faqs-header text-center relative">
                    <div className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest">
                        <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                        <span className="font-semibold">Our Faq's</span>
                        <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative">
                        <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-1.5 md:mr-3">
                            Here's Your Top
                        </span>
                        <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Questions
                        </span>
                        <div className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
                    </div>
                    <div className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto">
                        <p className="text-[13px] md:text-[17px] text-white/80">
                            We combine technical expertise with bold design to build products that matter crafting seamless interactions that connect brands with people.
                        </p>
                    </div>
                </div>
                {/* faqs-header-end */}

                {/* faqs-section-start */}
                <div className="faqs-section mt-12 md:mt-14">
                    <div className="faqs-box flex flex-wrap justify-between items-start">

                        <div className="faqs-left-box basis-full lg:basis-[36%] relative overflow-hidden bg-linear-to-br from-[#0a0a0a] via-[#000000] to-[#0a0a0a] border md:border-2 border-[#3bbbfc] px-8 md:px-10 py-18 md:py-24 rounded-2xl md:rounded-4xl 
                        shadow-[0_7px_20px_rgba(59,187,252,0.300)] transition-all duration-500 hover:border-[#3bbbfc]/60 hover:shadow-[0_0_80px_rgba(59,187,252,0.25)] group">

                            <div className="absolute -top-20 -right-20 w-40 h-50 bg-[#3bbbfc]/50 rounded-full blur-[80px] group-hover:bg-[#3bbbfc]/55 transition-all duration-700" />

                            <div className="absolute inset-0 opacity-25" style={{
                                backgroundImage: 'linear-gradient(rgba(59,187,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(59,187,252,0.10) 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }} />

                            <div className="faqs-content relative z-10 flex flex-col h-full justify-between gap-12">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-5 md:px-4 py-1.5 md:py-2 bg-[#3bbbfc]/10 border border-[#3bbbfc]/30 rounded-full backdrop-blur-sm">
                                        <span className="w-1.75 h-1.75 md:w-2 md:h-2 bg-[#3bbbfc] rounded-full animate-pulse" />
                                        <span className="text-[#3bbbfc] text-[11px] md:text-xs font-semibold uppercase tracking-wider">FAQ's</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mt-5 md:mt-2">
                                        <span className="text-white/95">How We Electrify</span>
                                        <br />
                                        <span className="text-[#3bbbfc]">Digital Presences </span>
                                        <br />
                                        <span className="text-white/95"> Your Questions Answered.</span>
                                    </h2>
                                </div>

                                <div className="faqs-btn mt-4 md:mt-8 flex justify-start items-center">
                                    <button className="group/btn relative flex items-center gap-3 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] p-1 pr-5 md:pr-10 rounded-full transition-all duration-500 shadow-[0_12px_20px_rgba(1,168,252,0.3)] hover:shadow-[0_0_30px_rgba(59,187,252,0.6),0_0_60px_rgba(59,187,252,0.3)] active:scale-95 hover:bg-position-[100%_0] animate-gradient-slow">
                                        <div className="bg-white w-8.75 h-8.75 md:w-12 md:h-12 rounded-full flex justify-center items-center transition-all duration-300 group-hover/btn:-rotate-45 group-hover/btn:scale-110 shadow-sm">
                                            <Icon icon="si:arrow-right-duotone" className="w-5.5 h-5.5 md:w-7.5 md:h-7.5 text-[#01a8fc]" />
                                        </div>
                                        <span className="text-white font-semibold tracking-normal md:tracking-wide text-sm md:text-[17px] pr-2">Read More</span>
                                    </button>
                                </div>
                            </div>

                            <div className="faqs-image absolute bottom-2 md:bottom-3 right-0 md:right-1 rounded-br-4xl opacity-50 group-hover:opacity-50 transition-opacity duration-500">
                                <img src="./images/faqs-image.png" alt="faqs-image.png" className="w-35 md:w-55 grayscale contrast-125 brightness-90" />
                            </div>
                        </div>

                        <div className="faqs-right-box basis-full lg:basis-[60%] mt-6 md:mt-0">
                            <div className="w-full flex flex-col gap-4">
                                {faqs.map((faq) => {
                                    const isOpen = activeIndex === faq.id;
                                    return (
                                        <div key={faq.id} className={`group overflow-hidden transition-all duration-500 rounded-xl md:rounded-2xl cursor-pointer border md:border-2
                                             ${isOpen ? 'border-[#3bbbfc] bg-white/5 shadow-[0_20px_40px_-15px_rgba(59,188,252,0.3)]'
                                                : 'border-[#3bbbfc] bg-linear-to-br from-[#3bbbfc] via-[#01a8fc] to-[#0091df] shadow-[0_3px_10px_rgba(59,188,252,0.4)] hover:shadow-[0_10px_20px_rgba(59,188,252,0.4)]'}`}
                                            onClick={() => toggleAccordion(faq.id)}>
                                            <div className="flex items-center justify-between p-5 md:p-7 select-none">
                                                <div className="flex-1 pr-4">
                                                    <h3 className={`text-sm md:text-xl font-bold transition-colors duration-300 
                                                    ${isOpen ? 'text-[#3bbbfc]' : 'text-white'}`}>
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                                <div className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex justify-center items-center transition-all duration-500 
                                                    ${isOpen ? 'bg-[#3bbbfc]/20 rotate-180' : 'bg-white/20'}`}>
                                                    <div className={`absolute w-2.5 md:w-4 h-0.5 transition-colors duration-300 
                                                    ${isOpen ? 'bg-[#3bbbfc]' : 'bg-white'}`} />
                                                    <div className={`absolute h-2.5 md:h-4 w-0.5 transition-all duration-500 
                                                    ${isOpen ? 'scale-y-0 opacity-0 bg-[#3bbbfc]' : 'scale-y-100 opacity-100 bg-white'}`} />
                                                </div>
                                            </div>
                                            <div className={`transition-all duration-500 ease-in-out overflow-hidden
                                                ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="px-6 md:px-6 pb-8 pt-2">
                                                    <div className="w-full h-0.25 md:h-0.5 bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] opacity-60 mb-5 rounded-full shadow-[0_0_5px_rgba(59,188,252,0.5)]" />
                                                    <p className="text-white/80 text-[13px] md:text-lg leading-relaxed max-w-full md:max-w-[95%]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* faqs-section-start */}

            </section>
        </>
    )
}