import herosection from '@/assets/virtual-server/herosection.png'
import FAQSection from '@/components/FAQSection';
import HeroSection from '@/components/HeroSection';
import waveFeatureImage from '@/assets/virtual-server/wavefeature-image.png'
import WaveFeatureSection from '@/components/WaveFeatureSection';
import featuresImage from '@/assets/virtual-server/features-image.png'
import credeqiuty from '@/assets/virtual-server/crediquity.png'
import mobile from '@/assets/virtual-server/9mobile.png'
import nepc from '@/assets/virtual-server/nepc.png'
import Image from 'next/image';


const faqs = [
  {
    question: "What is a virtual server, and how is it different from a physical server?",
    answer: "A virtual server is a software-based server that runs on a physical server using virtualization technology. Unlike a physical server, which is dedicated hardware, a virtual server shares resources with other virtual servers on the same hardware, offering greater flexibility, scalability, and cost efficiency."
  },
  {
    question: "Can I scale my virtual server resources after deployment?",
    answer: "Yes, you can easily scale your virtual server's CPU, memory, and storage resources up or down after deployment to match your workload requirements, often with minimal or no downtime."
  },
  {
    question: "Is my data secure on Layer3Cloud virtual servers?",
    answer: "Yes, Layer3Cloud implements enterprise-grade security measures including data encryption, network isolation, firewalls, and regular security updates to ensure your data is protected at all times."
  },
  {
    question: "What workloads are best suited for virtual servers?",
    answer: "Virtual servers are ideal for a wide range of workloads, including web hosting, application servers, development and testing environments, databases, and business-critical applications that require flexibility and scalability."
  },
  {
    question: "How do I manage my virtual server once it's deployed?",
    answer: "You can manage your virtual server through the Layer3Cloud dashboard or API, allowing you to monitor performance, adjust resources, configure security settings, and perform administrative tasks easily from a centralized interface."
  }
];

const caseStudies = [
  {
    image: mobile,
    category: 'Telecommunication',
    readTime: '5 min read',
    title: '9Mobile',
    description: 'Emerging Markets Telecommunication Services (EMTS), trading as 9mobile, is a Nigerian private limited liability company.',
    link: '/case-studies/9mobile'
  },
  {
    image: credeqiuty,
    category: 'Financial',
    readTime: '8 min read',
    title: 'Credequity',
    description: 'Credequity is a maximum value company located in Lagos, Nigeria focused on health care, insurance, lifestyle commitments.',
    link: '/case-studies/credequity'
  },
  {
    image: nepc,
    category: 'Public Sector',
    readTime: '4 min read',
    title: 'NEPC',
    description: 'The Nigerian Export Promotion Council (NEPC) is Nigeria’s apex institution for the promotion, development, and diversification of exports.',
    link: '/case-studies/nepc'
  }
];


export default function VirtualServerPage() {
    return(
        <div className="min-h-screen">
        <HeroSection
          heroImage={herosection}
          heroImageAlt="Virtual Servers Hero Section"
          heading="Virtual Servers (vServers)"
          description="Highly customizable virtual machines with flexible resources (CPU, memory, disk)."
          breadcrumbText="Virtual Server"
        />
                <section className='py-30'>
        <div className="flex flex-col mx-10 mb-14">
            <span className="text-red-600 font-semibold text-base mb-2">Features</span>
            <h2 className="text-xl md:text-3xl font-bold max-w-8xl text-gray-900">Key Features of Virtual Servers</h2>
          </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 items-center">
        <div className="w-full max-w-xl mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg">
            <Image src={featuresImage} alt="virtual server features" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-10">
            <div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">On-demand scalability</h3>
                <p className="text-gray-700 text-base md:text-lg">Scale resources instantly as your workload grows—no downtime, no delays. Our vServers adapt in real time to keep your operations smooth, responsive and meet changing workload demands.</p>
            </div>
            <div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">Secure and high-performance</h3>
                <p className="text-gray-700 text-base md:text-lg">Experience the perfect balance of speed and protection. Our infrastructure is built with enterprise-grade security and consistently high performance to power your most sensitive workloads.</p>
            </div>
            <div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2">Suitable for business-critical workloads</h3>
                <p className="text-gray-700 text-base md:text-lg">From financial platforms to enterprise applications, our vServers are engineered for workloads where speed, stability, and uptime aren&apos;t optional—they&apos;re essential.</p>
            </div>
        </div>
        </div>
        </section>

        {/* Layer3 Difference Section */}
        <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-12 lg:mb-16 leading-tight text-center md:text-left">
      Experience the Layer3 Difference<br className="hidden md:block" />
      with Our Virtual Servers
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      {/* Card 1 */}
      <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border-[2.5px] border-solid" style={{ borderImage: 'linear-gradient(90deg, #EB1C29 50%, #2143AC 100%) 1' }}></div>
        <div className="relative z-10">
          <h3 className="font-semibold text-lg sm:text-xl mb-4 text-gray-900">Local Speed Advantage for Seamless Performance</h3>
          <p className="text-gray-700 text-sm sm:text-base">With infrastructure hosted in Nigeria, your applications experience significantly lower latency, faster data access, and improved user experience for local customers.</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border-[2.5px] border-solid" style={{ borderImage: 'linear-gradient(90deg, #EB1C29 50%, #2143AC 100%) 1' }}></div>
        <div className="relative z-10">
          <h3 className="font-semibold text-lg sm:text-xl mb-4 text-gray-900">Business Continuity You Can Rely On</h3>
          <p className="text-gray-700 text-sm sm:text-base">Our virtual servers are engineered with redundancy and failover capabilities to keep your critical services running—even during unexpected disruptions.</p>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 overflow-hidden">
        <div className="absolute inset-0 rounded-2xl border-[2.5px] border-solid" style={{ borderImage: 'linear-gradient(90deg, #EB1C29 50%, #2143AC 100%) 1' }}></div>
        <div className="relative z-10">
          <h3 className="font-semibold text-lg sm:text-xl mb-4 text-gray-900">Cost Efficiency Without Compromise</h3>
          <p className="text-gray-700 text-sm sm:text-base">Get enterprise-grade performance without the enterprise-level price tag. With local billing in Naira and transparent pricing, you get maximum value for every resource.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<WaveFeatureSection
  description="Get started with real-time monitoring, IaC support, and built-in security today."
  buttonText="Try Now"
  imageSrc={waveFeatureImage} // Place your image in public/assets/
  imageAlt="Virtual Machine Illustration"
/>
        <section className="py-24 bg-[#E9ECF6]">
  <div className="max-w-7xl mx-auto px-4">
    <p className="text-[#EB1C29] font-semibold text-sm mb-2">Trusted by the Best</p>
    <h2 className="text-4xl font-bold text-gray-800 mb-2">Case Studies</h2>
    <p className="text-gray-800 mb-12 max-w-2xl">Discover authentic success stories from businesses that trust Layer3Cloud services to deliver unmatched performance.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {caseStudies.map((study, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden"
        >
          <div className="flex-1 flex items-center justify-center h-56 bg-gray-50 rounded-t-2xl">
            <Image
              src={study.image}
              alt={study.title}
              className="object-contain h-full"
            />
          </div>
          <div className="flex items-center gap-4 px-6 mt-4">
            <span className="bg-[#E9ECF6] text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">{study.category}</span>
            <span className="text-gray-500 text-xs">{study.readTime}</span>
          </div>
          <div className="px-6 mt-4">
            <h3 className="font-bold text-lg text-gray-800">{study.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{study.description}</p>
          </div>
          <div className="px-6 mt-4 mb-6">
            <a href={study.link} className="text-[#EB1C29] text-sm font-semibold flex items-center gap-1 hover:underline">
              Read More <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

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