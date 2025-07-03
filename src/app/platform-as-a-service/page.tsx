"use client";

import herosection from "@/assets/platform-as-a-service/herosection.png";
import waveFeatureImage from "@/assets/virtua-data-center/wavefeature-image.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import WaveFeatureSection from "@/components/WaveFeatureSection";
import React from "react";
import WhyLayerCloud from "@/components/WhylayerCloud";

const faqs = [
  {
    question: "How do I manage my virtual machines within the vDC?",
    answer:
      "You can manage your virtual machines through the Layer3Cloud vDC dashboard or API, allowing you to create, configure, monitor, and control VMs easily from a centralized interface.",
  },
  {
    question: "What is a Virtual Data Center (vDC)?",
    answer:
      "A Virtual Data Center (vDC) is a pool of cloud infrastructure resources—including compute, storage, and networking—delivered as a service. It allows you to deploy and manage virtual machines and applications with the flexibility and scalability of the cloud, without the need for physical hardware.",
  },
  {
    question: "Can I automate deployments in the vDC?",
    answer:
      "Yes, you can automate deployments in the vDC using Infrastructure as Code (IaC) tools, APIs, and orchestration platforms, enabling faster, repeatable, and consistent provisioning of resources.",
  },
  {
    question: "Does the vDC provide real-time monitoring?",
    answer:
      "Yes, the vDC offers real-time monitoring and alerting for your virtual machines and infrastructure, helping you track performance, resource usage, and system health.",
  },
  {
    question: "Is my data secure in the Virtual Data Center?",
    answer:
      "Yes, Layer3Cloud's vDC is built with enterprise-grade security, including data encryption, network segmentation, firewalls, and regular security updates to protect your data at all times.",
  },
];

const paasComponents = [
  {
    title: "Managed Databases",
    description: (
      <>
        <h4 className="font-bold text-gray-800 text-lg mb-2">
          Effortless database management (MySQL, PostgreSQL, MongoDB)
        </h4>
        <p className="text-gray-600">
          Focus on building great applications while we handle the database
          operations. With fully managed MySQL, PostgreSQL, and MongoDB, you get
          automated backups, high availability, security, and seamless
          scaling—all without the need to manage infrastructure or worry about
          downtime.
          <br />
          <br />
          Our platform ensures consistent performance, point-in-time recovery,
          and real-time monitoring, giving your development team the confidence
          to create fast while maintaining data integrity and compliance.
        </p>
      </>
    ),
  },
  {
    title: "Application Hosting",
    description: (
      <>
        <h4 className="font-bold text-gray-800 text-lg mb-2">
          Deploy and scale your apps with ease
        </h4>
        <p className="text-gray-600">
          Host web and mobile applications on a secure, scalable platform. Enjoy
          automated deployments, zero-downtime updates, and built-in monitoring.
          Our PaaS supports popular frameworks and languages, so you can focus
          on code, not infrastructure.
        </p>
      </>
    ),
  },
  {
    title: "DevOps Tools & CI/CD pipelines",
    description: (
      <>
        <h4 className="font-bold text-gray-800 text-lg mb-2">
          Streamline your development workflow
        </h4>
        <p className="text-gray-600">
          Integrate with leading DevOps tools and set up CI/CD pipelines for
          faster, more reliable releases. Automate testing, deployment, and
          monitoring to boost productivity and reduce errors.
        </p>
      </>
    ),
  },
];


export default function PlatformService() {
  return (
    <div>
      <HeroSection
        heroImage={herosection}
        heroImageAlt="Platform as a Service heroSection"
        heading="Platform as a Service"
        description="A ready-to-use development environment with fully managed runtime, middleware, and database services."
        breadcrumbText="Platform as a Service"
      />

      <WhyLayerCloud />

      <div className="bg-[#E9ECF6]">
        <section className="py-16 flex mx-8 flex-col items-center">
          <h3 className="text-red-600 font-semibold text-center mb-2">
            PaaS Components
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
            Tools built for speed and simplicity.
          </h2>
          <TabbedPaaSComponents />
        </section>

        <WaveFeatureSection
          description="Highly customizable virtual machines with flexible resources (CPU, memory, disk)"
          buttonText="Learn More"
          imageSrc={waveFeatureImage}
          imageAlt="Virtual Machine Illustration"
          reverse={true}
        />
      </div>

      <FAQSection
        label="FAQs"
        heading="Frequently Asked Questions"
        subtext="Review our FAQs for more information about Layer3Cloud's Virtual Data Center."
        faqs={faqs}
        buttonText="Read More"
        buttonHref="/faqs"
      />
    </div>
  );
}

function TabbedPaaSComponents() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop Tabs */}
      <div className="hidden md:flex w-full max-w-5xl gap-12">
        <div className="flex flex-col gap-2 bg-indigo-50 rounded-xl p-6 min-w-[270px]">
          {paasComponents.map((tab, idx) => (
            <button
              key={tab.title}
              className={`text-left px-4 py-2 rounded-md font-medium transition-colors ${selected === idx ? "bg-[#2143A6] text-white" : "text-gray-900 hover:bg-indigo-100"}`}
              onClick={() => setSelected(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="flex-1 text-sm bg-transparent">
          {paasComponents[selected].description}
        </div>
      </div>
      {/* Mobile Select */}
      <div className="md:hidden w-full max-w-md flex flex-col gap-4">
        <select
          className="w-full p-3 rounded-lg border border-gray-300 bg-indigo-50 text-gray-900 font-medium"
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
        >
          {paasComponents.map((tab, idx) => (
            <option key={tab.title} value={idx}>
              {tab.title}
            </option>
          ))}
        </select>
        <div className="bg-white rounded-xl p-6 shadow mt-2">
          {paasComponents[selected].description}
        </div>
      </div>
    </div>
  );
}
