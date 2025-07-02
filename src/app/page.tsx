"use client"

import herosectionbg from "@/assets/image.png";
import ArrowRight from "@/components/ArrowRight";
import services from "@/data/service.json";
import AchievementSection from "@/components/AchievementSection";
import BannerSection from "@/components/BannerSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Image from "next/image";
import ImageSlideshow from "@/components/ImageSlideshow";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-screen text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${herosectionbg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          {/* Badge */}
          <div className="flex items-center mb-8">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow">
              <svg
                className="w-4 h-4 bg-white text-[#002366] rounded-lg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              #1 Leading Cloud Provider in Nigeria
            </span>
          </div>
          {/* Headline */}
          <h1 className="md:text-5xl font-bold text-center mb-6">
            Africa&apos;s Cloud.
            <br />
            Local Performance. Global Standards.
          </h1>
          {/* Subtext */}
          <p className="text-base sm:text-sm md:text-sm text-center text-white/80 max-w-4xl mb-10">
            Built for the demands of businesses across Africa, Layer3Cloud
            delivers secure, scalable cloud infrastructure with low latency,
            local support, and flexible pricing.
          </p>
          {/* CTA Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-colors">
            Talk to Sales
          </button>
        </div>
      </section>

      <section className="py-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center my-16">
          <h2 className="md:text-3xl font-bold leading-tight max-w-xl text-gray-700">
            Everything You Need to Build, Scale, and Run Your Cloud Workloads.
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
            Layer3Cloud offers secure, scalable, and flexible cloud
            infrastructure all hosted locally in Nigeria with global-grade
            performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-sm border transition hover:shadow-lg bg-white ${service.highlight ? "bg-indigo-50 border-indigo-100" : "border-gray-200"}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={96}
                height={96}
                className="mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="text-red-600 font-medium flex items-center gap-1 hover:underline group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUsSection />
      <AchievementSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <ImageSlideshow />
      <BannerSection
        title="Take Your Business to The Next Level"
        subtitle="Let's discuss how we can help you transform your business with our cloud services."
        primaryButtonText="Talk to Sales"
        secondaryButtonText="Request a Demo"
        onPrimaryClick={() => {}}
      />
    </div>
  );
}
