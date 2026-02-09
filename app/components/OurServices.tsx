'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function OurServices() {

    const services = [
        {
            number: '01',
            icon: '/images/services/serv1.png',
            title: 'Web Designing',
            slug: 'webDesigning',
            description: 'Crafting visually stunning and user-centric designs that capture your brand identity and engage your audience.',
            features: [
                'User Experience (UX) Design',
                'Visual Brand Identity',
                'Interactive Prototypes',
                'Design Systems'
            ]
        },
        {
            number: '02',
            icon: '/images/services/serv2.png',
            title: 'Web Development',
            slug: 'webDevelopment',
            description: 'Building high-performance, scalable websites using the latest web technologies and best coding practices.',
            features: [
                'Responsive Web Design',
                'Modern Frameworks (React/Next.js)',
                'SEO-Friendly Code',
                'Performance Optimization'
            ]
        },
        {
            number: '03',
            icon: '/images/services/serv3.png',
            title: 'App Development',
            slug: 'appDevelopment',
            description: 'Developing intuitive mobile applications for iOS and Android that provide seamless user experiences on the go.',
            features: [
                'iOS & Android Apps',
                'Cross-Platform (Flutter/React Native)',
                'Native Performance',
                'App Store Deployment'
            ]
        },
        {
            number: '04',
            icon: '/images/services/serv4.png',
            title: 'SEO Optimization',
            slug: 'seoOptimization',
            description: 'Enhancing your online visibility and search rankings through data-driven strategies and technical excellence.',
            features: [
                'On-Page & Off-Page SEO',
                'Keyword Research & Strategy',
                'Technical SEO Audits',
                'Monthly Analytics Reporting'
            ]
        },
        {
            number: '05',
            icon: '/images/services/serv5.png',
            title: 'Figma UI/UX Design',
            slug: 'uiuxDesign',
            description: 'Creating high-fidelity wireframes and interactive prototypes in Figma to streamline the development process.',
            features: [
                'Component-Based Design',
                'Collaborative Workflows',
                'High-Fidelity Prototyping',
                'Developer Handoff Ready'
            ]
        },
        {
            number: '06',
            icon: '/images/services/serv6.png',
            title: 'Graphic Designing',
            slug: 'graphicDesigning',
            description: 'Producing creative visual assets ranging from logos to marketing materials that make your brand stand out.',
            features: [
                'Logo & Branding',
                'Social Media Graphics',
                'Print & Digital Assets',
                'Illustration & Typography'
            ]
        }
    ];

    return (
        <section className="main-services-section relative py-16 md:py-20 px-6 md:px-26 overflow-hidden">

            {/* light1:top-right-glow */}
            <div className="absolute top-12 -right-24 w-100 h-100 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>
            {/* light2:bottom-left-glow */}
            <div className="absolute bottom-12 -left-24 w-100 h-100 bg-[#3bbbfc] opacity-10 blur-[120px] rounded-full"></div>

            {/* services-section-start */}
            <div className="services-section w-full relative z-10">

                {/* services-header-start */}
                <div className="services-header text-center relative">
                    <div className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest">
                        <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
                        <span className="font-semibold">What we do</span>
                        <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative">
                        <span className="text-white/95 inline-block hover:text-white transition-colors duration-300 mr-3">
                            Smart Services For
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                            Digital Transformation
                        </span>
                        <div className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
                    </div>
                    <div className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto">
                        <p className="text-[13px] md:text-[17px] text-white/80">We combine technical expertise with bold design to build products that matter crafting seamless interactions that connect brands with people.</p>
                    </div>
                </div>
                {/* services-header-end */}

                {/* services-cards-start */}
                <div className="services-grid grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 px-0 md:px-4">
                    {services.map((service, index) => (
                        <div key={index} className="service-card group relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#3bbbfc]/50 
                             transition-all duration-700 hover:shadow-2xl hover:shadow-[#3bbbfc]/20">

                            <div className="absolute -bottom-24 right-0 w-50 h-54 bg-[#01a8fc]/25 rounded-br-xl blur-[80px]" />

                            <div className="absolute bottom-0 left-0 right-0  w-50 mx-auto h-0.5 opacity-60 group-hover:opacity-100 transition-all duration-500"
                                style={{ background: 'linear-gradient(90deg, transparent 0%, #3bbbfc 50%, transparent 100%)' }} />

                            <div className="relative p-8 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="relative">
                                        <div className="relative w-15 h-15 md:w-18 md:h-18 rounded-[10px] md:rounded-xl flex items-center justify-center 
                                        transition-all duration-500 group-hover:scale-105"
                                            style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)' }}>
                                            <img src={service.icon} alt={service.title} className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="h-px w-12 opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                                            style={{ background: 'linear-gradient(90deg, transparent 0%, #3bbbfc 100%)' }} />
                                        <span className="text-4xl md:text-5xl font-bold tracking-tight transition-all duration-500 group-hover:scale-110"
                                            style={{
                                                background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                                filter: 'drop-shadow(0 0 20px rgba(59, 187, 252, 0.3))'
                                            }}>
                                            {service.number}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 transition-colors duration-300 group-hover:text-[#3bbbfc]">
                                    {service.title}
                                </h3>

                                <div className="h-0.5 rounded-full mb-6 transition-all duration-500 group-hover:w-24"
                                    style={{ width: '50px', background: 'linear-gradient(90deg, #3bbbfc 0%, rgba(59, 187, 252, 0.2) 100%)' }} />

                                <ul className="space-y-3 mb-8 grow">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-white/90 text-[12.5px] md:text-sm leading-relaxed 
                                            transition-all duration-300 group-hover:text-gray-300 group-hover:translate-x-1">
                                            <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-all duration-300"
                                                style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', boxShadow: '0 0 8px rgba(59, 187, 252, 0.6)' }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`/services/${service.slug}`}>
                                    <div className="mt-auto pt-4 flex items-center justify-between group-hover:gap-2 transition-all duration-300">
                                        <button className="group/btn flex items-center gap-2 text-[#ffffff] font-semibold text-sm md:text-[16px] tracking-wider transition-all duration-500 hover:gap-3">
                                            <span>Read More</span>
                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover/btn:rotate-45"
                                                style={{ background: 'linear-gradient(135deg, #3bbbfc 0%, #0188fc 100%)', boxShadow: '0 1px 4px rgba(59, 187, 252, 0.4)' }}>
                                                <ArrowRight size={14} className="text-white" strokeWidth={3} />
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
                {/* services-cards-end */}

            </div>
            {/* services-section-end */}
        </section>
    );
}