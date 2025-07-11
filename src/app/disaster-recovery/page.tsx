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

const features = [
  {
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z"
          fill="#E9ECF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7162 23.5969H19.4401C19.565 21.4319 19.9772 19.4376 20.6131 17.8321C18.5846 19.0768 17.1252 21.1587 16.7162 23.5969ZM25 13.7969C18.8145 13.7969 13.8 18.8113 13.8 24.9969C13.8 31.1825 18.8145 36.1969 25 36.1969C31.1856 36.1969 36.2001 31.1825 36.2001 24.9969C36.2001 18.8113 31.1856 13.7969 25 13.7969ZM25 16.5969C24.8936 16.5969 24.6751 16.6413 24.3486 16.9635C24.0162 17.2916 23.6526 17.8357 23.317 18.6187C22.7728 19.8884 22.3749 21.6167 22.2454 23.5969H27.7547C27.6252 21.6167 27.2273 19.8884 26.6831 18.6187C26.3475 17.8357 25.9839 17.2916 25.6515 16.9635C25.325 16.6413 25.1065 16.5969 25 16.5969ZM30.56 23.5969C30.4351 21.4319 30.0229 19.4376 29.387 17.8321C31.4155 19.0768 32.8749 21.1587 33.2839 23.5969H30.56ZM27.7547 26.3969H22.2454C22.3749 28.3771 22.7728 30.1053 23.317 31.375C23.6526 32.158 24.0162 32.7022 24.3486 33.0303C24.6751 33.3525 24.8936 33.3969 25 33.3969C25.1065 33.3969 25.325 33.3525 25.6515 33.0303C25.9839 32.7022 26.3475 32.158 26.6831 31.375C27.2273 30.1053 27.6252 28.3771 27.7547 26.3969ZM29.387 32.1617C30.0229 30.5562 30.4351 28.5618 30.56 26.3969H33.2839C32.8749 28.835 31.4155 30.917 29.387 32.1617ZM20.6131 32.1617C19.9772 30.5562 19.565 28.5618 19.4401 26.3969H16.7162C17.1252 28.835 18.5846 30.917 20.6131 32.1617Z"
          fill="#2143A6"
        />
      </svg>
    ),
    title: "Multi-Availability Zones",
    description:
      "Redundant infrastructure across regions, High uptime & disaster recovery, Load balancing between zones",
  },
  {
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z"
          fill="#E9ECF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.8208 12.4633C27.4036 12.647 27.8 13.1875 27.8 13.7985V20.7985L33.4 20.7985C33.922 20.7985 34.4007 21.089 34.6417 21.552C34.8828 22.015 34.8462 22.5737 34.5469 23.0014L24.7469 37.0014C24.3965 37.502 23.7619 37.7175 23.1791 37.5338C22.5963 37.3501 22.2 36.8096 22.2 36.1985L22.2 29.1985H16.6C16.0779 29.1985 15.5993 28.9081 15.3582 28.4451C15.1171 27.982 15.1537 27.4234 15.453 26.9957L25.253 12.9957C25.6034 12.4951 26.2381 12.2796 26.8208 12.4633Z"
          fill="#2143A6"
        />
      </svg>
    ),
    title: "Ultra-Low Latency",
    description:
      "Data centers in-country for faster response Perfect for real-time apps and platforms",
  },
  {
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z"
          fill="#E9ECF6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 23.5969V20.7969C18 16.9309 21.134 13.7969 25 13.7969C28.8659 13.7969 31.9999 16.9309 31.9999 20.7969V23.5969C33.5463 23.5969 34.7999 24.8505 34.7999 26.3969V33.3969C34.7999 34.9433 33.5463 36.1969 31.9999 36.1969H18C16.4536 36.1969 15.2 34.9433 15.2 33.3969V26.3969C15.2 24.8505 16.4536 23.5969 18 23.5969ZM29.1999 20.7969V23.5969H20.8V20.7969C20.8 18.4773 22.6804 16.5969 25 16.5969C27.3195 16.5969 29.1999 18.4773 29.1999 20.7969Z"
          fill="#2143A6"
        />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, Firewalls, DDoS protection, Role-based access,",
  },
  {
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z"
          fill="#E9ECF6"
        />
        <path
          d="M13.8 15.1969C13.8 14.4237 14.4269 13.7969 15.2 13.7969H18.2141C18.8984 13.7969 19.4825 14.2917 19.595 14.9667L20.6301 21.1769C20.7311 21.7832 20.4249 22.3844 19.8752 22.6593L17.7078 23.743C19.2706 27.6265 22.3704 30.7263 26.2539 32.2891L27.3376 30.1217C27.6125 29.572 28.2137 29.2658 28.82 29.3669L35.0302 30.4019C35.7053 30.5144 36.2001 31.0985 36.2001 31.7829V34.7969C36.2001 35.5701 35.5732 36.1969 34.8001 36.1969H32.0001C21.9485 36.1969 13.8 28.0485 13.8 17.9969V15.1969Z"
          fill="#2143A6"
        />
      </svg>
    ),
    title: "24/7 Local Support",
    description:
      "Speak to real engineers, Hands-on help any time, Enterprise SLAs",
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
