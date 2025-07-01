"use client";

import Image from "next/image";
import herosection from "@/assets/backup-service/herosection.png";
import backup from "@/assets/backup-service/backup-image.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 16C4.79086 16 3 14.2091 3 12C3 10.0929 4.33457 8.4976 6.12071 8.09695C6.04169 7.74395 6 7.37684 6 7C6 4.23858 8.23858 2 11 2C13.4193 2 15.4373 3.71825 15.9002 6.00098C15.9334 6.00033 15.9666 6 16 6C18.7614 6 21 8.23858 21 11C21 13.419 19.2822 15.4367 17 15.9M15 13L12 10M12 10L9 13M12 10L12 22"
          stroke="#2143A6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Point-in-Time Recovery",
    desc: "Restore data to any moment before failure or corruption.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
          stroke="#2143A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Offsite Replication",
    desc: "Ensure business continuity with geo-redundant storage.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
          stroke="#2143A6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "AES-256 Encryption",
    desc: "Industry-standard encryption secures data in transit and at rest.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 10L12 11M12 11L10 10M12 11V13.5M20 7L18 8M20 7L18 6M20 7V9.5M14 4L12 3L10 4M4 7L6 6M4 7L6 8M4 7V9.5M12 21L10 20M12 21L14 20M12 21V18.5M6 18L4 17V14.5M18 18L20 17V14.5"
          stroke="#2143A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Agent-based or API-driven",
    desc: "Flexibly integrate using lightweight agents or APIs.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8V4M4 4H8M4 4L9 9M20 8V4M20 4H16M20 4L15 9M4 16V20M4 20H8M4 20L9 15M20 20L15 15M20 20V16M20 20H16"
          stroke="#2143A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Broad App Support",
    desc: "Supports SQL, MongoDB, MySQL, Microsoft 365, Google Workspace, and more.",
  },
];
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

export default function BackupService() {
  return (
    <div>
      <HeroSection
        heroImage={herosection}
        heroImageAlt="Backup as a Service heroSection"
        heading="Backup as a Service"
        description="Automated backup for VMs, databases, SaaS, and cloud-native apps."
        breadcrumbText="Backup as a Service"
      />

      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Heading in grid */}
          <div className="flex flex-col justify-center ">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              BaaS Features
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Everything you need to build and manage your cloud infrastructure
              efficiently
            </p>
          </div>
          {/* Feature Cards */}
          {features.map((card, idx) => (
            <div
              key={idx}
              className="text-gray-800 rounded-2xl p-8 transition-colors duration-200 flex flex-col items-start hover:bg-[#183A7C] border border-[#CDCDCD] hover:text-white cursor-pointer min-h-[180px]"
            >
              <span className="mb-4 ">{card.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-base font-normal">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Layer3Cloud Section */}
      <section className="w-full bg-[#E9ECF6] py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Left Column */}
          <div className="flex-1 text-left">
            <h3 className="text-red-600 font-semibold mb-4">
              Why Choose Layer3Cloud
            </h3>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Built for Africa.
              <br />
              Designed for the Future.
            </h2>
            <p className="text-gray-800 text-md mb-8 max-w-lg">
              Layer3Cloud is built on African soil with global capabilities.
              From startups to enterprises, we offer the agility, security, and
              local presence businesses need to thrive.
            </p>
            <ul className="space-y-4">
              {[
                "Local Data Residency & Compliance",
                "Ultra-Low Latency",
                "24/7 Local Support",
                "Enterprise-Grade Security",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-800 text-lg font-semibold"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#FF2D20"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
              <Image
                src={backup}
                alt="Why Choose Layer3Cloud"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />

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
