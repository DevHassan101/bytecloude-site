export interface ServiceDetail {
    slug: string;
    title: string;
    shortTitle: string;
    shortDescription: string;
    icon: string;
    bannerImage: string;
    description: {
        intro: string;
        detail: string;
    };
    skills: {
        id: number;
        name: string;
        level: number;
        image: string;
    }[];
    stats: {
        years: {
            title: string;
            description: string;
            progressLabel: string;
            progressValue: number;
            icon: string;
        };
        consulting: {
            title: string;
            description: string;
            progressLabel: string;
            progressValue: number;
            icon: string;
        };
    };
    workingSteps: {
        step: string;
        title: string;
        description: string;
        image: string;
    }[];
    moduleTitle: string;
    moduleSubtitle: string;
    projects: {
        title: string;
        image: string;
        description: string;
        slug?: string;
    }[];
}

export const servicesDetailsData: Record<string, ServiceDetail> = {
    "web-designing": {
        slug: "web-designing",
        title: "What I Provide In Web Designing?",
        shortTitle: "Web Designing & Creative Solutions",
        shortDescription: "We create visually stunning and user-friendly websites that capture your brand essence design.",
        icon: "/images/services/serv1.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",


        description: {
            intro: "Transform your online presence with stunning web designs that captivate and engage. Our creative team specializes in crafting beautiful, responsive websites that reflect your brand identity and resonate with your target audience. Every pixel is purposefully placed to create memorable user experiences.",
            detail: "From color schemes to typography, we ensure every design element aligns with your brand guidelines. Our designs are not just visually appealing but also optimized for conversions, accessibility, and performance across all devices and browsers."
        },

        skills: [
            { id: 1, name: "Figma", level: 95, image: "/images/skills/figma.png" },
            { id: 2, name: "Adobe XD", level: 90, image: "/images/skills/xd.png" },
            { id: 3, name: "Photoshop", level: 92, image: "/images/skills/ps.png" },
            { id: 4, name: "Illustrator", level: 88, image: "/images/skills/ai.png" },
            { id: 5, name: "Sketch", level: 85, image: "/images/skills/sketch.png" },
            { id: 6, name: "InVision", level: 82, image: "/images/skills/invision.png" },
        ],

        stats: {
            years: {
                title: "Design Excellence Since 2020",
                description: "Creating beautiful and memorable web experiences for brands worldwide.",
                progressLabel: "Creative Excellence",
                progressValue: 93,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "Award-Winning Designs",
                description: "Recognized for innovative design solutions that elevate brands.",
                progressLabel: "Design Projects",
                progressValue: 89,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "Creative Web Design Process",
        moduleSubtitle: "Crafting beautiful websites that tell your brand story.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'Research & Inspiration',
                description: 'Deep dive into your brand, industry trends, and competitor analysis to gather creative inspiration.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'Wireframing & Concept',
                description: 'Create initial wireframes and design concepts to establish visual direction and layout.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Design & Refinement',
                description: 'Craft high-fidelity designs with attention to every detail, color, and interaction.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Deliver & Support',
                description: 'Provide final design files, style guides, and ongoing design support as needed.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },

    "web-development": {
        slug: "web-development",
        title: "What I Provide In Web Development?",
        shortTitle: "Web Development & Consulting",
        shortDescription: "We specialize in creating modern, scalable web applications using cutting-edge technologies. Our team of expert developers brings your ideas to life with clean code, responsive design, and optimal performance.",
        icon: "/images/services/serv2.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",

        description: {
            intro: "We specialize in creating modern, scalable web applications using cutting-edge technologies. Our team of expert developers brings your ideas to life with clean code, responsive design, and optimal performance. From concept to deployment, we handle every aspect of web development.",
            detail: "Whether you need a simple landing page or a complex enterprise application, we deliver solutions that drive results. Our development process focuses on user experience, security, and maintainability to ensure your project succeeds both now and in the future."
        },

        skills: [
            { id: 1, name: "WordPress", level: 95, image: "/images/skills/press.png" },
            { id: 2, name: "JavaScript", level: 90, image: "/images/skills/js.png" },
            { id: 3, name: "Bootstrap", level: 85, image: "/images/skills/strap.png" },
            { id: 4, name: "React.js", level: 92, image: "/images/skills/react.png" },
            { id: 5, name: "Next.js", level: 88, image: "/images/skills/next.png" },
            { id: 6, name: "Node.js", level: 80, image: "/images/skills/node.png" },
        ],

        stats: {
            years: {
                title: "We're Serving 30 Years",
                description: "Delivering robust web solutions with cutting-edge technology and expertise.",
                progressLabel: "Technical Excellence",
                progressValue: 92,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "The Largest Consulting",
                description: "Trusted by businesses worldwide for enterprise-grade web solutions.",
                progressLabel: "Project Completed",
                progressValue: 95,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "Agile Development Process",
        moduleSubtitle: "Building scalable web applications with modern technology.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'Make Smart Plan',
                description: 'We analyze your requirements and create a detailed project roadmap with timelines and milestones.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'Prototype',
                description: 'Design interactive prototypes to visualize the final product before development begins.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Development',
                description: 'Build robust and scalable solutions using modern technologies and best practices.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Get Results',
                description: 'Deploy your project and provide ongoing support to ensure optimal performance.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },

    "app-development": {
        slug: "app-development",
        title: "What I Provide In App Development?",
        shortTitle: "Mobile App Development",
        shortDescription: "Build powerful native and cross-platform mobile applications that engage users and drive business growth. We create feature-rich apps for iOS and Android with seamless performance and intuitive interfaces.",
        icon: "/images/services/serv3.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",

        description: {
            intro: "We build native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile development expertise spans iOS, Android, and hybrid solutions using React Native and Flutter. From MVP to enterprise-scale apps, we bring your mobile vision to life.",
            detail: "Our mobile development process emphasizes performance, security, and scalability. We implement best practices for app architecture, integrate third-party APIs, and ensure your app meets platform-specific guidelines. Whether it's a consumer app or B2B solution, we deliver quality."
        },

        skills: [
            { id: 1, name: "React Native", level: 90, image: "/images/skills/react.png" },
            { id: 2, name: "Flutter", level: 85, image: "/images/skills/flutter.png" },
            { id: 3, name: "Swift", level: 82, image: "/images/skills/swift.png" },
            { id: 4, name: "Kotlin", level: 80, image: "/images/skills/kotlin.png" },
            { id: 5, name: "Firebase", level: 88, image: "/images/skills/firebase.png" },
            { id: 6, name: "MongoDB", level: 85, image: "/images/skills/mongo.png" },
        ],

        stats: {
            years: {
                title: "Mobile Innovation Leader",
                description: "Delivering cutting-edge mobile solutions across iOS and Android platforms.",
                progressLabel: "App Performance",
                progressValue: 90,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "Apps in Production",
                description: "Successfully launched and maintained apps serving millions of users.",
                progressLabel: "Client Satisfaction",
                progressValue: 93,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "Mobile App Development Lifecycle",
        moduleSubtitle: "End-to-end mobile solutions from concept to app store.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'Strategy & Planning',
                description: 'Define app features, target platforms, and technical architecture for optimal results.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'UI/UX Design',
                description: 'Create platform-specific designs that follow iOS and Android design guidelines.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Development & Testing',
                description: 'Build features iteratively with continuous testing on real devices.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Launch & Support',
                description: 'Deploy to app stores and provide ongoing maintenance and updates.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },

    "seo-optimization": {
        slug: "seo-optimization",
        title: "What Startegy About SEO Optimization?",
        shortTitle: "SEO Optimization & Strategy",
        shortDescription: "Boost your online visibility and drive organic traffic with proven SEO strategies. We optimize your website to rank higher on search engines, attract qualified leads, and increase conversions through data-driven techniques.",
        icon: "/images/services/serv4.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",

        description: {
            intro: "Dominate search engine rankings with our comprehensive SEO services. We combine technical optimization, content strategy, and link building to improve your website's visibility and drive sustainable organic growth. Our proven methodologies help you outrank competitors and capture high-intent traffic.",
            detail: "From on-page optimization to technical SEO audits, we cover all aspects of search engine optimization. Our data-driven approach focuses on keyword research, content optimization, site speed improvements, and building authoritative backlinks to deliver long-term results."
        },

        skills: [
            { id: 1, name: "Google Analytics", level: 93, image: "/images/skills/analytics.png" },
            { id: 2, name: "SEMrush", level: 90, image: "/images/skills/semrush.png" },
            { id: 3, name: "Ahrefs", level: 88, image: "/images/skills/ahrefs.png" },
            { id: 4, name: "Moz", level: 85, image: "/images/skills/moz.png" },
            { id: 5, name: "Search Console", level: 92, image: "/images/skills/search-console.png" },
            { id: 6, name: "Content Strategy", level: 87, image: "/images/skills/content.png" },
        ],

        stats: {
            years: {
                title: "SEO Excellence Delivered",
                description: "Helping businesses achieve top rankings and sustainable organic growth.",
                progressLabel: "Ranking Improvement",
                progressValue: 88,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "Proven Results",
                description: "Consistently delivering increased traffic and conversions through SEO.",
                progressLabel: "Traffic Growth",
                progressValue: 91,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "Strategic SEO Process",
        moduleSubtitle: "Data-driven optimization for sustainable organic growth.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'SEO Audit',
                description: 'Comprehensive analysis of your website\'s current SEO performance and opportunities.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'Keyword Research',
                description: 'Identify high-value keywords and search intent to target qualified traffic.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Optimization',
                description: 'Implement on-page, technical, and off-page SEO improvements systematically.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Monitor & Scale',
                description: 'Track rankings, analyze performance, and continuously refine strategy.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },

    "ui-ux-design": {
        slug: "ui-ux-design",
        title: "What I Provide In UI/UX Design?",
        shortTitle: "UI/UX Design & Consulting",
        shortDescription: "Create exceptional user experiences that delight and convert. Our UI/UX design services combine user research, interaction design, and visual aesthetics to build interfaces that users love and businesses trust.",
        icon: "/images/services/serv1.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",

        description: {
            intro: "We create stunning, user-centered designs that captivate and engage. Our design philosophy combines aesthetic excellence with functional usability, ensuring your users have an exceptional experience. From wireframes to final mockups, we craft interfaces that convert.",
            detail: "Our UI/UX design services include user research, wireframing, prototyping, and visual design. We follow industry best practices and design systems to create consistent, accessible, and beautiful interfaces that users love and businesses trust."
        },

        skills: [
            { id: 1, name: "Figma", level: 95, image: "/images/skills/figma.png" },
            { id: 2, name: "Adobe XD", level: 88, image: "/images/skills/xd.png" },
            { id: 3, name: "Sketch", level: 85, image: "/images/skills/sketch.png" },
            { id: 4, name: "Photoshop", level: 90, image: "/images/skills/ps.png" },
            { id: 5, name: "Illustrator", level: 87, image: "/images/skills/ai.png" },
            { id: 6, name: "InVision", level: 82, image: "/images/skills/invision.png" },
        ],

        stats: {
            years: {
                title: "Design Excellence Since 2020",
                description: "Creating beautiful and functional designs that users love and businesses trust.",
                progressLabel: "User Satisfaction",
                progressValue: 92,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "Award-Winning Designs",
                description: "Recognized for innovative design solutions that drive business success.",
                progressLabel: "Design Projects",
                progressValue: 88,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "User-Centered Design Process",
        moduleSubtitle: "Creating experiences that delight users and drive conversions.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'Research & Discovery',
                description: 'Understanding user needs, business goals, and market trends through comprehensive research.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'Wireframing',
                description: 'Creating low-fidelity wireframes to establish layout, structure, and user flow.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Visual Design',
                description: 'Crafting high-fidelity mockups with brand colors, typography, and imagery.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Prototype & Test',
                description: 'Building interactive prototypes and conducting user testing for validation.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },

    "graphic-designing": {
        slug: "graphic-designing",
        title: "What I Proivde In Graphic Designing?",
        shortTitle: "Graphic Design & Branding",
        shortDescription: "Bring your brand to life with stunning visual designs. We create compelling graphics, logos, and brand identities that communicate your message effectively and leave a lasting impression on your audience.",
        icon: "/images/services/serv5.png",
        bannerImage: "/images/services/details/webdevelopment.jpg",

        description: {
            intro: "Transform your brand with powerful visual storytelling. Our graphic design services cover everything from logo design to complete brand identity systems. We combine creativity with strategic thinking to create designs that not only look stunning but also communicate your brand values effectively.",
            detail: "From business cards to marketing materials, social media graphics to packaging design, we deliver comprehensive graphic design solutions. Our designs are crafted to enhance brand recognition, engage your target audience, and drive business growth through visual excellence."
        },

        skills: [
            { id: 1, name: "Photoshop", level: 95, image: "/images/skills/ps.png" },
            { id: 2, name: "Illustrator", level: 93, image: "/images/skills/ai.png" },
            { id: 3, name: "InDesign", level: 88, image: "/images/skills/indesign.png" },
            { id: 4, name: "CorelDRAW", level: 85, image: "/images/skills/corel.png" },
            { id: 5, name: "After Effects", level: 82, image: "/images/skills/ae.png" },
            { id: 6, name: "Canva Pro", level: 90, image: "/images/skills/canva.png" },
        ],

        stats: {
            years: {
                title: "Creative Excellence",
                description: "Delivering stunning graphic designs that elevate brands and captivate audiences.",
                progressLabel: "Brand Recognition",
                progressValue: 91,
                icon: "/images/skills/trophy.png"
            },
            consulting: {
                title: "Design Portfolio",
                description: "Hundreds of successful branding and graphic design projects delivered.",
                progressLabel: "Client Satisfaction",
                progressValue: 94,
                icon: "/images/skills/briefcase.png"
            }
        },

        moduleTitle: "Creative Design Process",
        moduleSubtitle: "Crafting visual identities that make your brand unforgettable.",
        workingSteps: [
            {
                step: 'STEP 01',
                title: 'Brand Discovery',
                description: 'Understanding your brand values, target audience, and design preferences.',
                image: '/images/services/details/work1.png',
            },
            {
                step: 'STEP 02',
                title: 'Concept Development',
                description: 'Creating initial design concepts and exploring creative directions.',
                image: '/images/services/details/work2.png',
            },
            {
                step: 'STEP 03',
                title: 'Design & Refinement',
                description: 'Crafting polished designs with attention to color, typography, and composition.',
                image: '/images/services/details/work3.png',
            },
            {
                step: 'STEP 04',
                title: 'Finalize & Deliver',
                description: 'Delivering final files in all required formats with brand guidelines.',
                image: '/images/services/details/work4.png',
            },
        ],

        projects: [
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Elite Learning Hub",
                image: "/images/projects/lms/lms-thumbnail.png",
                description: "An all-in-one Learning Management System with course enrollment, student progress tracking."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            },
            {
                title: "Truecare Medical Ecosystem",
                image: "/images/projects/dms/dms-thumbnail.png",
                description: "A comprehensive healthcare platform for doctor consultations, patient records scheduling."
            },
            {
                title: "Smart Dine Restaurant POS",
                image: "/images/projects/rms/rms-thumbnail.png",
                description: "A powerful Restaurant Management System featuring real-time table management, digital menus."
            }
        ],
    },
};