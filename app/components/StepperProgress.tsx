'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
  ssr: false,
});

export default function StepperProgress() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Laying the Foundation for Success. We analyze your vision and requirements to build a solid strategic roadmap.',
      icon: "pajamas:work-item-maintenance",
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Bringing Your Ideas to Life. Our expert team crafts intuitive UI/UX designs and builds high quality code.',
      icon: "fluent:developer-board-lightning-toolbox-20-regular",
    },
    {
      number: '03',
      title: 'Testing & Deployment',
      description: 'Ensuring Perfection Before Launch. We conduct rigorous quality checks to deliver a bug free product ensure.',
      icon: "humbleicons:rocket",
    }
  ];

  return (
    <div className="main-stepper-section bg-black py-16 md:py-20 px-6 md:px-28">
      <div className="w-full">

        <div className="stepper-header text-center relative">
          <div className="inline-flex items-center gap-3 text-xs md:text-sm text-white uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#3bbbfc] rounded-full shadow-[0_0_10px_rgba(59,187,252,0.8)] animate-pulse" />
            <span className="font-semibold">Working Steps</span>
            <div className="w-8 h-px bg-linear-to-r from-[#3bbbfc] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-[46px] font-bold leading-[1.1] relative">
            <span className="text-white/95 hover:text-white transition-colors duration-300 mr-1 md:mr-2">
              Shaping the Future <br /> of Digital
            </span>
            <span className="bg-linear-to-r from-[#3bbbfc] via-[#01a8fc] to-[#3bbbfc] bg-clip-text text-transparent bg-size-[200%_auto]">
              Experiences
            </span>
            <div className="absolute -bottom-5 left-0 right-0 w-40 md:w-95 mx-auto h-px bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent opacity-50" />
          </div>
          <div className="mt-10 md:mt-12 w-full md:max-w-3xl mx-auto">
            <p className="text-[13px] md:text-[17px] text-white/80">We don’t just build products we create meaningful digital journeys by blending technical mastery with aesthetic precision, we help brands stand out in a crowded world.</p>
          </div>
        </div>

        <div className="stepper-section relative mt-10 md:mt-20">
          
          <div className="absolute -top-2 left-0 right-0 hidden lg:block z-0">
            <div className="relative w-full">
              <div className="w-full h-px absolute top-0 left-0 right-0 bg-linear-to-r from-transparent via-[#01a8fc] to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 pt-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <div key={index} className="relative group cursor-pointer" onClick={() => setActiveStep(index)}>

                  <div className="absolute top-0 md:-top-9.5 left-1/2 transform -translate-x-1/2 z-20">
                    <span className={`text-[13px] md:text-sm font-bold px-7 py-1.5 md:py-2 rounded-full border uppercase tracking-widest transition-all duration-500 backdrop-blur-md 
                        ${isActive ? 'bg-[#01a8fc] border border-[#3bbbfc] text-white shadow-[0_0_20px_rgba(59,188,252,0.4)]'
                        : 'bg-[#212121] border-white/10 text-white/80'}`}>
                      Step {step.number}
                    </span>
                  </div>

                  <div className={`relative mt-16 rounded-2xl md:rounded-3xl p-10 border transition-all duration-700 overflow-hidden
                       ${isActive
                      ? 'bg-linear-to-b from-[#3bbbfc]/15 to-transparent border-[#3bbbfc]/70 shadow-[0_40px_80px_-15px_rgba(59,188,252,0.15)] scale-[1.03]'
                      : 'bg-white/5 border-white/10 hover:border-white/15 hover:bg-white/8'}`}>
                    {isActive && (
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3bbbfc]/10 blur-[80px] rounded-full" />
                    )}

                    <div className="flex justify-center mb-4 md:mb-6">
                      <div className={`w-15 h-15 md:w-19 md:h-19 rounded-full flex items-center justify-center transition-all duration-200 relative
                           ${isActive ? 'bg-linear-to-br from-[#3bbbfc] to-[#0188fc] shadow-[0_5px_20px_rgba(59,188,252,0.3)]'
                          : 'bg-white/5 border border-white/10'}`}>
                        <Icon icon={step.icon} className={`transition-all duration-700 w-5 h-5 md:w-7 md:h-7
                          ${isActive ? 'text-white scale-110' : 'text-[#3bbbfc]/60 group-hover:text-[#3bbbfc]'}`} />
                      </div>
                    </div>

                    <div className="text-center space-y-3 md:space-y-4 relative z-10">
                      <h3 className={`text-[19px] md:text-[23px] font-bold tracking-wide transition-colors duration-500 
                          ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm md:text-[15px] leading-relaxed transition-colors duration-500 px-2
                         ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {step.description}
                      </p>
                    </div>

                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-[#3bbbfc] to-transparent blur-sm" />
                    )}


                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}