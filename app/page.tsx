'use client'

// import AboutUs from "./components/AboutUs";
import HeroBanner from "./components/HeroBanner";
// import OurServices from "./components/OurServices";
import OurTestimonials from "./components/OurTestimoinals";
import StatsSection from "./components/StatsSection";
import dynamic from 'next/dynamic';

// ⭐ Portfolio - SSR enabled (important content)
const OurPortfolio = dynamic(() => import('./components/OurPortfolio'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Server-side rendering enabled
});

const AboutUs = dynamic(() => import('./components/AboutUs'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Server-side rendering enabled
});

const OurServices = dynamic(() => import('./components/OurServices'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Server-side rendering enabled
});



export default function Home() {
  return (
    <main>
      {/* Critical content - immediately loaded */}
      <HeroBanner />
      <AboutUs />
      <StatsSection />
      <OurServices />
      {/* Lazy loaded sections */}
      <OurPortfolio />
      <OurTestimonials />
    </main>
  );
}