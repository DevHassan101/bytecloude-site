'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceDetail } from '@/data/servicesDetails';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

interface ServiceDetailContentProps {
    service: ServiceDetail;
    slug: string;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {

    const services = [
        { name: 'Web Dev. & Consulting', active: true },
        { name: 'Courses Ux/UI Design', active: false },
        { name: 'Marketing & Branding', active: true },
        { name: 'Information architecture', active: false },
        { name: 'Prototyping', active: true },
        { name: 'Online UX strategy', active: false },
        { name: 'Wireframing', active: true },
    ];

    return (
        <div className="services-detail-section min-h-screen">
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
                    <h1 className="text-[26px] md:text-6xl font-semibold mb-1 lg:mb-4 text-white">{service.shortTitle}</h1>
                    <p className="text-sm md:text-lg max-w-4xl mx-auto text-white/80">{service.shortDescription}</p>
                </div>
            </section>
            <div className="w-full bg-black pt-22 pb-20 md:pb-80 px-5 md:px-26">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                    <div className="lg:col-span-3 space-y-5">
                        <div className="bg-black relative py-5 px-4.5 md:p-8 rounded-[20px] md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#3bbbfc]/16 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3bbbfc]/12 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                            </div>
                            <div className="relative z-10">
                                {/* Image Section */}
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] rounded-[20px] opacity-15 blur-lg" />
                                    <div className="relative bg-linear-to-br from-[#3bbbfc]/20 via-[#01a8fc]/10 to-transparent rounded-[18.5px] p-0.5">
                                        <div className="relative h-52 md:h-120 rounded-2xl overflow-hidden bg-black">
                                            <img src={service.bannerImage} alt={service.title} className="object-cover w-full h-full" />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute inset-0 bg-linear-to-br from-[#3bbbfc]/10 via-transparent to-[#01a8fc]/10 opacity-60" />
                                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#3bbbfc]/60 rounded-tl-[18px]" />
                                            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#3bbbfc]/60 rounded-tr-[18px]" />
                                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#3bbbfc]/60 rounded-bl-[18px]" />
                                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#3bbbfc]/60 rounded-br-[18px]" />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="mt-6 md:mt-8">
                                    <div className="flex items-start gap-3.5 md:gap-5 mb-4 lg:mb-6">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] rounded-xl opacity-22 blur-lg" />
                                            <div className="relative w-12 h-12 md:w-15 md:h-15 rounded-xl md:rounded-[14px] flex items-center justify-center overflow-hidden"
                                                style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)' }}>
                                                <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent" />
                                                <img src={service.icon} alt="services" className="relative z-10 w-5 h-5 md:w-7 md:h-7" />
                                            </div>
                                        </div>
                                        <div className="flex-1 py-0">
                                            <h2 className="text-[17px] md:text-[36px] lg:text-[36px] text-white font-bold mb-1 
                                            bg-linear-to-r from-white via-white to-[#3bbbfc] bg-clip-text">
                                                {service.title}
                                            </h2>
                                            <div className="hidden lg:flex h-1 w-12 lg:w-14 ml-1 rounded-full bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2 lg:space-y-5">
                                        <p className="text-sm md:text-[17px] text-gray-300 leading-relaxed text-justify">
                                            {service.description.intro}
                                        </p>
                                        <p className="text-sm md:text-[17px] text-gray-300 leading-relaxed text-justify">
                                            {service.description.detail}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-5 lg:mt-7 mb-2">
                                        <button className="relative py-3 px-5 lg:py-3 lg:px-7 rounded-[10px] lg:rounded-xl overflow-hidden bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] cursor-pointer transition-all duration-300 active:scale-100 hover:scale-100 hover:shadow-lg hover:brightness-110 group">
                                            <span className="relative z-10 text-white text-sm lg:text-base font-normal lg:font-medium flex items-center gap-2">
                                                Get Started
                                                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </button>
                                        <button className="relative py-3 px-5 lg:py-3 lg:px-7 rounded-[10px] lg:rounded-xl border-2 border-[#3bbbfc]/30 transition-all duration-300 hover:bg-[#3bbbfc] cursor-pointer group active:scale-100">
                                            <span className="relative z-10 text-[#3bbbfc] group-hover:text-white text-sm lg:text-base font-medium  tracking-wider flex items-center gap-2 transition-colors duration-300">
                                                View Portfolio
                                                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Technologies We Use */}
                        <div className="bg-black relative py-7 px-5 md:p-8 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30 shadow-sm">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#3bbbfc]/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3bbbfc]/12 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                            </div>
                            <div className="relative z-10">
                                <div className="text-center mb-8 z-10">
                                    <div className="inline-flex items-center gap-2 lg:gap-3 py-2 lg:py-2.75 px-4 lg:px-5 border border-[#3bbbfc]/40 rounded-full text-[10px] lg:text-xs text-white uppercase tracking-widest bg-linear-to-r from-[#3bbbfc]/5 via-[#3bbbfc]/10 to-[#3bbbfc]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,187,252,0.1)]">
                                        <span className="w-1.75 h-1.75 lg:w-2 lg:h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                        <span className="font-semibold">Technologies</span>
                                    </div>
                                    <h2 className="text-[23px] lg:text-[35px] text-white font-semibold lg:font-bold mt-3 mb-2 lg:mb-1">Our Tech Stack</h2>
                                    <p className="text-sm lg:text-base text-white/85">Modern tools and frameworks we work on this with goodies.</p>
                                </div>
                                <div className="skills-grid grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-10">
                                    {service.skills.map((skill, index) => (
                                        <div key={skill.id} className="group relative p-6 lg:p-7 rounded-3xl border border-[#3bbbfc]/50 bg-black/15 backdrop-blur-md 
                                         transition-all duration-500 hover:-translate-y-3 hover:border-[#3bbbfc]/40 overflow-hidden cursor-pointer">
                                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />
                                            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#3bbbfc]/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none" />
                                            <div className="relative z-10">
                                                <div className="skill-top flex justify-start items-center gap-4 lg:gap-5">
                                                    <div className="skill-icon relative w-12 h-12 lg:w-14 lg:h-14 shrink-0 flex justify-center items-center rounded-[13px] border-2 border-white/50 bg-linear-to-br from-white to-gray-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:rotate-10 transition-transform duration-500">
                                                        <Image src={skill.image} alt={skill.name} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" width={38} height={38} />
                                                        <div className="absolute inset-0 border border-white/50 rounded-2xl" />
                                                    </div>
                                                    <div className="skill-name">
                                                        <h3 className="text-lg lg:text-[20.5px] text-white font-bold tracking-wider lg:tracking-wide group-hover:text-[#3bbbfc] transition-colors duration-300">
                                                            {skill.name}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <span className="w-1.75 lg:w-2 h-1.75 lg:h-2 rounded-full bg-[#3bbbfc] animate-pulse" />
                                                            <p className="text-[10px] lg:text-[11px] text-[#3bbbfc] font-bold uppercase tracking-widest">Expertise</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="skill-bot mt-9 lg:mt-8.5">
                                                    <div className="flex justify-between items-center mb-2 lg:mb-3">
                                                        <span className="text-[11px] lg:text-xs text-white/50 font-bold uppercase tracking-widest">Proficiency</span>
                                                        <span className="text-[19px] lg:text-[22px] text-white font-bold tabular-nums drop-shadow-[0_0_10px_rgba(59,188,252,0.3)]">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="relative w-full h-2.25 lg:h-2.5 bg-black/20 rounded-full overflow-hidden border border-white/10">
                                                        <div className="h-full rounded-full transition-all duration-[1.5s] ease-out relative"
                                                            style={{
                                                                width: `${skill.level}%`, background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)",
                                                                boxShadow: "0 0 20px rgba(59, 188, 252, 0.6)"
                                                            }}>
                                                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Stats Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black relative p-6 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30 shadow-sm">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#3bbbfc]/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none" />
                                <div className="flex items-start relative z-10 gap-4">
                                    <div className="w-13.5 h-13.5 lg:w-15.5 lg:h-15.5 bg-gray-50 rounded-xl lg:rounded-[13px] flex items-center justify-center text-2xl">
                                        <Image src={service.stats.years.icon} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" width={38} height={38} alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg lg:text-xl text-white font-bold mb-2">{service.stats.years.title}</h3>
                                        <p className="text-white/80 text-[13px] lg:text-sm mb-4">
                                            {service.stats.years.description}
                                        </p>
                                        <div className="mb-2">
                                            <div className="flex justify-between text-[13px] lg:text-sm mb-3">
                                                <span className="text-white/90 font-medium">{service.stats.years.progressLabel}</span>
                                                <span className="text-white">{service.stats.years.progressValue}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.75 lg:h-2">
                                                <div className="h-1.75 lg:h-2 rounded-full" style={{ width: `${service.stats.years.progressValue}%`, background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-black relative p-6 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30 shadow-sm">
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#01a8fc]/30 blur-[50px] group-hover:bg-[#01a8fc]/20 transition-all duration-500" />
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-[#3bbbfc]/10 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out] pointer-events-none" />
                                <div className="flex items-start relative z-10 gap-4">
                                    <div className="w-13.5 h-13.5 lg:w-15.5 lg:h-15.5 bg-gray-50 rounded-xl lg:rounded-[13px] flex items-center justify-center text-2xl">
                                        <Image src={service.stats.consulting.icon} className="-mt-0.5 w-6 h-6 lg:w-8 lg:h-8 object-contain" width={38} height={38} alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg lg:text-xl text-white font-bold mb-2">{service.stats.consulting.title}</h3>
                                        <p className="text-white/80 text-[13px] lg:text-sm mb-4">
                                            {service.stats.consulting.description}
                                        </p>
                                        <div className="mb-2">
                                            <div className="flex justify-between text-white/80 text-[13px] lg:text-sm mb-3">
                                                <span className="text-white/90 font-medium">{service.stats.consulting.progressLabel}</span>
                                                <span className="text-white">{service.stats.consulting.progressValue}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.75 lg:h-2">
                                                <div className="h-1.75 lg:h-2 rounded-full" style={{ width: `${service.stats.consulting.progressValue}%`, background: "linear-gradient(90deg, #3bbbfc 0%, #01a8fc 100%)" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Working Module - Detailed Steps */}
                        <div className="bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-3xl border-2 border-[#3bbbfc]/30 shadow-lg py-10 px-6 lg:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white/8 rounded-full -translate-x-32 -translate-y-32" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/15 rounded-full translate-x-48 translate-y-48" />
                            <div className="relative z-10">
                                <div className="text-center mb-8 z-10">
                                    <div className="inline-flex items-center gap-2 lg:gap-3 py-2 lg:py-2.75 px-4 lg:px-5 bg-white/10 border border-white/60 rounded-full text-[10px] lg:text-xs text-white uppercase tracking-widest bg-linear-to-r from-[#3bbbfc]/5 via-[#3bbbfc]/10 to-[#3bbbfc]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,187,252,0.1)]">
                                        <span className="w-1.75 h-1.75 lg:w-2 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                        <span className="font-semibold">Working Module</span>
                                    </div>
                                    <h2 className="text-[22px] lg:text-[35px] text-white font-bold mt-3 mb-1">{service.moduleTitle}</h2>
                                    <p className="text-sm lg:text-[17px] text-white/90">{service.moduleSubtitle}</p>
                                </div>
                                <div className="bg-black border-2 border-white/95 shadow-lg relative px-5 py-8 lg:px-8 lg:py-10 rounded-xl md:rounded-[20px] overflow-hidden">
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#3bbbfc]/15 rounded-full blur-3xl" />
                                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/15 rounded-full blur-3xl" />
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 relative z-20">
                                        {service.workingSteps.map((step, index) => (
                                            <div key={index} className="flex gap-3 lg:gap-4">
                                                <div className="shrink-0">
                                                    <div className="w-13 h-13 lg:w-16 lg:h-16 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] rounded-[10px] lg:rounded-[14px] flex items-center justify-center text-3xl">
                                                        <img src={step.image} className='w-5.5 h-5.5 lg:w-9 lg:h-9' alt="step-images" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-[12.5px] lg:text-sm text-[#3bbbfc] font-semibold mb-0.5 lg:mb-1">{step.step}</div>
                                                    <h3 className="text-md lg:text-xl text-white font-bold tracking-wide mb-1 lg:mb-2">{step.title}</h3>
                                                    <p className="text-white/85 text-xs lg:text-sm">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Professional Experience - Past Projects */}
                        <div className="bg-black relative px-6 lg:px-8 pt-10 pb-6 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30 shadow-sm">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#3bbbfc]/20 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#01a8fc]/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3bbbfc]/12 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[4rem_4rem]" />
                            </div>
                            <div className="text-center mb-8 z-10 relative">
                                <div className="inline-flex items-center gap-2 lg:gap-3 py-2 lg:py-2.75 px-4 lg:px-5 border border-[#3bbbfc]/40 rounded-full text-[10px] lg:text-xs text-white uppercase tracking-widest bg-linear-to-r from-[#3bbbfc]/5 via-[#3bbbfc]/10 to-[#3bbbfc]/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,187,252,0.1)]">
                                    <span className="w-1.75 h-1.75 lg:w-2 lg:h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                                    <span className="font-semibold">Latest Work</span>
                                </div>
                                <h2 className="text-[22px] lg:text-[35px] text-white font-bold mt-3 mb-1">Professional Experience</h2>
                                <p className="text-sm lg:text-[17px] text-white/85">Professional Design Agency to provide the various solutions.</p>
                            </div>
                            <div className="relative z-10 mb-3">
                                <div className="w-full flex justify-end items-center mb-4 md:mb-5 gap-3 md:gap-3.5">
                                    <button className="swiper-button-prev-custom group relative flex justify-center items-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/60 overflow-hidden transition-all duration-500 shadow-[0_4px_14px_rgba(59,187,252,0.3)] cursor-pointer"
                                        style={{ background: `linear-gradient(145deg, #3bbbfc 0%, #0188fc 100%)` }}>
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                                        <ChevronLeft className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6" />
                                    </button>
                                    <button className="swiper-button-next-custom group relative flex justify-center items-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/60 overflow-hidden transition-all duration-500 shadow-[0_4px_14px_rgba(59,187,252,0.3)] cursor-pointer"
                                        style={{ background: `linear-gradient(145deg, #3bbbfc 0%, #0188fc 100%)` }}>
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                                        <ChevronRight className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 w-5 h-5 md:w-6 md:h-6" />
                                    </button>
                                </div>

                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    spaceBetween={18}
                                    slidesPerView={1}
                                    loop={service.projects.length > 3} // Only enable loop if more than 3 projects
                                    speed={500}
                                    navigation={{
                                        nextEl: '.swiper-button-next-custom',
                                        prevEl: '.swiper-button-prev-custom',
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: Math.min(2, service.projects.length),
                                            spaceBetween: 18,
                                        },
                                        1024: {
                                            slidesPerView: Math.min(3, service.projects.length),
                                            spaceBetween: 18,
                                        },
                                    }}
                                    className="projects-swiper"
                                >
                                    {service.projects.map((project, index) => (
                                        <SwiperSlide key={index}>
                                            <Link href={project.slug ? `/projects/${project.slug}` : '#'}>
                                                <div className="relative group cursor-pointer bg-black p-3 border-2 border-[#3bbbfc]/30 shadow-lg shadow-[#3bbbfc]/35 mb-4 rounded-[20px]">
                                                    <div className="h-full relative rounded-[20px]">
                                                        <div className="rounded-[13px] aspect-video flex items-center justify-center text-white relative overflow-hidden transition-transform group-hover:scale-105 duration-300">
                                                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                                            <div className="relative z-10 w-full h-full">
                                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                                            </div>
                                                        </div>
                                                        <div className="py-2 px-1">
                                                            <h3 className="font-bold text-[16px] lg:text-lg tracking-wide mt-1 mb-1 text-[#4dc3ff]">{project.title}</h3>
                                                            <p className="text-white/80 text-[13px]">{project.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 space-y-6">
                        {/* Search Box */}
                        <div className="hidden lg:block bg-black relative p-3 md:py-6 md:px-5.5 rounded-2xl md:rounded-[22px] overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-38 h-38 bg-[#3bbbfc]/35 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-34 h-34 bg-[#01a8fc]/35 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[2rem_2rem]" />
                            </div>
                            <h3 className="text-xl text-white font-semibold tracking-wide mb-3 relative z-10">Search Here:</h3>
                            <div className="relative z-10">
                                <input type="text" placeholder="Enter Your Keyword..."
                                    className="w-full px-4 py-3.5 pr-18 bg-black/50 text-[15px] font-light backdrop-blur-sm border-2 border-[#3bbbfc]/40 rounded-[11px] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#3bbbfc] focus:border-[#3bbbfc]/70 transition-all duration-300" />
                                <button className="absolute right-0 top-0 h-full px-4 bg-linear-to-r from-[#3bbbfc] to-[#0188fc] text-white rounded-r-[11px] hover:shadow-lg hover:shadow-[#3bbbfc]/50 transition-all duration-300 group">
                                    <Icon icon="ic:round-search" width="24" height="24" className="group-hover:scale-110 transition-transform duration-300" style={{ color: "#fff" }} />
                                </button>
                            </div>
                        </div>
                        {/* Services List */}
                        <div className="bg-black relative py-6 px-6 md:py-6 md:px-5.5 rounded-2xl md:rounded-[22px] overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-45 h-45 bg-[#3bbbfc]/35 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-35 h-35 bg-[#01a8fc]/35 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[2rem_2rem]" />
                            </div>
                            <h3 className="text-xl text-white font-semibold tracking-wide mb-4 relative z-10">Services List</h3>
                            <div className="space-y-4 relative z-10">
                                {services.map((service, index) => (
                                    <button key={index} className={`w-full text-left px-4 py-3.5 rounded-[11px] text-white font-medium transition-colors 
                                        ${service.active ? 'bg-linear-to-l from-[#01a8fc] to-[#3bbbfc] border border-[#3bbbfc]' : 'bg-linear-to-r from-[#01a8fc] to-[#3bbbfc] border border-[#3bbbfc]'}`}>
                                        {service.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div className="hidden lg:block bg-black relative p-3 md:py-6 md:px-5.5 rounded-2xl md:rounded-[22px] overflow-hidden border-2 border-[#3bbbfc]/30">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-34 h-34 bg-[#3bbbfc]/35 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-30 h-30 bg-[#01a8fc]/35 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[2rem_2rem]" />
                            </div>
                            <h3 className="text-xl text-white font-semibold tracking-wide mb-4 relative z-10">Social Links</h3>
                            <div className="flex gap-3.5">
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
                        {/* Contact Card */}
                        <div className="bg-linear-to-br from-[#0a0a0a] to-black relative px-5 py-5 md:py-7 md:px-6 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#3bbbfc]/30 shadow-xl">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#3bbbfc]/35 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -right-20 w-45 h-45 bg-[#01a8fc]/35 rounded-full blur-3xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3bbbfc08_1px,transparent_1px),linear-gradient(to_bottom,#3bbbfc08_1px,transparent_1px)] bg-size-[2rem_2rem]" />
                            </div>
                            <div className="relative z-10">
                                <div className="relative w-full h-45 md:h-48 mb-5 rounded-2xl overflow-hidden group cursor-pointer border-3 border-[#3bbbfc]/40">
                                    <img
                                        src="https://thumbs.dreamstime.com/b/telemarketing-concept-happy-hotline-operators-selling-goods-services-voip-telephony-call-centre-team-helpdesk-199569241.jpg"
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                        alt="Contact Support"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="absolute w-18 h-18 rounded-full border-4 border-white/30 animate-ping" />
                                        <div className="absolute w-20 h-20 rounded-full border-2 border-white/20 animate-pulse" />
                                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#01a8fc]/85 rounded-full blur-3xl" />
                                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#01a8fc]/85 rounded-full blur-3xl" />
                                        <div className="relative w-15 h-15 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                            <Icon icon="mingcute:play-fill" width="24" height="24" style={{ color: "#3bbbfc" }} />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-white text-[22px] md:text-2xl font-semibold mb-1 lg:mb-3">Contact Us</h3>
                                <div className="bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-[10px] lg:rounded-[14px] py-3 px-4 flex items-center gap-2.5">
                                    <div className="w-11.5 h-11.5 bg-white rounded-full flex items-center justify-center">
                                        <Icon icon="clarity:email-solid" width="17" height="17" style={{ color: "#3bbbfc" }} />
                                    </div>
                                    <div>
                                        <div className="text-white text-sm">Contact Mail</div>
                                        <div className="text-white font-medium">info.contact@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}