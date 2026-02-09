export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  client?: string;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  price?: string;
  websiteUrl?: string;
  images: string[];
  overview: string;
  description: string;
  interestingFacts?: {
    title: string;
    description: string;
    facts: string[];
  };
  techStack: string[];
  deliverables?: string;
  industry?: string;
  liveUrl?: string;
  githubUrl?: string;
  completionDate?: string;
}

export const projectDetailsData: Record<string, ProjectDetail> = {
  "smart-pos": {
    slug: "smart-pos",
    title: "Smart Dine Restaurant POS",
    category: "Restaurant, Branding, Designs",
    client: "Liam Zdane",
    tags: ["Services", "Platform", "Foodies"],
    startDate: "15.05.2022",
    endDate: "25.06.2022",
    price: "$1,000",
    websiteUrl: "https://smartdine-demo.com",

    images: [
      "/images/projects/rms/rms-thumbnail.png",
      "/images/projects/rms/rms1.png",
      "/images/projects/rms/rms2.png",
      "/images/projects/rms/rms3.png",
      "/images/projects/rms/rms4.png",
      "/images/projects/rms/rms5.png",
    ],

    overview: "A complete restaurant POS solution designed to manage orders, tables, staff, and sales analytics in real time.",

    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.\n\nOn the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",

    interestingFacts: {
      title: "Interesting Facts",
      description: "Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter.",
      facts: [
        "Efficient Sprint Planning",
        "Standups and Demos",
        "Hassle Free Payment",
        "Iterative Delivery Approach",
        "Problem-solving",
        "Deliver Perfect Time"
      ]
    },

    techStack: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap"
    ],

    deliverables: "UI/UX Design, Admin Dashboard, Table Management System, and POS Integration.",

    industry: "Hospitality & Food Service",
  },

  "smart-edu": {
    slug: "smart-edu",
    title: "Elite Education Learning Hub",
    category: "Education, Platform Development",
    client: "EduTech Solutions",
    tags: ["E-Learning", "Platform", "Education"],
    startDate: "15.06.2024",
    endDate: "20.08.2024",
    price: "$1,500",
    websiteUrl: "https://contact@eliteedu.com",

    images: [
      "/images/projects/lms/lms-thumbnail.png",
      "/images/projects/lms/lms4.png",
      "/images/projects/lms/lms5.png",
      "/images/projects/lms/lms1.png",
      "/images/projects/lms/lms2.png",
      "/images/projects/lms/lms3.png",
    ],

    overview: "An all-in-one Learning Management System with course enrollment, student progress tracking, and automated certifications.",

    description: "Elite Education is a comprehensive LMS platform that empowers educational institutions to deliver online courses effectively. It features student enrollment management, interactive quizzes, progress tracking, and automated certificate generation. The platform supports both instructors and students with intuitive dashboards and real-time analytics.\n\nBuilt with modern web technologies, Elite Education provides a seamless learning experience that adapts to different teaching methodologies. The system includes video lectures, discussion forums, assignment submissions, and detailed analytics to track student performance and engagement throughout their learning journey.",

    interestingFacts: {
      title: "Platform Highlights",
      description: "Elite Education transforms traditional learning into an engaging digital experience with powerful tools for both educators and students. The platform combines cutting-edge technology with user-centric design to deliver exceptional educational outcomes.",
      facts: [
        "Automated Certificate Generation",
        "Real-time Progress Tracking",
        "Interactive Video Lectures",
        "AI-Powered Recommendations",
        "Secure Payment Gateway",
        "Mobile Responsive Design"
      ]
    },

    techStack: [
      "Laravel 10",
      "Tailwind CSS",
      "MySQL",
      "Stripe Payment",
    ],

    deliverables: "Student Portal, Instructor Dashboard, Course Management System, Payment Integration, and Certificate Generator.",

    industry: "Education & E-Learning",

    liveUrl: "https://eliteedu-demo.com",
    githubUrl: "https://github.com/yourusername/elite-education",
    completionDate: "November 2024",
  },

  "smart-dms": {
    slug: "smart-dms",
    title: "Truecare Medical Ecosystem",
    category: "Healthtips, Digital Platform",
    client: "Truecare Health Services",
    tags: ["Healthcare", "Medical Records"],
    startDate: "20.10.2025",
    endDate: "15.12.2025",
    price: "$1,400",
    websiteUrl: "https://support@truecare.com",

    images: [
      "/images/projects/dms/dms-thumbnail.png",
      "/images/projects/dms/dms1.png",
      "/images/projects/dms/dms2.png",
      "/images/projects/dms/dms3.png",
      "/images/projects/dms/dms4.png",
      "/images/projects/dms/dms5.png",
    ],

    overview: "A comprehensive healthcare platform for doctor consultations, patient records, and seamless appointment scheduling.",

    description: "Truecare Medical Ecosystem is a complete healthcare management solution that connects patients with healthcare providers. It features secure patient records management, online appointment booking, telemedicine capabilities, and prescription management. The platform ensures HIPAA compliance and provides a seamless experience for both patients and medical professionals.\n\nDesigned with security and privacy at its core, Truecare offers end-to-end encrypted communication, secure data storage, and compliant handling of sensitive medical information. The platform streamlines healthcare delivery by reducing wait times, improving patient engagement, and enabling better healthcare outcomes through technology.",

    interestingFacts: {
      title: "Healthcare Innovation",
      description: "Truecare Medical Ecosystem revolutionizes healthcare delivery by bringing medical services directly to patients through cutting-edge technology. The platform ensures quality care while maintaining the highest standards of data security and patient privacy.",
      facts: [
        "HIPAA Compliant Architecture",
        "End-to-End Encryption",
        "Real-time Video Consultations",
        "Automated Appointment Reminders",
        "E-Prescription Integration",
        "24/7 Patient Support"
      ]
    },

    techStack: [
      "Laravel 10",
      "Tailwind CSS",
      "MySQL",
      "Stripe Payment",
    ],

    deliverables: "Patient Portal, Doctor Dashboard, Video Consultation System, and Appointment Scheduler.",

    industry: "Healthcare & Telemedicine",
  },

  "smart-ecomm": {
    slug: "smart-ecomm",
    title: "ByteCloud E-Commerce Store",
    category: "E-Commerce, Digital Retail",
    client: "Max Will",
    tags: ["E-Commerce", "Online Store", "Retail"],
    startDate: "05.06.2025",
    endDate: "15.08.2025",
    price: "$1,800",
    websiteUrl: "https://info@bytecloud.com",

    images: [
      "/images/projects/ecom/ecom-thumbnail.png",
      "/images/projects/ecom/ecom1.png",
      "/images/projects/ecom/ecom2.png",
      "/images/projects/ecom/ecom3.png",
      "/images/projects/ecom/ecom4.png",
    ],

    overview: "A premium E-commerce experience with dynamic product displays, secure Stripe checkout, and user-friendly navigation.",

    description: "ByteCloud is a modern e-commerce platform built for optimal performance and user experience. It features advanced product filtering, secure payment processing through Stripe, order tracking, and an intuitive admin panel for inventory management. The platform is optimized for speed and SEO to maximize conversions.\n\nWith a focus on user experience and conversion optimization, ByteCloud combines beautiful design with powerful functionality. The platform supports multiple payment methods, real-time inventory management, automated order processing, and comprehensive analytics to help businesses grow their online presence and increase sales.",

    interestingFacts: {
      title: "E-Commerce Excellence",
      description: "ByteCloud delivers a premium shopping experience that combines cutting-edge technology with intuitive design. Built for performance and scalability, the platform helps businesses maximize their online revenue while providing customers with a seamless shopping journey.",
      facts: [
        "Lightning-Fast Performance",
        "Secure Payment Processing",
        "Advanced Product Filtering",
        "Real-time Inventory Sync",
        "SEO Optimized",
        "Mobile-First Design"
      ]
    },

    techStack: [
      "Next.js 14",
      "Tailwind CSS",
      "MySQL",
      "Stripe Payment",
    ],


    deliverables: "Customer Portal, Admin Dashboard, Product Catalog System, Payment Gateway Integration, and Order Management.",

    industry: "E-Commerce & Retail",
  },
};
