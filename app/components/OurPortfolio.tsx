'use client';

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from 'lucide-react';
// import { Icon } from '@iconify/react';
import Link from "next/link";


const projects = [
  {
    id: 1,
    image: '/images/projects/rms/rms-thumbnail.png',
    category: 'Web Development',
    title: 'Smart Dine Restaurant POS',
    slug: 'smart-pos',
    description: 'A powerful Restaurant Management System featuring real-time table management, digital menus, and sales analytics.'
  },
  {
    id: 2,
    image: '/images/projects/lms/lms-thumbnail.png',
    category: 'Web Development',
    title: 'Elite Education Learning Hub',
    slug: 'smart-edu',
    description: 'An all-in-one Learning Management System with course enrollment, student progress tracking, and automated certifications.'
  },
  {
    id: 3,
    image: '/images/projects/dms/dms-thumbnail.png',
    category: 'Web Development',
    title: 'Truecare Medical Ecosystem',
    slug: 'smart-dms',
    description: 'A comprehensive healthcare platform for doctor consultations, patient records, and seamless appointment scheduling.'
  },
  {
    id: 4,
    image: '/images/projects/ecom/ecom-thumbnail.png',
    category: 'Web Development',
    title: 'ByteCloud E-Commerce Store',
    slug: 'smart-ecomm',
    description: 'A premium E-commerce experience with dynamic product displays, secure Stripe checkout, and user-friendly navigation.'
  },
];

export default function OurPortfolio() {

  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'App Development', 'UI/UX Design', 'Graphics Design'];

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(project => project.category === activeFilter);

  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <section className="main-portfolio-section relative pt-14 pb-0 md:py-24 px-6 md:px-28 overflow-hidden">
      {/* light1:top-right-glow */}
      <div className="absolute top-12 -right-24 w-125 h-125 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>
      {/* light2:bottom-left-glow */}
      <div className="absolute bottom-12 -left-24 w-125 h-125 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>
      {/* portfolio-section-start */}
      <div className="portfolio-section">
        {/* portfolio-header-start */}
        <div className="portfolio-header text-center relative">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
            <span className="font-semibold">Our Portfolio</span>
            <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative">
            <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-3">
              Projects that Reflect My
            </span>
            <br />
            <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto]">
              Expertise and Vision
            </span>
            <div className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
          </div>
        </div>
        {/* portfolio-header-end */}

        {/* porfolio-cards-start */}
        <div className="portfolio-content mt-16">
          <div className="flex flex-row overflow-x-auto justify-start md:justify-center items-center gap-4 md:gap-6 p-3 scroll-smooth w-[96%] mx-auto md:w-full custom-scrollbar">
            {categories.map((category_name) => (
              <button key={category_name} onClick={() => setActiveFilter(category_name)}
                className={`relative shrink-0 px-7 py-2.25 md:px-8 md:py-3 rounded-full border transition-all duration-500 cursor-pointer text-xs md:text-sm font-bold md:font-semibold tracking-wide md:tracking-wider uppercase overflow-hidden
                ${activeFilter === category_name ? "bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] text-white border-white/40 shadow-[0_5px_12px_rgba(59,187,252,0.4)] scale-105"
                    : "bg-white/5 backdrop-blur-lg text-white/60 border-white/10 hover:bg-white/10 hover:text-white hover:border-[#3bbbfc]/50 hover:scale-105"}`}>
                {activeFilter === category_name && (
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_2s_infinite]" />
                )}
                <span className="relative z-10">{category_name}</span>
              </button>
            ))}
          </div>
          <div className="portfolio-cards grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-0 md:px-5 py-12 md:py-10">
            {filteredProjects.map((filterproject) => {
              const isActive = activeCardId === filterproject.id;

              return (
                <div key={filterproject.id} onClick={() => handleCardClick(filterproject.id)}
                  className={`group relative border md:border-2 border-[#3bbbfc]/30 rounded-3xl md:rounded-[40px] overflow-hidden transition-all duration-700 cursor-pointer bg-black/20 backdrop-blur-sm
                  ${isActive ? 'scale-[1.02] -translate-y-2' : ''} md:hover:scale-[1.02] md:hover:-translate-y-2 `}>

                  <div className="relative p-4 md:p-8 flex flex-col h-full bg-linear-to-br from-transparent to-white/5">

                    <div className={`absolute -bottom-24 right-0 w-60 h-65 rounded-br-xl blur-[80px] transition-all duration-700 ${isActive ? 'bg-[#01a8fc]/30' : 'bg-[#01a8fc]/20'} md:group-hover:bg-[#01a8fc]/30`} />

                    <div className={`relative w-full h-50 md:h-85 rounded-[14px] md:rounded-[22px] overflow-hidden shadow-2xl transition-all duration-700
                    ${isActive ? 'shadow-[0_25px_50px_rgba(0,0,0,0.4)]' : 'shadow-[#3bbbfc]/20'} md:group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] `}>

                      <div className={`absolute inset-0 z-10 border-[1.5px] md:border-4 rounded-[14px] md:rounded-[22px] transition-colors
                      ${isActive ? 'border-white/20' : 'border-white/40'} md:group-hover:border-white/20`} />

                      <Image src={filterproject.image} alt={filterproject.title} fill className={`object-cover transition-all duration-1000 
                      ${isActive ? 'scale-110 rotate-1' : ''} md:group-hover:scale-110 md:group-hover:rotate-1 `} />

                      <div className="view-project-overlay absolute inset-0 flex items-center justify-center overflow-hidden">

                        <div className={`absolute inset-0 bg-black/40 rounded-[14px] md:rounded-[20px] backdrop-blur-[2px] transition-opacity duration-500
                        ${isActive ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100 `} />

                        <div className={`relative z-10 transition-all duration-500 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                        md:group-hover:scale-100 md:group-hover:opacity-100`}>

                          <Link key={filterproject.id} href={`/portfolio/${filterproject.slug}`} className="group/btn relative flex items-center gap-2 md:gap-3 bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] px-4.5 py-3 md:py-3 md:px-6 rounded-xl shadow-[0_10px_30px_rgba(59,187,252,0.4)] hover:shadow-[0_15px_50px_rgba(59,187,252,0.7)] transition-shadow duration-300">

                            <div className="absolute inset-0 overflow-hidden rounded-xl">
                              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                            </div>

                            <span className="relative z-10 text-white font-bold tracking-wide text-xs md:text-[15px] whitespace-nowrap">
                              View Project
                            </span>

                            <div className="relative z-10 flex items-center justify-center w-5 h-5 md:w-7 md:h-7 bg-white/20 rounded-md md:rounded-lg group-hover/btn:bg-white/30 transition-colors duration-300 rotate-45">
                              <ArrowUpRight className="w-3 h-3 md:w-4.5 md:h-4.5 text-white" />
                            </div>
                          </Link>

                        </div>
                      </div>

                      <div className="absolute bottom-6 left-6 z-40 hidden md:block">
                        <div className="relative group/badge">
                          <div className="absolute inset-0 bg-[#3bbbfc] blur-md rounded-full opacity-50" />
                          <span className="relative block px-5 py-2 rounded-xl text-[10px] font-black border border-[#3bbbfc]/50 bg-white text-[#3bbbfc] tracking-[0.15em] uppercase">
                            {filterproject.category}
                          </span>
                        </div>
                      </div>

                      <div className={`absolute top-6 left-6 w-5 h-5 md:w-8 md:h-8 transition-all duration-500 z-20 border-t border-l md:border-t-2 md:border-l-2 border-white md:border-white/70
                      ${isActive ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`} />

                      <div className={`absolute bottom-6 right-6 w-5 h-5 md:w-8 md:h-8 transition-all duration-500 z-20 border-b border-r md:border-b-2 md:border-r-2 border-white md:border-white/70
                      ${isActive ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`} />

                      <div className={`absolute top-5 right-6 md:top-8 md:right-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-sparkle-1 z-20 shadow-[0_0_10px_white]
                      ${isActive ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`} />

                      <div className={`absolute top-10 right-10 md:top-16 md:right-16 w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-sparkle-2 z-20
                      ${isActive ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100`} />

                    </div>

                    {/* Text Content Area */}
                    <div className="mt-6 md:mt-8 px-2 flex-1 flex flex-col">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className={`text-[18px] md:text-[26px] font-bold tracking-wide leading-tight mb-2 md:mb-3 transition-colors duration-500 
                          ${isActive ? 'text-[#3bbbfc]' : 'text-white'} md:group-hover:text-[#3bbbfc]`}>
                            {filterproject.title}
                          </h3>
                          <div className={`h-0.75 md:h-[3.5px] bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] rounded-full mb-4 md:mb-5 transition-all duration-500
                          ${isActive ? 'w-28' : 'w-20'} md:group-hover:w-28`} />

                          <p className={`text-[13px] md:text-[15px] leading-relaxed font-medium transition-colors duration-500 
                          ${isActive ? 'text-white' : 'text-white/70'} md:group-hover:text-white`}>
                            {filterproject.description}
                          </p>
                        </div>

                        <Link key={filterproject.id} href={`/portfolio/${filterproject.slug}`} className="shrink-0 z-100 w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center 
                          bg-linear-to-br from-[#3bbbfc] to-[#01a8fc] text-white shadow-xl hover:scale-110 transition-all duration-500">
                          <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7" />
                        </Link>
                      </div>

                      {/* Bottom Progress Bar Animation */}
                      <div className="mt-auto pt-6 md:pt-8 pb-1">
                        <div className="relative h-0.75 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`absolute inset-0 bg-linear-to-r from-[#3bbbfc] to-[#01a8fc] transition-transform duration-1000 ease-out
                      ${isActive ? 'translate-x-0' : '-translate-x-full'}
                      md:group-hover:translate-x-0
                    `} />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
        {/* porfolio-cards-end */}

      </div>
      {/* portfolio-section-end */}
    </section>
  );
}