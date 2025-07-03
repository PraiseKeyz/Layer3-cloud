import HeroSection from "@/components/HeroSection"
import FAQSection from "@/components/FAQSection";
import bgImage from '@/assets/contact-support/image.png'
import Image from "next/image";
import mobileBgImage from '@/assets/contact-support/mobile-image.png'


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

// Support cards data
const supportCards = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8C0.5 3.85786 3.85786 0.5 8 0.5Z" stroke="#CDCDCD"/>
<path d="M20 14.2528V27.2528M20 14.2528C18.8321 13.4769 17.2465 13 15.5 13C13.7535 13 12.1679 13.4769 11 14.2528V27.2528C12.1679 26.4769 13.7535 26 15.5 26C17.2465 26 18.8321 26.4769 20 27.2528M20 14.2528C21.1679 13.4769 22.7535 13 24.5 13C26.2465 13 27.8321 13.4769 29 14.2528V27.2528C27.8321 26.4769 26.2465 26 24.5 26C22.7535 26 21.1679 26.4769 20 27.2528" stroke="#2143A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "Knowledge Base & Tutorials",
    description: "Explore a growing library of easy-to-follow guides, walkthroughs, and FAQs. Designed to help you solve problems fast and learn on the go. No guesswork—just clear, practical answers.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8C0.5 3.85786 3.85786 0.5 8 0.5Z" stroke="#CDCDCD"/>
<path d="M29 20H28C28 24.4183 24.4183 28 20 28V29V30C25.5228 30 30 25.5228 30 20H29ZM20 29V28C15.5817 28 12 24.4183 12 20H11H10C10 25.5228 14.4772 30 20 30V29ZM11 20H12C12 15.5817 15.5817 12 20 12V11V10C14.4772 10 10 14.4772 10 20H11ZM20 11V12C24.4183 12 28 15.5817 28 20H29H30C30 14.4772 25.5228 10 20 10V11ZM24 20H23C23 21.6569 21.6569 23 20 23V24V25C22.7614 25 25 22.7614 25 20H24ZM20 24V23C18.3431 23 17 21.6569 17 20H16H15C15 22.7614 17.2386 25 20 25V24ZM16 20H17C17 18.3431 18.3431 17 20 17V16V15C17.2386 15 15 17.2386 15 20H16ZM20 16V17C21.6569 17 23 18.3431 23 20H24H25C25 17.2386 22.7614 15 20 15V16ZM26.364 13.636L25.6569 12.9289L22.1213 16.4645L22.8284 17.1716L23.5355 17.8787L27.0711 14.3431L26.364 13.636ZM22.8284 22.8284L22.1213 23.5355L25.6569 27.0711L26.364 26.364L27.0711 25.6569L23.5355 22.1213L22.8284 22.8284ZM17.1716 17.1716L17.8787 16.4645L14.3431 12.9289L13.636 13.636L12.9289 14.3431L16.4645 17.8787L17.1716 17.1716ZM17.1716 22.8284L16.4645 22.1213L12.9289 25.6569L13.636 26.364L14.3431 27.0711L17.8787 23.5355L17.1716 22.8284Z" fill="#2143A6"/>
</svg>
    ),
    title: "Success Managers for Onboarding and Scaling",
    description: "Work with dedicated Success Managers who understand your business goals and help you onboard smoothly, optimize performance, and scale with confidence.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8C0.5 3.85786 3.85786 0.5 8 0.5Z" stroke="#CDCDCD"/>
<path d="M18 10.3984C20.7614 10.3984 23 13.0847 23 16.3984V18.7988C24.1045 18.7988 24.9999 19.8728 25 21.1982V27.1982C25 28.5237 24.1046 29.5986 23 29.5986H13C11.8954 29.5986 11 28.5237 11 27.1982V21.1982C11.0001 19.8728 11.8955 18.7988 13 18.7988V16.3984C13 13.0847 15.2386 10.3984 18 10.3984ZM18 12.7988C16.3431 12.7988 15 14.4102 15 16.3984V18.7988H21V16.3984C21 14.4102 19.6569 12.7988 18 12.7988Z" fill="#2143A6"/>
<path d="M18 10.3984C20.7614 10.3984 23 13.0847 23 16.3984V18.7988C24.1045 18.7988 24.9999 19.8728 25 21.1982V27.1982C25 28.5237 24.1046 29.5986 23 29.5986H13C11.8954 29.5986 11 28.5237 11 27.1982V21.1982C11.0001 19.8728 11.8955 18.7988 13 18.7988V16.3984C13 13.0847 15.2386 10.3984 18 10.3984ZM18 12.7988C16.3431 12.7988 15 14.4102 15 16.3984V18.7988H21V16.3984C21 14.4102 19.6569 12.7988 18 12.7988Z" stroke="#2143A6"/>
</svg>
    ),
    title: "Professional Services for DR planning, security, and compliance",
    description: "We offer hands-on support for disaster recovery, enterprise security, and compliance alignment. Our experts design and implement what your business specifically needs.",
  },
];

// Support plan features data
const features = [
  {
    label: 'Availability',
    value: '24/7 Priority Access',
    info: true,
  },
  {
    label: 'Response Time SLA',
    value: '30 mins',
    info: true,
  },
  {
    label: 'Support Channels',
    value: 'Dedicated Support Line',
    info: true,
  },
  {
    label: 'Success Manager',
    value: 'Dedicated Success Manager',
    info: true,
  },
  {
    label: 'Professional Services Access',
    value: 'Full access to DR, security, compliance planning',
    info: true,
  },
  {
    label: 'Custom Onboarding',
    value: 'Tailored onboarding with dedicated technical resources',
    info: true,
  },
  {
    label: 'Technical Support',
    value: 'Full Access',
    info: true,
  },
];

export default function Support() {
  return(
    <div>
            <div className="bg-[#12255B] py-16">
        <HeroSection
          heading="We're With You. Always"
          description="Support isn't an afterthought; it's at the core of delivering peace of mind. From setup to scale, our team is here every step of the way—ready to solve, guide, and empower you 24/7."
          breadcrumbText="Contact Us"
          textColor="white"
          buttonText="Submit a Ticket"
        />
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 py-24 lg:px-0 mx-8 md:mx-16">
  {/* Left: Text Content */}
  <div className="w-full lg:flex-1">
    <h2 className="text-2xl md:text-4xl max-w-6xl font-bold text-[#282828] mb-4 leading-tight">
      24/7 Local Technical Support<br/>(chat, ticket, call)
    </h2>
    <p className="text-sm text-[#434343]">
      Our dedicated Nigeria-based support team is available round the clock. Whether it&apos;s a quick fix or complex issue, reach us via chat, ticket, or call. Get expert help in real time, with zero delays. We ensure issues are resolved with speed, clarity, and care.
    </p>
  </div>
  {/* Right: Placeholder Rectangle */}
  <div className="w-full h-[200px] lg:h-[300px] bg-gray-200 rounded-2xl lg:flex-1"></div>
</section>

      <section className="py-24 px-4 lg:px-0 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-lg font-semibold text-[#EB1C29] mb-2">Connect with Us</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#282828] mb-4">Comprehensive Support</h2>
          <p className="text-lg text-[#434343] max-w-2xl mx-auto">Enjoy other value add-ons services from our support team ensuring a seamless cloud experience.</p>
        </div>
        {/* Cards Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 bg-gradient-to-br from-[#f3f6fd] via-white to-[#fdf3f6] shadow-sm border border-[#f3f6fd] flex flex-col h-full"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-[#282828] mb-2">{card.title}</h3>
              <p className="text-[#434343] text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-[#F8F9FC] py-24 px-2">
        <div className="text-center mb-12">
          <div className="text-lg font-semibold text-[#EB1C29] mb-2">Support Plan</div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#282828] mb-4">All-in-One Enterprise Support</h2>
          <p className="text-base md:text-sm text-[#434343] max-w-2xl mx-auto">Our all-in-one support plan designed to meet the demands of critical workloads.</p>
        </div>
        {/* Table Data */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden">
            {/* Table header (desktop only) */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block bg-[#F8F9FC] px-6 py-5 border-b border-r border-gray-200">
                <span className="text-lg font-bold text-[#2563EB]">Features</span>
              </div>
              <div className="bg-white px-6 py-5 border-b">
                <span className="text-lg font-bold text-[#2563EB]">Enterprise</span>
              </div>
            </div>
            {/* Table rows */}
            {features.map((feature) => (
              <div key={feature.label}>
                {/* Desktop: 2 columns, Feature bg left, white right */}
                <div className="hidden md:grid grid-cols-2 border-b last:border-b-0 border-gray-200">
                  {/* Feature name */}
                  <div className="bg-[#F8F9FC] px-6 py-5 flex items-center text-[#282828] font-medium text-base">
                    {feature.label}
                    {feature.info && (
                      <svg className="inline ml-1 mb-1" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#A0AEC0" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4" strokeLinecap="round"/><circle cx="12" cy="8" r="1.2" fill="#A0AEC0"/></svg>
                    )}
                  </div>
                  {/* Feature value */}
                  <div className="bg-white px-6 py-5 flex items-center text-[#282828]">
                    <svg className="inline mr-2 text-green-500" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span>{feature.value}</span>
                  </div>
                </div>
                {/* Mobile: stacked, feature bg then white, show feature label and value */}
                <div className="md:hidden border-b last:border-b-0 border-gray-200">
                  {/* Feature label (with info icon) */}
                  <div className="bg-[#F5F8FF] px-6 py-5 flex items-center text-[#282828] font-medium text-base">
                    {feature.label}
                    {feature.info && (
                      <svg className="inline ml-1 mb-1" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#A0AEC0" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4" strokeLinecap="round"/><circle cx="12" cy="8" r="1.2" fill="#A0AEC0"/></svg>
                    )}
                  </div>
                  {/* Enterprise value */}
                  <div className="bg-white px-6 py-5 flex items-center text-[#282828]">
                    <svg className="inline mr-2 text-green-500" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span>{feature.value}</span>
                  </div>
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

      {/* Call to Action Section */}
      <section className="relative flex flex-col items-center justify-center py-24 md:py-0 lg:py-24 mt-[80%] md:mt-[20%]">
        {/* Radial gradient background */}
        <div className="absolute hidden md:flex inset-0 w-full flex items-end justify-center z-10">
          <Image src={bgImage} alt="" className="w-full object-cover" />
</div>
<div className="absolute flex md:hidden inset-0 w-full flex items-end justify-center z-10">
          <Image src={mobileBgImage} alt="" className="w-full object-cover" />
</div>
        <div className="relative z-50 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#232323] mb-6 leading-tight">Ready to Experience<br className="hidden md:block"/>Seamless Cloud Support?</h2>
          <p className="text-lg md:text-lg text-[#434343] mb-8 max-w-2xl">Let&apos;s help you build, scale, and stay secure—with the support you deserve, every step of the way.</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-md bg-[#EB1C29] text-white font-semibold text-lg shadow-md hover:bg-[#c71a24] transition">Talk to Sales</a>
        </div>
      </section>
    </div>
  )
}
