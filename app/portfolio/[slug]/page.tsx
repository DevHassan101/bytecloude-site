"use client";

import { useState, use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { projectDetailsData } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import { Icon } from '@iconify/react';
import Link from "next/link";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {

    const { slug } = use(params);
    const project = projectDetailsData[slug];
    const [activeSlide, setActiveSlide] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    if (!project) {
        notFound();
    }


    return (
        <div className="min-h-screen bg-black">
            <section className="portfolio-banner py-28 px-12 md:px-0">
                <div className="portfolio-overlay-banner">
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
                    <h1 className="text-3xl md:text-6xl font-semibold mb-2 lg:mb-4 text-white">{project.title}</h1>
                    <p className="text-sm md:text-lg max-w-4xl mx-auto text-white/80">We craft innovation digital solution that drive growth and deliver results for your business.</p>
                </div>
            </section>
            <div className="w-full pt-14 pb-20 md:pt-25 md:pb-80 px-6 md:px-28">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-black relative py-4 px-3 md:py-7 md:px-6 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-85 h-80 bg-[#3bbbfc]/18 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/18 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3bbbfc]/10 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                            </div>
                            <div className="relative w-full h-52 md:h-120 rounded-[14px] md:rounded-[18px] p-1 md:p-1.25 bg-[#3bbbfc]/10">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    speed={800}
                                    onSwiper={setSwiperInstance}
                                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    effect="slide"
                                    className="w-full h-full rounded-xl"
                                >
                                    {project.images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative w-full h-full rounded-[10px] md:rounded-xl flex items-center justify-center">
                                                <img
                                                    src={image}
                                                    alt={`${project.title} - Image ${index + 1}`}
                                                    className="w-full h-full object-top object-cover rounded-[10px] md:rounded-xl"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="flex items-center gap-2.5 px-2 py-5 md:py-8 cursor-pointer">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveSlide(index);
                                            if (swiperInstance) {
                                                swiperInstance.slideTo(index);
                                            }
                                        }}
                                        className={`h-1.75 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${index === activeSlide
                                            ? "w-8 bg-linear-to-r from-[#3bbbfc] to-[#01a8fc]"
                                            : "w-1.75 md:w-2 bg-white hover:bg-gray-400"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="px-1.5">
                                <div className="border-t border-[#3bbbfc]/30"></div>
                            </div>
                            <div className="pt-5 md:pt-5 px-2 pb-5">
                                <h2 className="text-[20px] md:text-[32px] text-white font-semibold tracking-wide mb-1.5">
                                    {project.title}
                                </h2>
                                <div className='hidden md:block w-10 h-0.75 md:h-0.75 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] rounded-full mb-3 md:mb-5 transition-all duration-500' />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-4 md:mt-6">
                                    <div>
                                        <h3 className="text-[13px] md:text-[15px] uppercase font-semibold text-white/90 mb-2 md:mb-3 tracking-wider">
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 md:px-2.5 py-0.75 md:py-1 bg-linear-to-r from-[#2fa9e6] to-[#01a8fc] text-white text-[11px] md:text-xs rounded-[5px]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[13px] md:text-[15px] uppercase font-semibold text-white/90 mb-1 md:mb-2 tracking-wider">
                                            DELIVERABLES
                                        </h3>
                                        <p className="text-white/60 text-[13px] md:text-sm leading-relaxed">
                                            {project.deliverables}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-[13px] md:text-[15px] uppercase font-semibold text-white/90 -mt-1.5 md:mt-0 mb-1 md:mb-2 tracking-wider">
                                            INDUSTRY
                                        </h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            {project.industry}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black relative mt-6 py-4 px-4 md:p-7 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-85 h-80 bg-[#3bbbfc]/18 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/18 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3bbbfc]/12 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                            </div>
                            <h2 className="text-[21px] md:text-[24px] text-white font-semibold tracking-wide mb-1.5">
                                Project Description:
                            </h2>
                            <div className='w-10 h-0.75 md:h-0.75 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] rounded-full mb-4 md:mb-6 transition-all duration-500' />
                            {project.description.split('\n\n').map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-white/85 text-sm md:text-[15px] tracking-tight md:tracking-normal text-justify leading-tight md:leading-relaxed mb-4"
                                >
                                    {paragraph}
                                </p>
                            ))}
                            {project.interestingFacts && (
                                <div className="bg-[#3bbbfc]/20 relative z-10 rounded-xl md:rounded-2xl p-4.5 md:p-8 mb-4 md:mb-6">
                                    <h3 className="text-xl md:text-2xl font-semibold text-[#3bbbfc] mb-1.5 md:mb-3">
                                        {project.interestingFacts.title}
                                    </h3>
                                    <p className="text-white/85 text-sm md:text-[15px] tracking-tight md:tracking-normal text-justify leading-tight md:leading-relaxed mb-4 md:mb-7">
                                        {project.interestingFacts.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.interestingFacts.facts.map((fact, index) => (
                                            <div key={index} className="flex items-start gap-2 md:gap-3">
                                                <span className="bg-white w-5 h-5 md:w-6 md:h-6 flex justify-center items-center
                                                 text-[10px] md:text-[13px] text-green-500 rounded-full">✓</span>
                                                <span className="text-white/85 text-sm md:text-[15px]">
                                                    {fact}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="w-full h-48 md:h-55 rounded-xl md:rounded-[14px]">
                                    <div className="w-full h-full flex items-center justify-center rounded-xl md:rounded-[14px]">
                                        <img src="/images/projects/rms/rms-thumbnail.png" className="h-full object-cover rounded-xl md:rounded-[14px]" alt="" />
                                    </div>
                                </div>
                                <div className="w-full h-48 md:h-55 rounded-xl md:rounded-[14px]">
                                    <div className="w-full h-full flex items-center justify-center rounded-xl md:rounded-[14px]">
                                        <img src="/images/projects/dms/dms-thumbnail.png" className="h-full object-cover rounded-xl md:rounded-[14px]" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-black relative py-5 px-5 md:p-7 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30">
                               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#3bbbfc]/7 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#01a8fc]/7 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[3rem_3rem]" />
                            </div>
                            <h3 className="text-[21px] md:text-[24px] text-white font-semibold tracking-wide mb-1">
                                Project Information:
                            </h3>
                            <div className='w-8.5 h-0.75 md:h-0.75 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] rounded-full mb-4 md:mb-6 transition-all duration-500' />
                            <div className="space-y-6">
                                {project.client && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            Client
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <span className="ml-4 text-[15px] md:text-base text-white/85">
                                            {project.client}
                                        </span>
                                    </div>
                                )}

                                <div className="flex">
                                    <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                        Category
                                    </span>
                                    <span className="text-[15px] md:text-base text-white/60">:</span>
                                    <span className="ml-4 text-[15px] md:text-base text-white/85">
                                        {project.category}
                                    </span>
                                </div>

                                {project.tags && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            Tags
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <span className="ml-4 text-[15px] md:text-base text-white/85">
                                            {project.tags.join(", ")}
                                        </span>
                                    </div>
                                )}

                                {project.startDate && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            Start Date
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <span className="ml-4 text-[15px] md:text-base text-white/85">
                                            {project.startDate}
                                        </span>
                                    </div>
                                )}

                                {project.endDate && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            End Date
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <span className="ml-4 text-[15px] md:text-base text-white/85">
                                            {project.endDate}
                                        </span>
                                    </div>
                                )}

                                {project.price && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            Price
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <span className="ml-4 text-[15px] md:text-base text-white/85">
                                            {project.price}
                                        </span>
                                    </div>
                                )}

                                {project.websiteUrl && (
                                    <div className="flex">
                                        <span className="w-18 md:w-32 text-[15px] md:text-base font-medium text-white">
                                            Website
                                        </span>
                                        <span className="text-[15px] md:text-base text-white/60">:</span>
                                        <Link
                                            href={project.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-4 text-[15px] md:text-base text-blue-600 hover:underline cursor-pointer"
                                        >
                                            {project.websiteUrl}
                                        </Link>
                                    </div>
                                )}

                                <div className="px-0">
                                    <div className="border-t border-[#3bbbfc]/40"></div>
                                </div>

                                <div className="pt-0">
                                    <span className="w-32 text-[15px] md:text-base font-semibold text-white/80 block mb-3 md:mb-4">
                                        Share Here:
                                    </span>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-8.5 h-8.5 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300">
                                            <Icon icon="ri:instagram-fill" className="text-white text-[15px] md:text-[19px]" />
                                        </a>
                                        <a href="#" className="w-8.5 h-8.5 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:facebook" className="text-white text-[15px] md:text-[19px]" />
                                        </a>
                                        <a href="#" className="w-8.5 h-8.5 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mdi:twitter" className="text-white text-[15px] md:text-[19px]" />
                                        </a>
                                        <a href="#" className="w-8.5 h-8.5 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300">
                                            <Icon icon="ri:linkedin-fill" className="text-white text-[15px] md:text-[19px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute top-0 left-0 right-0 w-full h-full 
                            bg-linear-to-br from-[#3bbbfc]/32 via-transparent to-[#3bbbfc]/25 rounded-br-xl blur-[80px] transition-all duration-700 pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
