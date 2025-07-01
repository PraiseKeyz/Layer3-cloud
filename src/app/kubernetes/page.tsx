"use client";

// import Image from "next/image";
import herosection from "@/assets/kubernetes/herosection.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";

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

export default function Kubernetes() {
  return (
    <div>
      <div className="bg-[#E9ECF6]">
        <HeroSection
          heroImage={herosection}
          heroImageAlt="Kubernetes Service"
          heading="Kubernetes Service"
          description="Deploy containerized applications on a production-ready managed Kubernetes cluster."
          breadcrumbText="Kubernetes Service"
        />{" "}
      </div>

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
