'use client'

import AboutUs from "./components/AboutUs";
import HeroBanner from "./components/HeroBanner";
import OurServices from "./components/OurServices";
import OurTestimonials from "./components/OurTestimoinals";
import StatsSection from "./components/StatsSection";
import dynamic from 'next/dynamic';

const OurPortfolio = dynamic(() => import('./components/OurPortfolio'), {
  loading: () => <div>Loading...</div>,
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutUs />
      <StatsSection />
      <OurServices />
      <OurPortfolio />
      <OurTestimonials />
    </main>
  );
}