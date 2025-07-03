"use client"

import HeroSection from "@/components/HeroSection"
import herosection from '@/assets/industrial-solutions/herosection.png'
import Image from "next/image"
import herosectionbg from '@/assets/industrial-solutions/herosectionabs.png'
import herosectionabs from '@/assets/industrial-solutions/herosectionabs2.png'
import ImageSlideshow from "@/components/ImageSlideshow"
import WhyLayerCloud from "@/components/WhylayerCloud"
import TestimonialSection from "@/components/TestimonialSection"
import Additionalproducts from "@/components/AdditioalProducts"
import React, { useRef } from "react"
import videoImage from '@/assets/industrial-solutions/video-image.png'
import carouselImage1 from '@/assets/industrial-solutions/carousel-image1.png'
import carouselImage2 from '@/assets/industrial-solutions/carousel-image2.png'
import carouselImage3 from '@/assets/industrial-solutions/carousel-image3.png'

const industries = [
  {
    image: carouselImage2,
    icon: (
<svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3335 28.3307H34.6668V24.9974C34.6668 22.236 32.4283 19.9974 29.6668 19.9974C28.0742 19.9974 26.6554 20.7421 25.7398 21.9022M26.3335 28.3307H9.66683M26.3335 28.3307V24.9974C26.3335 23.9037 26.1228 22.8591 25.7398 21.9022M9.66683 28.3307H1.3335V24.9974C1.3335 22.236 3.57207 19.9974 6.3335 19.9974C7.92617 19.9974 9.34493 20.7421 10.2606 21.9022M9.66683 28.3307V24.9974C9.66683 23.9037 9.87754 22.8591 10.2606 21.9022M10.2606 21.9022C11.4893 18.8324 14.4915 16.6641 18.0002 16.6641C21.5088 16.6641 24.511 18.8324 25.7398 21.9022M23.0002 6.66406C23.0002 9.42549 20.7616 11.6641 18.0002 11.6641C15.2387 11.6641 13.0002 9.42549 13.0002 6.66406C13.0002 3.90264 15.2387 1.66406 18.0002 1.66406C20.7616 1.66406 23.0002 3.90264 23.0002 6.66406ZM33.0002 11.6641C33.0002 13.505 31.5078 14.9974 29.6668 14.9974C27.8259 14.9974 26.3335 13.505 26.3335 11.6641C26.3335 9.82311 27.8259 8.33073 29.6668 8.33073C31.5078 8.33073 33.0002 9.82311 33.0002 11.6641ZM9.66683 11.6641C9.66683 13.505 8.17445 14.9974 6.3335 14.9974C4.49255 14.9974 3.00016 13.505 3.00016 11.6641C3.00016 9.82311 4.49255 8.33073 6.3335 8.33073C8.17445 8.33073 9.66683 9.82311 9.66683 11.6641Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   ),
    title: "Startup & SMEs",
  },
  {
    image: carouselImage1,
    icon: (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33333 19.3333V24.3333M16 19.3333V24.3333M22.6667 19.3333V24.3333M1 31H31M1 12.6667H31M1 7.66667L16 1L31 7.66667M2.66667 12.6667H29.3333V31H2.66667V12.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   ),
    title: "Financial Services & Fintech",
  },
  {
    image: carouselImage3,
    icon: (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6667 35V8.33333C31.6667 6.49238 30.1743 5 28.3333 5H11.6667C9.82572 5 8.33333 6.49238 8.33333 8.33333V35M31.6667 35L35 35M31.6667 35H23.3333M8.33333 35L5 35M8.33333 35H16.6667M15 11.6666H16.6667M15 18.3333H16.6667M23.3333 11.6666H25M23.3333 18.3333H25M16.6667 35V26.6666C16.6667 25.7462 17.4129 25 18.3333 25H21.6667C22.5871 25 23.3333 25.7462 23.3333 26.6666V35M16.6667 35H23.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   ),
    title: "Government and Public Sector",
  },
  {
    image: carouselImage2,
    icon: (
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.6667 35V8.33333C31.6667 6.49238 30.1743 5 28.3333 5H11.6667C9.82572 5 8.33333 6.49238 8.33333 8.33333V35M31.6667 35L35 35M31.6667 35H23.3333M8.33333 35L5 35M8.33333 35H16.6667M15 11.6666H16.6667M15 18.3333H16.6667M23.3333 11.6666H25M23.3333 18.3333H25M16.6667 35V26.6666C16.6667 25.7462 17.4129 25 18.3333 25H21.6667C22.5871 25 23.3333 25.7462 23.3333 26.6666V35M16.6667 35H23.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
   ),
    title: "Enterprises",
  },
];

export default function IndustrySolution() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (dir: 'left' | 'right') => {
      if (!scrollRef.current) return;
      const card = scrollRef.current.querySelector("div[data-card]") as HTMLElement | null;
      if (!card) return;
      const cardWidth = card.offsetWidth + 24; // 24 = gap-x-6
      scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    };

    return(
        <div>
      <div className="relative">
        <div className="absolute w-130 h-130 top-0 left-0 z-0">
          <Image src={herosectionbg} alt="herosection background" className="w-full" />
        </div>
        <div className="relative z-10">
        <HeroSection
          heroImage={herosection}
          heroImageAlt="Kubernetes Service"
          heading="Empowering Africa's Digital Ambitions, One Industry at a Time"
          description="From startups in Lagos to enterprises in Nairobi, Layer3Cloud supports digital transformation across Africa with reliable cloud infrastructure and real peace of mind."
          breadcrumbText="Industrial"
        />
        </div>
        <div className="absolute top-[80%] left-[50%] w-15 h-15 ">
          <Image src={herosectionabs} alt="Herosection bg design" className="w-full" /> 
        </div>
      </div>

      <div className="relative mx-36">
          {/* Left fade */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10"
       style={{
         background: 'linear-gradient(to right, white 50%, transparent 100%)'
       }}
  />
  {/* Right fade */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10"
       style={{
         background: 'linear-gradient(to left, white 50%, transparent 100%)'
       }}
  />
      <ImageSlideshow />
      </div>
      <WhyLayerCloud />

      <section className="py-16 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-[#EB1C29] font-medium mb-2">Solutions</div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#282828] mb-2">Industries We Serve</h2>
            <p className="text-[#434343] text-sm max-w-2xl mx-auto">
              Discover how startups, enterprises, and public institutions across Africa are leveraging Layer3Cloud to drive innovation, ensure security, and accelerate digital transformation.
            </p>
          </div>
          <div className="relative">
            {/* Scrollable cards with fade and no scrollbar */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 hide-scrollbar"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {industries.map((ind, idx) => (
                <div
                  key={ind.title}
                  data-card
                  className={`relative min-w-[90vw] max-w-[90vw] sm:min-w-[340px] sm:max-w-[340px] md:min-w-[340px] md:max-w-[340px] snap-center bg-[#222] rounded-lg overflow-hidden group shadow-lg${idx === industries.length - 1 ? ' mr-0' : ''}`}
                  style={idx === industries.length - 1 ? { marginRight: 0 } : {}}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    width={340}
                    height={400}
                    className="w-full h-[400px] object-cover transition group-hover:scale-105"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white">{ind.icon}</span>
                    </div>
                    <div className="text-white font-semibold text-lg">{ind.title}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <div className="flex justify-center gap-8 mt-8">
              <button
                aria-label="Scroll left"
                onClick={() => scroll("left")}
                className="hover:text-[#2143A6] text-[#949494] p-2"
                type="button"
              >
<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3333 34.3307L13 24.9974M13 24.9974L22.3333 15.6641M13 24.9974L37 24.9974" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>
              <button
                aria-label="Scroll right"
                onClick={() => scroll("right")}
                className="hover:text-[#2143A6] text-[#949494] p-2"
                type="button"
              >
<svg
  width="50"
  height="50"
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ transform: "scaleX(-1)" }}
>
  <path
    d="M22.3333 34.3307L13 24.9974M13 24.9974L22.3333 15.6641M13 24.9974L37 24.9974"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center">
          <h3 className="text-[#EB1C29] mb-4 text-center font-semibold">Our Commitment</h3>
          <h2 className="text-2xl md:text-4xl mb-4 text-center font-bold text-[#282828]">Serving Africa, Built for Africans</h2>
          <p className="text-center mb-4 text-[#434343]">Whether you&apos;re launching a fintech in Accra or scaling a SaaS in Nairobi, Layer3Cloud is your growth partner.</p>
          <button
            className="bg-[#EB1C29] mb-16 hover:bg-red-700 cursor-pointer text-white font-semibold flex px-4 py-2 rounded-lg gap-2 text-sm shadow transition-colors"
          >
            Talk to sales <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8333 5.33594L14.5 8.0026M14.5 8.0026L11.8333 10.6693M14.5 8.0026L2.5 8.0026" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
        </div>

        <div className="w-2/3">
          <Image src={videoImage} alt="object-cover w-full" />
        </div>
      </section>

      <TestimonialSection />
      <Additionalproducts />
        </div>
    )
}

