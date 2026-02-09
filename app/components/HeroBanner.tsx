"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface SlideData {
    id: number;
    badge: string;
    title: string;
    highlight: string;
    description: string;
    mission: string;
    primaryBtn: string;
    secondaryBtn: string;
}

export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const slides: SlideData[] = [
        {
            id: 1,
            badge: "Welcome to ByteCloude",
            title: "Revolutionizing",
            highlight: "Web Designs",
            description: "In ByteCloude, we craft next-level digital experiences powered by data-driven strategies. From responsive web design, web development and SEO optimization.",
            mission: "Our mission is to empower startups and enterprises with innovative solutions that boost online visibility, enhance lead generation.",
            primaryBtn: "Get Started",
            secondaryBtn: "View Achievements",
        },
        {
            id: 2,
            badge: "Digital Excellence",
            title: "Transform Ideas into",
            highlight: "Reality",
            description: "We specialize in creating stunning web experiences that captivate your audience. Our expert team combines creativity with technical precision to deliver solutions that drive results and exceed expectations.",
            mission: "Partner with us to unlock your digital potential and establish a powerful online presence that sets you apart from the competition.",
            primaryBtn: "Explore Services",
            secondaryBtn: "Contact Us",
        },
        {
            id: 3,
            badge: "Innovation First",
            title: "Building",
            highlight: "Tomorrow's Web",
            description: "Stay ahead with cutting-edge technology and modern design principles. We leverage the latest tools and frameworks to build scalable, performant applications that grow with your business.",
            mission: "Let us help you navigate the digital landscape with confidence, delivering solutions that are built to last and designed to impress.",
            primaryBtn: "View Portfolio",
            secondaryBtn: "Learn More",
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        fade: true,
        arrows: false,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const highlightVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "backOut",
                delay: 0.2,
            },
        },
    };

    return (
        <>
            <section className="hero-banner">
                {/* Background SVG Overlay */}
                <div className="overlay-banner" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice"
                        style={{ width: '100%', height: '100%', opacity: 0.3 }}>
                        <defs>
                            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                                <stop offset="15%" stopColor="white" stopOpacity="0.3" />
                                <stop offset="75%" stopColor="white" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="white" stopOpacity="0.2" />
                            </radialGradient>
                        </defs>
                        <g fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2">
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
                {/* Slider Content */}
                <div className="w-full relative z-20 mt-15.5 md:mt-0">
                    <Slider {...sliderSettings}>
                        {slides.map((slide, index) => (
                            <div key={slide.id}>
                                <motion.div 
                                    className="hero-content w-full text-center px-5 md:px-10" 
                                    variants={containerVariants}
                                    initial="hidden" 
                                    animate={currentSlide === index ? "visible" : "hidden"} 
                                >
                                    {/* Badge */}
                                    <motion.div className="hero-title flex flex-col items-center" variants={itemVariants}>
                                        <span className="border md:border-2 border-amber-400 px-5 py-1.25 md:px-6 md:py-2 text-[10px] md:text-sm rounded-full text-white uppercase">
                                            {slide.badge}
                                        </span>
                                        {/* Main Title */}
                                        <h1 className="mt-3 md:mt-6 text-[23px] md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-white">
                                            {slide.title}
                                            <motion.span className="ml-1 text-amber-400" variants={highlightVariants}>
                                                {slide.highlight}
                                            </motion.span>
                                        </h1>
                                    </motion.div>
                                    {/* Description */}
                                    <motion.div className="hero-desc mt-3 md:mt-5 max-w-3xl mx-auto px-4 md:px-8 text-center" variants={itemVariants}>
                                        <p className="pb-3 text-[13px] sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                                            {slide.description}
                                        </p>
                                        <p className="pb-2 text-[13px] sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                                            {slide.mission}
                                        </p>
                                    </motion.div>
                                    {/* CTA Buttons */}
                                    <motion.div className="hero-btns mt-5 mb-5 flex flex-row gap-3 md:gap-2 justify-center items-center" variants={itemVariants}>
                                        <motion.button 
                                            className="py-2.5 px-7 md:py-4 md:px-12 btn1 dark-btn text-[11px] md:text-sm uppercase rounded-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            tabIndex={currentSlide === index ? 0 : -1}
                                            aria-label={slide.primaryBtn}
                                        >
                                            {slide.primaryBtn}
                                        </motion.button>
                                        <motion.button 
                                            className="py-2.5 px-7 md:py-4 md:px-12 btn2 light-btn text-[11px] md:text-sm uppercase rounded-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            tabIndex={currentSlide === index ? 0 : -1}
                                            aria-label={slide.secondaryBtn}
                                        >
                                            {slide.secondaryBtn}
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Floating Icons */}
                <div className="content-overlay" aria-hidden="true">
                    <div className="content-icons">
                        <div className="content-left">
                            <span className="span1 -translate-y-8 translate-x-12">
                                <Image src="/images/6.png" alt="" width={35} height={35} />
                            </span>
                            <span className="span2 -translate-y-6 -translate-x-6">
                                <Image src="/images/4.png" alt="" width={35} height={35} />
                            </span>
                            <span className="span3 translate-y-5 translate-x-12">
                                <Image src="/images/3.png" alt="" width={35} height={35} />
                            </span>
                        </div>
                        <div className="content-right">
                            <span className="span4 -translate-y-8 -translate-x-12">
                                <Image src="/images/1.png" alt="" width={35} height={35} />
                            </span>
                            <span className="span5 -translate-y-6 translate-x-6">
                                <Image src="/images/5.png" alt="" width={35} height={35} />
                            </span>
                            <span className="span6 translate-y-5 -translate-x-10">
                                <Image src="/images/2.png" alt="" width={35} height={35} />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}