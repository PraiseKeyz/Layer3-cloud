"use client";

import { useState, useRef } from "react";
import featureImage2 from "@/assets/kubernetes/feature-image2.png";
import featureImage3 from "@/assets/kubernetes/feature-image3.png";
import useCaseImage from "@/assets/kubernetes/usecase-image.png";
import Image from "next/image";

const useCases = [
  {
    label: "Microservices Based Application",
    title: "Microservices-Based Applications",
    image: useCaseImage,
    description: [
      "Modern software development is moving away from monolithic architectures—and Kubernetes is the ideal platform for microservices. With our Kubernetes Service, businesses can build and deploy applications as a collection of loosely coupled services.",
      "This approach improves team autonomy, simplifies updates and rollbacks, and enhances scalability. Each microservice can be deployed independently and scaled based on demand, making your applications more resilient and future-ready.",
    ],
  },
  {
    label: "Hybrid Cloud Deployments",
    title: "Hybrid Cloud Deployments",
    image: featureImage2,
    description: [
      "Seamlessly deploy and manage workloads across on-premises and cloud environments. Our Kubernetes Service enables true hybrid cloud flexibility, supporting migration, burst scaling, and disaster recovery scenarios.",
      "Integrate with your existing infrastructure and leverage the power of cloud-native orchestration for maximum agility and cost efficiency.",
    ],
  },
  {
    label: "Continuous Software Delivery",
    title: "Continuous Software Delivery",
    image: featureImage3,
    description: [
      "Accelerate your software release cycles with automated CI/CD pipelines on Kubernetes. Deploy updates, roll back changes, and maintain high availability with zero downtime deployments.",
      "Empower your teams to deliver features faster and more reliably, ensuring your business stays ahead in a competitive market.",
    ],
  },
];

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  // Touch swipe state
  let touchStartX = 0;
  let touchEndX = 0;

  // Handle swipe on tab list (mobile)
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }
  function handleTouchMove(e: React.TouchEvent) {
    touchEndX = e.touches[0].clientX;
  }
  function handleTouchEnd() {
    if (touchStartX - touchEndX > 50 && activeTab < useCases.length - 1) {
      setActiveTab(activeTab + 1);
    } else if (touchEndX - touchStartX > 50 && activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  }

  return (
    <div className="max-w-6xl mx-8">
      {/* Tabs */}
      <div className="relative">
        <div
          ref={tabListRef}
          className="flex md:flex-row flex-nowrap md:space-x-8 space-x-4 md:space-y-0 justify-center items-center border-b border-gray-300 mb-10 overflow-x-auto scrollbar-hide  md:overflow-visible"
          style={{ WebkitOverflowScrolling: "touch" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {useCases.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`relative whitespace-nowrap px-4 py-2 text-base md:text-lg font-medium transition-colors duration-150 focus:outline-none flex-shrink-0
                  ${activeTab === idx ? "text-gray-900" : "text-gray-500"}`}
            >
              {tab.label}
              {activeTab === idx && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-600 rounded-full w-full"></span>
              )}
            </button>
          ))}
          {/* Fade arrows for swipe hint (mobile only) */}
        </div>
        {/* Dots indicator (mobile only) */}
        <div className="flex md:hidden justify-center items-center mt-3 gap-2">
          {useCases.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${activeTab === idx ? "bg-red-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mt-8">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className=" flex items-center justify-center">
            <Image
              src={useCases[activeTab].image}
              alt={useCases[activeTab].title}
              className="object-contain w-full h-72 md:h-80"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            {useCases[activeTab].title}
          </h3>
          {useCases[activeTab].description.map((desc, i) => (
            <p
              key={i}
              className="text-gray-600 text-base md:text-lg mb-4 last:mb-0"
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
