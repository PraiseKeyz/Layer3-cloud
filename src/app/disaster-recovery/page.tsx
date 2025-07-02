"use client";

import Image from "next/image";
import herosection from "@/assets/disaster-recovery/herosection.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import featureImage1 from "@/assets/disaster-recovery/feature-image1.png";
import featureImage2 from "@/assets/disaster-recovery/feature-image2.png";
import featureImage3 from "@/assets/disaster-recovery/feature-image3.png";
import featureImage4 from "@/assets/disaster-recovery/feature-image4.png";
import caseSudyBg from "@/assets/case-studies-bg.svg";
import case2 from "@/assets/case2.svg";
import { features } from "@/data/platfromFeatures";

const faqs = [
  {
    question: "What types of workloads can be backed up with BaaS?",
    answer:
      "BaaS supports backup for virtual machines, databases, files, applications, and cloud-native workloads, ensuring comprehensive data protection for your business.",
  },
  {
    question: "How secure is my backup data?",
    answer:
      "Your backup data is protected with AES-256 encryption both in transit and at rest, along with strict access controls and regular security audits.",
  },
  {
    question: "Can I restore data from a specific point in time?",
    answer:
      "Yes, BaaS allows you to restore data from any available backup point, enabling point-in-time recovery to minimize data loss.",
  },
  {
    question: "Is offsite replication included in the service?",
    answer:
      "Yes, BaaS includes offsite replication to geo-redundant storage locations, ensuring business continuity and disaster recovery.",
  },
  {
    question: "How do I manage and trigger backups?",
    answer:
      "You can manage and trigger backups easily through the Layer3Cloud dashboard or via API, giving you full control and automation options.",
  },
];

// Features data array
const drFeatures = [
  {
    image: featureImage1,
    title: "Hot, Warm, and Cold recovery tiers",
    description:
      "Choose the right recovery tier for your business needs, balancing cost and recovery speed for every workload.",
  },
  {
    image: featureImage2,
    title: "Cross-cloud DR (AWS, Azure, GCP)",
    description:
      "Seamlessly replicate and recover workloads across major cloud providers, ensuring business continuity even during regional outages.",
    background: "bg-white",
  },
  {
    image: featureImage3,
    title: "Ransomware protection (immutable snapshots)",
    description:
      "Protect your data from ransomware attacks with immutable, tamper-proof backup snapshots.",
  },
  {
    image: featureImage4,
    title: "Custom runbooks for app-specific recovery workflows",
    description:
      "Automate and customize recovery workflows for your critical applications with tailored runbooks.",
  },
];

export default function DisasterRecovery() {
  return (
    <div>
      <div className="py-24">
        <HeroSection
          heroImage={herosection}
          heroImageAlt="Disaster Recovery-as-a-Service (DRaaS)"
          heading="Disaster Recovery-as-a-Service (DRaaS)"
          description="Enterprise-grade DR with near-zero RTO/RPO, replication, and instant failover."
          breadcrumbText="Disaster Recovery-as-a-Service (DRaaS)"
        />
      </div>

      <section className="py-16 bg-[#E9ECF6]">
        {/* Main header section */}
        <div className="items-center justify-center text-center">
          <h3 className="text-red-600 font-semibold mb-4">Features</h3>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            Key Features of Disaster Recovery as a Service
          </h2>
          <p className="text-gray-800 text-md mb-8">
            Everything you need to build and manage your cloud infrastructure
            efficiently
          </p>
        </div>

        {/* Features Alternating Section */}
        <div className="w-full">
          {drFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center justify-center py-24 px-4 ${feature.background ? feature.background : "bg-[#E9ECF6]"} ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center items-center md:items-start max-w-xl md:px-12 text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[#282828]">
                  {feature.title}
                </h3>
                <p className="text-lg max-w-sm text-[#434343]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

          {/* main content */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center w-full max-w-full"
            style={{
              pointerEvents: "none",
              top: "10%",
              left: "0",
              right: "0",
              bottom: "0",
            }}
          >
            <div className="py-16 flex flex-col items-center">
              <h3 className="text-[#F9B9BD] font-semibold text-center mb-2">
                Why Choose Layer3Cloud
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
                Built For Africa, Designed For The Future.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                {features.map((feature, idx) => (
                  <div key={idx} className="p-8 flex flex-col items-start">
                    <div className="mb-4 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-white text-xl mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        label="FAQs"
        heading="Frequently Asked Questions"
        subtext="Review our FAQs for more information about Layer3Cloud's Backup as a Service offering."
        faqs={faqs}
        buttonText="Read More"
        buttonHref="/faqs"
      />
    </div>
  );
}
