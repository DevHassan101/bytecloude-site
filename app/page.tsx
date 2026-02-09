'use client'

import AboutUs from "./components/AboutUs";
import HeroBanner from "./components/HeroBanner";
// import OurPortfolio from "./components/OurPortfolio";
import OurServices from "./components/OurServices";
// import OurTestimonials from "./components/OurTestimoinals";
import StatsSection from "./components/StatsSection";
import dynamic from 'next/dynamic';


export default function Home() {
  // ⭐ Heavy components ko lazy load karo
  const OurPortfolio = dynamic(() => import('./components/OurPortfolio'), {
    loading: () => <div>Loading...</div>,
    ssr: true, // Server-side rendering enabled
  });

  const OurTestimonials = dynamic(() => import('./components/OurPortfolio'), {
    loading: () => <div>Loading...</div>,
    ssr: true, // Client-side only
  });
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <StatsSection />
      <OurServices />
      <OurPortfolio />
      <OurTestimonials />
    </>
  );
}
