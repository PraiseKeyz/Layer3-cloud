"use client";

import herosection from "@/assets/kubernetes/herosection.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import featureImage1 from "@/assets/kubernetes/feature-image1.png";
import featureImage2 from "@/assets/kubernetes/feature-image2.png";
import featureImage3 from "@/assets/kubernetes/feature-image3.png";
import featureImage4 from "@/assets/kubernetes/feature-image4.png";
import featureImage5 from "@/assets/kubernetes/feature-image5.png";
import featureImage6 from "@/assets/kubernetes/feature-image6.png";
// import waveFeatureImage from '@/assets/kubernetes/wavefeature-image.png'
import Image from "next/image";
import WaveFeatureSection from "@/components/WaveFeatureSection";
import UseCaseTabs from "@/components/UseCaseTabs";
import BannerSection from "@/components/BannerSection";

const faqs = [
  {
    question: "What is a managed Kubernetes service?",
    answer:
      "A managed Kubernetes service is a cloud-based solution where the provider handles the setup, maintenance, scaling, and security of Kubernetes clusters. This allows you to focus on deploying and managing your applications without worrying about the underlying infrastructure or operational overhead.",
  },
  {
    question:
      "Can I integrate my existing CI/CD pipelines with Kubernetes Service?",
    answer:
      "Yes, Kubernetes Service supports seamless integration with popular CI/CD tools such as Jenkins, GitLab CI, GitHub Actions, and more. You can automate your build, test, and deployment workflows to deliver applications faster and more reliably.",
  },
  {
    question: "How does auto-scaling work in Kubernetes Service?",
    answer:
      "Kubernetes Service uses built-in Horizontal Pod Autoscaling to automatically adjust the number of running pods based on CPU, memory, or custom metrics. This ensures your applications can handle changes in demand efficiently and cost-effectively.",
  },
  {
    question: "Is Kubernetes Service secure for production workloads?",
    answer:
      "Yes, Kubernetes Service is designed with security best practices, including network policies, role-based access control (RBAC), encryption at rest and in transit, and regular security updates. You can confidently run production workloads with robust protection.",
  },
  {
    question: "What level of availability does Kubernetes Service provide?",
    answer:
      "Kubernetes Service offers high availability through multi-zone clusters, automated failover, and a 99.95% SLA. This ensures your applications remain accessible and resilient, even during infrastructure failures or maintenance events.",
  },
];

const features = [
  {
    title: "Auto-scaling, Self-healing",
    description:
      "Automatically scale workloads up or down based on demand. Stay performant, only pay for what you use.",
    image: featureImage1,
  },
  {
    title: "99.95% SLA",
    description:
      "Our service offers high availability with an industry-standard SLA so your applications stay online.",
    image: featureImage2,
  },
  {
    title: "Integrates With Other Tools",
    description:
      "Deploy using Git workflows, manage packages with Helm, and integrate with your CI/CD tools.",
    image: featureImage3,
  },
  {
    title: "Simplified CLI",
    description:
      "Use our intuitive CLI to deploy, monitor, and scale clusters effortlessly.",
    image: featureImage4,
  },
  {
    title: "Integrated Monitoring",
    description:
      "Built-in metrics, logs, and alerts powered by Prometheus and Grafana.",
    image: featureImage5,
  },
  {
    title: "Secure Networking",
    description:
      "Manage access, policies, and encrypted communication using Kubernetes-native and cloud-native tools.",
    image: featureImage6,
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
        />
      </div>

      <section className="py-16">
        <div className="items-center justify-center text-center">
          <h3 className="text-red-600 font-semibold mb-4">Features</h3>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            Kubernetes Service Key features
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white hover:bg-indigo-50 transition-colors duration-200 rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full cursor-pointer"
            >
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-[#E9ECF6]">
        {/* Use Case Tabs Section */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h3 className="text-red-600 font-semibold mb-4">Use Cases</h3>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 leading-tight">
              Kubernetes Service Use Cases
            </h2>
          </div>
          <UseCaseTabs />
        </section>

        <WaveFeatureSection
          description="Highly customizable virtual machines with flexible resources (CPU, memory, disk)"
          buttonText="Learn More"
          imageSrc={herosection}
          imageAlt="Virtual Machine Illustration"
        />
      </div>

      <BannerSection
        title="Get Started With Our Kubernetes Services"
        subtitle="Unlock High Performance & Resilience with Our Dedicated Kubernetes Service"
        primaryButtonText="Talk to Sales"
        onPrimaryClick={() => {
          /* handle Talk to Sales click */
        }}
        onSecondaryClick={() => {
          /* handle Request a Demo click */
        }}
      />

      <FAQSection
        label="FAQs"
        heading="Frequently Asked Questions"
        subtext="Review our FAQs for more information about Layer3Cloud's Kubernetes Services."
        faqs={faqs}
        buttonText="Read More"
        buttonHref="/faqs"
      />
    </div>
  );
}
