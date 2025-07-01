"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import caseSudyBg from "@/assets/case-studies-bg.svg";
import case2 from "@/assets/mobile-svg.svg";

interface Testimonial {
  title: string;
  content: string;
  name: string;
  company: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    title: "A wonderful Alternative",
    content:
      "A great alternative for on-premise hardware resource. Now we are not scared of physical damage to equipment or data loss.",
    name: "Solomon Musa",
    company: "NASSCO",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "An Efficient Company",
    content:
      "Layer3Cloud is wonderful. I don't know we can still have a company so reliable, responsive and efficient here in Nigeria. Please well done and happy working with you.",
    name: "Biyi Fafunmi",
    company: "NBS",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    title: "Very Swift Support",
    content:
      "I admire the support team, always swift in resolving issues and providing guidance.",
    name: "Jane Doe",
    company: "FinTech Co.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    title: "Excellent Performance",
    content:
      "The performance and reliability of Layer3Cloud services have exceeded our expectations. Our applications run smoothly with minimal downtime.",
    name: "Michael Johnson",
    company: "Tech Solutions Ltd",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    title: "Outstanding Reliability",
    content:
      "Layer3Cloud has been our trusted partner for over 2 years. Their infrastructure reliability and customer support have been consistently excellent.",
    name: "Sarah Williams",
    company: "Digital Solutions Inc",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    title: "Cost-Effective Solution",
    content:
      "Switching to Layer3Cloud has significantly reduced our infrastructure costs while improving performance. Their local presence makes all the difference.",
    name: "David Chen",
    company: "E-commerce Platform",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

export default function TestimonialsSection({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update carousel position on scroll (for swiping)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 320; // Adjust to match your card width + gap
      const newPosition = Math.round(scrollLeft / cardWidth);
      setCarouselPosition(
        Math.max(0, Math.min(testimonials.length - 1, newPosition)),
      );
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

  // Disable wheel scroll on desktop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel && window.innerWidth >= 768) {
      const handleWheel = (e: Event) => {
        e.preventDefault();
      };
      carousel.addEventListener("wheel", handleWheel, { passive: false });
      return () => carousel.removeEventListener("wheel", handleWheel);
    }
  }, []);

  // Scroll to card when arrow or dot is clicked
  const scrollToCard = (idx: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = 320; // Adjust to match your card width + gap
      carousel.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
      setCarouselPosition(idx);
    }
  };

  return (
    <section className="bg-white flex justify-center items-center overflow-x-hidden">
      <div className="w-full relative max-w-full overflow-x-hidden">
        <Image
          src={caseSudyBg}
          alt="Case Studies Background"
          className="w-full h-auto hidden md:block"
          style={{
            transform: "scaleX(1.2)",
            transformOrigin: "center",
          }}
        />
        <Image
          src={case2}
          alt="Case Studies Background"
          className="w-full h-auto block md:hidden"
          style={{
            transform: "scaleX(1.2)",
            transformOrigin: "center",
          }}
        />
        {/* Overlayed Testimonials */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center w-full max-w-full"
          style={{
            top: "10%",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        >
          {/* Section Title */}
          <div className="mb-10 mt-10 md:mt-0">
            <div className="flex flex-col items-start">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-left mx-4 leading-tight max-w-3xl">
                Our Clients&apos; Experience Speaks Volume
              </h2>
            </div>
          </div>
          {/* Carousel Cards */}
          <div className="w-full flex flex-col items-center">
            <div
              ref={carouselRef}
              className="flex gap-6 pb-2 min-w-0 testimonial-carousel overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full max-w-6xl px-4 md:px-0"
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 min-w-full md:min-w-[280px] md:max-w-[320px] w-full text-white shadow-lg flex flex-col justify-between snap-center"
                >
                  <div>
                    <div className="font-semibold text-base mb-2">
                      {testimonial.title}
                    </div>
                    <div className="text-sm opacity-80 mb-6">
                      {testimonial.content}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white/30"
                    />
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs opacity-70">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Progress Dots: only show on mobile */}
            <div className="flex md:hidden justify-center mt-4 gap-2 pointer-events-auto">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    carouselPosition === idx ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            {/* Arrows: only show on desktop */}
            <div className="hidden md:flex items-center justify-center mt-6 w-full">
              <button
                onClick={() => scrollToCard(Math.max(0, carouselPosition - 1))}
                className="text-2xl hover:text-white transition-colors p-2 rounded-lg bg-transparent"
              >
                ←
              </button>
              <div
                className="h-1 bg-white/20 rounded-full mx-2 transition-all duration-300 flex-1"
                style={{
                  width: `${100 / testimonials.length}px`,
                  transform: `translateX(${carouselPosition * (100 / testimonials.length)}px)`,
                  maxWidth: "80px",
                }}
              ></div>
              <button
                onClick={() =>
                  scrollToCard(
                    Math.min(testimonials.length - 1, carouselPosition + 1),
                  )
                }
                className="text-2xl hover:text-white transition-colors p-2 rounded-lg bg-transparent"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
