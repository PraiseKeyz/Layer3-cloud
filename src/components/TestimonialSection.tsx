"use client";

import React, { useState } from "react";
import Image from "next/image";

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

const CARDS_PER_VIEW = {
  desktop: 3,
  mobile: 1,
};

function useResponsiveCards() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const TestimonialSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const isMobile = useResponsiveCards();
  const cardsPerView = isMobile
    ? CARDS_PER_VIEW.mobile
    : CARDS_PER_VIEW.desktop;
  const [startIdx, setStartIdx] = useState(0);
  const endIdx = startIdx + cardsPerView;
  const canGoLeft = startIdx > 0;
  const canGoRight = endIdx < testimonials.length;

  const handlePrev = () => {
    if (canGoLeft) setStartIdx(startIdx - 1);
  };
  const handleNext = () => {
    if (canGoRight) setStartIdx(startIdx + 1);
  };

  return (
    <section className="w-full bg-[#E9ECF6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 ">
          <span className="text-red-500 font-semibold text-xl block mb-2">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            What our clients say
          </h2>
          <p className="text-gray-800 text-lg">
            Our Clients&apos; Experience Speaks Volumes
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div />
          <div className="flex gap-4">
            {!isMobile && (
              <button
                onClick={handlePrev}
                disabled={!canGoLeft}
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-white text-gray-700 shadow transition disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Previous testimonials"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canGoRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-[#E9ECF6] text-gray-700 shadow transition disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
          {testimonials.slice(startIdx, endIdx).map((t, idx) => (
            <div
              key={t.name + idx}
              className="bg-white border border-sm border-[#CDCDCD] rounded-2xl p-8 flex flex-col justify-between shadow-lg min-h-[260px]"
            >
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-700 text-base mb-6">{t.content}</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-sm">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
