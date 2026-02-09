'use client'

import AboutUs from "./components/AboutUs";
import Demo from "./components/Demo";
import HeroBanner from "./components/HeroBanner";
import OurPortfolio from "./components/OurPortfolio";
import OurServices from "./components/OurServices";
import OurTestimonials from "./components/OurTestimoinals";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <StatsSection />
      <OurServices />
      <OurPortfolio />
      <OurTestimonials />
      {/* <Demo /> */}
    </>
  );
}
