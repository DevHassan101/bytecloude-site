'use client'

import AboutUs from "./components/AboutUs";
import HeroBanner from "./components/HeroBanner";
import OurServices from "./components/OurServices";
import OurTestimonials from "./components/OurTestimoinals";
import StatsSection from "./components/StatsSection";
import dynamic from 'next/dynamic';

// ⭐ Portfolio - SSR enabled (important content)
const OurPortfolio = dynamic(() => import('./components/OurPortfolio'), {
  loading: () => <div className="h-screen bg-black/20 animate-pulse" />,
  ssr: true, // SEO ke liye important
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