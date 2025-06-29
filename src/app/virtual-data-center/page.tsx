import Image from 'next/image';
import herosection from '@/assets/virtua-data-center/herosection.png'
import featuresImage from '@/assets/virtua-data-center/features-image.png'
import waveFeatureImage from '@/assets/virtua-data-center/wavefeature-image.png'
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import WaveFeatureSection from '@/components/WaveFeatureSection';
import vdcUseCasesRaw from '@/data/vdc-use-cases.json';
import vdcFeaturesRaw from '@/data/vdc-features.json';
import DataCenter from '@/components/DataCenter';

// SVG icon mapping
const iconMap = {
  building: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#E5EDFF"/>
      <path d="M12 24V14H20V24" stroke="#2143A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 24H22" stroke="#2143A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 18H18" stroke="#2143A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  kubernetes: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#E5EDFF"/>
      <path d="M16 8L20 16L16 24L12 16L16 8Z" stroke="#2143A6" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="2" fill="#2143A6"/>
    </svg>
  ),
  users: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#E5EDFF"/>
      <circle cx="16" cy="14" r="4" stroke="#2143A6" strokeWidth="2"/>
      <path d="M8 24C8 20.6863 11.134 18 16 18C20.866 18 24 20.6863 24 24" stroke="#2143A6" strokeWidth="2"/>
    </svg>
  ),
  cube: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#E5EDFF"/>
      <path d="M16 10L23 13.5V20.5L16 24L9 20.5V13.5L16 10Z" stroke="#2143A6" strokeWidth="2"/>
      <path d="M16 24V17" stroke="#2143A6" strokeWidth="2"/>
      <path d="M9 13.5L16 17L23 13.5" stroke="#2143A6" strokeWidth="2"/>
    </svg>
  ),
} as const;

const faqs = [
  {
    question: "How do I manage my virtual machines within the vDC?",
    answer: "You can manage your virtual machines through the Layer3Cloud vDC dashboard or API, allowing you to create, configure, monitor, and control VMs easily from a centralized interface."
  },
  {
    question: "What is a Virtual Data Center (vDC)?",
    answer: "A Virtual Data Center (vDC) is a pool of cloud infrastructure resources—including compute, storage, and networking—delivered as a service. It allows you to deploy and manage virtual machines and applications with the flexibility and scalability of the cloud, without the need for physical hardware."
  },
  {
    question: "Can I automate deployments in the vDC?",
    answer: "Yes, you can automate deployments in the vDC using Infrastructure as Code (IaC) tools, APIs, and orchestration platforms, enabling faster, repeatable, and consistent provisioning of resources."
  },
  {
    question: "Does the vDC provide real-time monitoring?",
    answer: "Yes, the vDC offers real-time monitoring and alerting for your virtual machines and infrastructure, helping you track performance, resource usage, and system health."
  },
  {
    question: "Is my data secure in the Virtual Data Center?",
    answer: "Yes, Layer3Cloud's vDC is built with enterprise-grade security, including data encryption, network segmentation, firewalls, and regular security updates to protect your data at all times."
  }
];

type IconKey = keyof typeof iconMap;

interface VdcUseCase {
  icon: IconKey;
  title: string;
  description: string;
  bullets: string[];
}

const vdcUseCases: VdcUseCase[] = vdcUseCasesRaw as VdcUseCase[];

type VdcFeature = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};
const vdcFeatures: VdcFeature[] = vdcFeaturesRaw as VdcFeature[];

export default function VdcPage() {
    return(
      <div>
        <HeroSection
          heroImage={herosection}
          heroImageAlt="Virtual Data Center Hero Section"
          heading="Virtual Data Center (vDC)"
          description="Create, manage, and scale virtual machines within a secured cloud environment with full-featured network services, including firewall, load balancer, VPN, and floating IPs."
          breadcrumbText="Virtual Data Center"
        />


        <section className='py-30'>
        <div className="flex flex-col mx-10 mb-14">
            <span className="text-red-600 font-semibold text-base mb-2">Use Cases</span>
            <h2 className="text-xl md:text-3xl font-bold max-w-xl text-gray-800">Virtual Data Center is adaptable to a wide range of business needs.</h2>
          </div>
        <div className="max-w-7xl mx-8 md:mx-24 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {vdcUseCases.map((feature, idx) => (
            <div key={idx} className="flex flex-col border rounded-xl p-6 bg-white shadow-sm transition hover:shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                {feature.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </section>

                {/* Features Section */}
        <section className="w-full bg-[#E9ECF6] py-16 mb-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 items-start">
            {/* Left: Title, Button, Image */}
            <div className="flex-1 flex flex-col items-start md:items-start md:pr-8 mb-8 md:mb-0">
              <span className="text-red-500 font-semibold text-base mb-2">Features</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 max-w-lg">Key Features of Virtual Data Center (vDC)</h2>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded mb-8">Explore Services</button>
              <div className="w-full max-w-lg rounded-lg overflow-hidden shadow-lg">
                <Image src={featuresImage} alt="vDC Cloud" className="object-cover w-full h-full" />
              </div>
            </div>
            {/* Right: Timeline Features */}
            <div className="flex-1 flex flex-col relative">
              {vdcFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start mb-14 last:mb-0 relative">
                  {/* Timeline line */}
                  {idx !== vdcFeatures.length - 1 && (
                    <span className="absolute left-4 top-12 w-px h-[calc(100%-3rem)] bg-gray-400 z-0" />
                  )}
                  <div className="relative z-10">
                    <div className="w-10 h-10 flex items-center justify-center mb-2">{iconMap[feature.icon]}</div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-800 text-sm md:text-base max-w-md">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<WaveFeatureSection
  description="Highly customizable virtual machines with flexible resources (CPU, memory, disk)"
  buttonText="Learn More"
  imageSrc={waveFeatureImage} // Place your image in public/assets/
  imageAlt="Virtual Machine Illustration"
  reverse={true}
/>
        <DataCenter />
        <TestimonialSection />

        <FAQSection
        label="FAQs"
        heading="Frequently Asked Questions"
        subtext="Review our FAQs for more information about Layer3Cloud's Virtual Data Center."
        faqs={faqs}
        buttonText="Read More"
        buttonHref="/faqs"
      />
      </div>
    )
}