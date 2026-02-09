"use client";

import Link from "next/link";
import { Icon } from '@iconify/react';


export default function Footer() {
    return (
        <>
            <footer className="bg-black relative border-t-3 border-[#3bbbfc] md:border-0">
                <div className="w-full pl-8 pr-6 md:px-18 pt-10 md:pt-36 pb-14 relative">
                    <div className="absolute -top-50 left-15 right-15 hidden lg:block">
                        <div className="footer-top relative h-75 bg-black rounded-4xl border border-white/10 overflow-hidden">
                            {/* Background Image Box */}
                            <div className="footer-box1 absolute inset-0 flex">
                                <span className="basis-[50%]"></span>
                                <div className="basis-[50%] relative h-full">
                                    <img
                                        src="../images/footimage.webp"
                                        alt="Tech background"
                                        className="w-full h-full object-cover rounded-r-4xl"
                                        style={{ filter: "grayscale(80%)" }}
                                    />
                                    {/* Image Gradient Overlay */}
                                    <div className="absolute top-0 bottom-0 right-0 w-1/2 h-full bg-linear-to-tl from-[#3bbbfc]/50 via-transparent to-transparent rounded-r-4xl"></div>
                                </div>
                            </div>

                            {/* Main Gradient Overlay with Enhanced Effects */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#0188fc] via-[#3bbbfc]/80 to-transparent rounded-4xl">

                                <div className="absolute inset-0 opacity-22 w-200" style={{
                                    backgroundImage: 'linear-gradient(#3bbbfc 1px, transparent 1px), linear-gradient(90deg, #3bbbfc 1px, transparent 1px)',
                                    backgroundSize: '50px 50px'
                                }}></div>


                                {/* Content Container */}
                                <div className="relative flex justify-start items-center gap-55 px-20 w-full h-full">

                                    {/* Left Content - Title */}
                                    <div className="content-1">
                                        <div className="space-y-4">
                                            {/* "LET US BUILD" with animated underline */}
                                            <div className="relative inline-block">
                                                <h1 className="text-[70px] uppercase font-bold text-white tracking-tight leading-none">
                                                    Let Us Build
                                                </h1>
                                                <div className="absolute -bottom-2 left-0 w-55 h-1 bg-white/50 "></div>
                                            </div>

                                            {/* "TOGETHER" with icon */}
                                            <div className="flex relative justify-start items-center gap-4">
                                                {/* Animated Icon Circle */}
                                                <span className="bg-black w-16 h-16 rounded-full flex justify-center items-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
                                                    {/* Pulse Ring */}
                                                    <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
                                                    <Icon icon="lineicons:arrow-angular-top-right" width="25" height="25" style={{ color: "#fff" }} />
                                                </span>

                                                <h1 className="text-[70px] uppercase font-bold text-white tracking-tight leading-none">
                                                    Together
                                                </h1>
                                            </div>
                                        </div>

                                        {/* Subtitle with fade-in effect */}
                                        <p className="mt-5 text-white/80 text-lg font-medium max-w-md animate-[fadeIn_1s_ease-in]">
                                            Transform your vision into reality with cutting-edge solutions.
                                        </p>
                                    </div>

                                    {/* Right Content - Enhanced Rotating Badge */}
                                    <div className="content-2 ">
                                        <div className="relative flex items-center justify-center">
                                            {/* Outer Glow Ring */}
                                            <div className="absolute inset-0 w-40 h-40 rounded-full bg-linear-to-br from-cyan-400/30 to-blue-500/30 blur-md animate-pulse"></div>
                                            {/* The Badge Container */}
                                            <div className="group relative flex items-center overflow-hidden justify-center w-40 h-40 rounded-full
                                             bg-white/12 backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer 
                                             transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/30">
                                                {/* Rotating Circular Text */}
                                                <div className="absolute inset-0 p-2 animate-[spin_20s_linear_infinite]">
                                                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                                        <defs>
                                                            <path
                                                                id="textCircle"
                                                                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                                            />
                                                        </defs>
                                                        <text className="fill-white text-[8px] font-semibold tracking-[0.3em] uppercase">
                                                            <textPath href="#textCircle">
                                                                Build a Success Brand ByteCloud
                                                            </textPath>
                                                        </text>
                                                    </svg>
                                                </div>
                                                {/* Middle Decorative Ring */}
                                                <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-white/20 bg-linear-to-br from-white/10 to-transparent" />
                                                {/* Inner Ring */}
                                                {/* <div className="absolute w-[70%] h-[70%] rounded-full border border-white/10" /> */}

                                                {/* Center Arrow with Enhanced Hover */}
                                                <div className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45">
                                                    <Icon icon="lineicons:arrow-angular-top-right" width="32" height="32" style={{ color: "#fff" }} />
                                                </div>

                                                {/* Shine Effect on Hover */}
                                                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-transparent via-white/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                      group-hover:animate-[shine_1.5s_ease-in-out]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* main-footer-start */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="space-y-0 md:space-y-6">
                            <div className="flex items-start">
                                <h3 className="text-[26px] md:text-3xl font-bold tracking-tight leading-tight text-white">
                                    Byte<span className="text-[#5cc9ff]">Cloude</span><span className="text-white">.</span>
                                </h3>
                            </div>
                            <p className="text-sm md:text-base text-white/80 leading-relaxed text-justify tracking-tight pt-5 md:pt-0">
                                We create powerful AI solutions that drive results. Backed by innovation, built for performance, we are here to elevate your digital presence.
                            </p>
                            <div className="flex gap-3 mt-7 md:mt-0">
                                <Link
                                    href="#"
                                    className="w-9 h-9 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300"
                                    aria-label="Visit our Instagram page"
                                >
                                    <Icon icon="ri:instagram-fill" className="text-white text-md md:text-xl" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300"
                                    aria-label="Visit our Facebook page"
                                >
                                    <Icon icon="mdi:facebook" className="text-white text-md md:text-xl" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300"
                                    aria-label="Visit our Twitter page"
                                >
                                    <Icon icon="mdi:twitter" className="text-white text-md md:text-xl" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 md:w-11 md:h-11 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-full flex items-center justify-center border border-[#18a2e8] hover:scale-110 transition-transform duration-300"
                                    aria-label="Visit our LinkedIn page"
                                >
                                    <Icon icon="ri:linkedin-fill" className="text-white text-md md:text-xl" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="ml-0 md:ml-14">
                            <h4 className="text-[19px] md:text-xl font-semibold text-white mb-8 relative inline-block">
                                Quick Links
                                <span className="absolute -bottom-2 left-0 w-12 h-[2.5px] md:h-0.75 bg-linear-to-r from-[#3bbbfc] to-[#0188fc] rounded-full"></span>
                            </h4>
                            <ul className="space-y-3">
                                {['About Us', 'Our Project', 'Our Services', 'Testimonial', 'Contact Us'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm md:text-base text-white/80 hover:text-[#5cc9ff] transition-colors duration-300 flex items-center gap-2 group">
                                            <Icon icon="ph:arrow-right" className="text-[#3bbbfc] group-hover:translate-x-1 transition-transform duration-300" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="ml-0 md:-ml-5">
                            <h4 className="text-[19px] md:text-xl font-semibold text-white mb-8 relative inline-block">
                                Contact Info
                                <span className="absolute -bottom-2 left-0 w-12 h-[2.5px] md:h-0.75 bg-linear-to-r from-[#3bbbfc] to-[#0188fc] rounded-full"></span>
                            </h4>
                            <ul className="space-y-5">
                                <li>
                                    <a href="tel:+923356343882" className="text-white/80 hover:text-[#5cc9ff] transition-colors duration-300 flex items-start gap-3 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-md md:rounded-lg flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-[#3bbbfc] group-hover:to-[#5cc9ff] transition-all duration-300">
                                            <Icon icon="ri:phone-fill" className="text-white group-hover:text-white text-md md:text-lg" />
                                        </div>
                                        <span className="pt-2 text-[15px] md:text-base">+92 3356343882</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white/80 hover:text-[#5cc9ff] transition-colors duration-300 flex items-start gap-3 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-md md:rounded-lg flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-[#3bbbfc] group-hover:to-[#5cc9ff] transition-all duration-300">
                                            <Icon icon="mdi:location" className="text-[white] group-hover:text-white text-md md:text-lg" />
                                        </div>
                                        <span className="pt-2 text-[15px] md:text-base">Latifabad No.4 Hyderabad, Sindh</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:bytecloude50@gmail.com" className="text-white/80 hover:text-[#5cc9ff] transition-colors duration-300 flex items-start gap-3 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 bg-linear-to-br from-[#3bbbfc] to-[#0188fc] rounded-md md:rounded-lg flex items-center justify-center group-hover:bg-linear-to-br group-hover:from-[#3bbbfc] group-hover:to-[#5cc9ff] transition-all duration-300">
                                            <Icon icon="ic:round-email" className="text-white group-hover:text-white text-md md:text-lg" />
                                        </div>
                                        <span className="pt-2 text-[15px] md:text-base break-all">bytecloude50@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="">
                            <h4 className="text-[19px] md:text-xl font-semibold text-white mb-6 relative inline-block">
                                Newsletter
                                <span className="absolute -bottom-2 left-0 w-12 h-[2.5px] md:h-0.75 bg-linear-to-r from-[#3bbbfc] to-[#0188fc] rounded-full"></span>
                            </h4>
                            <p className="text-[15px] md:text-base text-white/80 mb-4">Subscribe to get latest updates and news</p>
                            <div className="bg-[#060606] w-full flex justify-between px-1.5 md:px-2 py-1.5 items-center border border-[#3bbbfc] focus-within:border-[#3bbbfc] rounded-[10px] md:rounded-full transition-colors duration-300">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-transparent text-[13px] md:text-sm text-white w-41.5 pl-3 outline-none placeholder:text-white" />
                                <button className="text-[13px] md:text-base bg-linear-to-br from-[#3bbbfc] to-[#0188fc] text-white/90 font-semibold px-5 py-2.5 rounded-md md:rounded-full hover:shadow-lg hover:shadow-[#3bbbfc]/50 transition-all duration-300">
                                    Susbscribe
                                </button>
                            </div>
                            <label className="flex items-start gap-2 mt-5 md:mt-4 text-[13px] md:text-sm text-white/80 cursor-pointer group">
                                <input type="checkbox" className="mt-0 md:mt-1 accent-[#3bbbfc]" />
                                <span className="group-hover:text-gray-300 transition-colors duration-300">
                                    I agree to the <a href="#" className="text-[#5cc9ff] hover:underline">Privacy Policy</a>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="w-full h-px bg-linear-to-r from-transparent via-[#3bbbfc]/65 to-transparent"></div>
                    <div className="pt-8 text-center md:text-left">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white/80 text-base md:text-[15px]">
                                @Copyright 2025 <span className="text-[#3bbbfc]">ByteCloude.</span> All Rights Reserved
                            </p>
                            <div className="flex gap-6 text-base md:text-[15px]">
                                <a href="#" className="text-white/80  hover:text-[#5cc9ff] transition-colors duration-300">
                                    Terms And Conditions
                                </a>
                                <a href="#" className="text-white/80  hover:text-[#5cc9ff] transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* main-footer-end */}
                </div>
            </footer>
        </>
    );
}