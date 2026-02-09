'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { ChevronDown, MoveUpRight, X, Menu } from 'lucide-react';

const menu = [
    {
        name: 'Home',
        path: '/',
        ariaLabel: 'Navigate to home page'
    },
    {
        name: 'About Us',
        path: '/about',
        ariaLabel: 'Learn more about us'
    },
    {
        name: 'Services',
        path: '/services',
        ariaLabel: 'View our services',
        dropdown: [
            {
                name: 'Web Designing',
                path: '/services/webDesigning',
                ariaLabel: 'Learn about our web designing services'
            },
            {
                name: 'Web Development',
                path: '/services/webDevelopment',
                ariaLabel: 'Learn about our web development services'
            },
            {
                name: 'App Development',
                path: '/services/appDevelopment',
                ariaLabel: 'Learn about our app development services'
            },
            {
                name: 'SEO Optimization',
                path: '/services/seoOptimization',
                ariaLabel: 'Learn about our SEO optimization services'
            },
            {
                name: 'Figma UI/UX Design',
                path: '/services/uiuxDesign',
                ariaLabel: 'Learn about our UI/UX design services'
            },
            {
                name: 'Graphic Designing',
                path: '/services/graphicDesigning',
                ariaLabel: 'Learn about our graphic designing services'
            },
        ],
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
        ariaLabel: 'View our portfolio'
    },
    {
        name: 'Contact Us',
        path: '/contact',
        ariaLabel: 'Get in touch with us'
    }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    // This is the SVG path for the "S" curves on both sides
    const maskUrl = `"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'><path d='M0,0 C50,0 50,100 100,100 H900 C950,100 950,0 1000,0 Z' fill='black'/></svg>"`;

    return (
        <>
            <header className={`w-full fixed top-0 left-0 z-50 px-6 lg:px-10 ${scrolled ? "bg-black shadow-md shadow-[#3bbbfc]" : isHome ? "bg-transparent" : "bg-transparent"}`}>
                <nav className={`flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? "py-4.5 lg:py-2.5" : "py-0"}`}>
                    <Link href="/" className={`text-[22px] md:text-3xl flex justify-center items-center font-bold tracking-tight leading-tight text-white z-50 ${scrolled ? "mt-0" : "mt-5 md:mt-2"}`}>
                        Byte<span className={`transition-colors duration-700 ease-in-out ${scrolled ? "text-[#5cc9ff]" : isHome ? "text-[#5cc9ff]" : "text-white"}`}>Cloude</span>
                        <span className='text-white'>.</span>
                    </Link>
                    <div className={`hidden lg:flex items-center justify-center relative h-17 self-start transition-all duration-700 ease-in-out ${scrolled ? "bg-transparent" : ""}`}>
                        <div className={`absolute inset-0 bg-white transition-opacity duration-700 ease-in-out ${scrolled ? "invisible" : "visible"}`} style={{
                            WebkitMaskImage: `url(${maskUrl})`, maskImage: `url(${maskUrl})`,
                            maskSize: '100% 100%', WebkitMaskSize: '100% 100%'
                        }} />
                        <ul className="relative flex items-center gap-8 xl:gap-12 px-20 h-full z-10">
                            {menu.map((item) => (
                                <li key={item.name} className="relative group flex items-center h-full">
                                    {!item.dropdown ? (
                                        <Link
                                            href={item.path}
                                            className={`text-[15px] tracking-wide transition-all duration-700 ease-in-out uppercase ${scrolled ? "text-white hover:text-[#49bdf7]" : "hover:text-blue-600"}`}
                                            style={!scrolled ? { color: "#3bbbfc" } : {}}
                                            aria-label={item.ariaLabel}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <div className="relative h-full flex items-center">
                                            <span
                                                className={`cursor-pointer flex items-center text-[15px] tracking-wide transition-all duration-700 ease-in-out uppercase ${scrolled ? "text-white hover:text-[#5cc9ff]" : ""}`}
                                                style={!scrolled ? { color: "#3bbbfc" } : {}}
                                                aria-label={item.ariaLabel}
                                                role="button"
                                                tabIndex={0}
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                {item.name} <ChevronDown size={18} className="ml-1" aria-hidden="true" />
                                            </span>

                                            <ul
                                                className={`invisible absolute left-0 pt-4 z-60 w-60 opacity-0 transform translate-y-4 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 ${scrolled ? "top-9" : "top-9"}`}
                                                role="menu"
                                                aria-label={`${item.name} submenu`}
                                            >
                                                <div className={`p-2.5 rounded-lg shadow-lg transition-all duration-700 ease-in-out ${scrolled ? "bg-black border border-white/10" : "bg-white border border-gray-300"}`}>
                                                    {item.dropdown.map((sub) => (
                                                        <li key={sub.name} role="none">
                                                            <Link
                                                                href={sub.path}
                                                                className={`block px-4 py-3 rounded-md uppercase text-[15px] tracking-wide transition-all duration-700 ease-in-out ${scrolled ? "text-white hover:bg-white/10 hover:text-[#5cc9ff]" : "hover:bg-blue-50 hover:text-blue-600"}`}
                                                                style={!scrolled ? { color: "#3bbbfc" } : {}}
                                                                aria-label={sub.ariaLabel}
                                                                role="menuitem"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`hidden lg:flex items-center gap-1 z-50 cursor-pointer ${scrolled ? "mt-0" : "mt-2"}`}>
                        <Link href="/contact" className="dark-btn py-2.5 px-8 border border-white rounded-full text-md font-medium tracking-wide text-white transition-all duration-300 ease-in-out"
                            style={{ boxShadow: "0 2px 4px rgba(59, 188, 252, 0.550), inset 0 1px 0 rgba(255, 255, 255, 0.2)" }}>
                            Get In Touch
                        </Link>
                        <span className="w-12 h-12 dark-btn border border-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out"
                            style={{ boxShadow: "0 2px 4px rgba(59, 188, 252, 0.550), inset 0 1px 0 rgba(255, 255, 255, 0.2)" }}>
                            <MoveUpRight size={18} color="white" />
                        </span>
                    </div>
                    <button aria-label="Toggle navigation menu" onClick={() => setOpen(!open)} className={`navigation-menu lg:hidden z-50 ${scrolled ? "mt-0" : "mt-5"}`}>
                        {open ? <X size={25} className="text-white" /> : <Menu size={25} className="text-white" />}
                    </button>
                </nav>
            </header>

            <div className={`fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)} />

            <div className={`fixed top-0 left-0 h-full w-72 bg-black rounded-4xl z-50 transform transition-transform duration-500 ease-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-[#3bbbfc]/40">
                        <Link href="/" className={`text-2xl font-bold tracking-tight leading-tight text-white z-50 ${scrolled ? "mt-0" : "mt-5 md:mt-2"}`}>
                            Byte<span className={`transition-colors duration-700 ease-in-out ${scrolled ? "text-[#5cc9ff]" : isHome ? "text-[#5cc9ff]" : "text-white"}`}>Cloude</span>
                            <span className='text-white'>.</span>
                        </Link>
                    </div>
                    <ul className="flex-1 overflow-y-auto pb-5">
                        {menu.map((item) => (
                            <li key={item.name} className="border-b border-[#3bbbfc]/40">
                                {!item.dropdown ? (
                                    <Link href={item.path} onClick={() => setOpen(false)} className="block px-6 py-4 text-white font-medium hover:text-blue-500">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div>
                                        <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between px-6 py-4 text-white font-medium">
                                            {item.name}
                                            <ChevronDown size={20} className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-72' : 'max-h-0'}`}>
                                            <ul className="bg-gray-900">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link href={sub.path} onClick={() => setOpen(false)} className="block px-10 py-3 text-sm text-gray-400 hover:text-blue-500">
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="p-6 flex items-center gap-2 border-t border-[#3bbbfc]/40">
                        <Link href="/contact" className="dark-btn flex justify-between items-center w-[86%] mx-auto py-2.5 px-8 border border-white rounded-full text-[17px] font-medium tracking-wide text-white transition-all duration-300 ease-in-out"
                            style={{ boxShadow: "0 2px 4px rgba(59, 188, 252, 0.550), inset 0 1px 0 rgba(255, 255, 255, 0.2)" }}>
                            Get In Touch
                            <MoveUpRight size={22} className='rotate-45' color="white" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}