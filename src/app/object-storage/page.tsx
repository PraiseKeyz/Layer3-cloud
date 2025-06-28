import Link from 'next/link';
import Image from 'next/image';
import herosection from '@/assets/object-storage/herosection.png';
import caseStudiesBg from '@/assets/case-studies-bg.svg';
import bgImage1 from '@/assets/object-storage/image.png'
import FAQSection from '@/components/FAQSection';
import mapImage from '@/assets/object-storage/map.png'
import bgImage from '@/assets/object-storage/bg-image.png'

const objectStorageFeatures = [
  {
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_359_94030)">
    <path d="M36.6659 28.3338C35.1159 28.3338 33.8243 29.4004 33.4493 30.8337H30.8327V23.484C34.3076 22.759 36.6659 20.1174 36.6659 16.6673C36.6659 13.7006 34.7742 11.0674 32.0577 10.0675C32.2993 9.24247 32.3909 8.3842 32.3326 7.43427C32.0826 3.36755 28.4577 0.0342586 24.2578 0.000912949C20.8746 -0.0491901 17.8997 1.96763 16.6497 4.90086C15.4247 3.9841 13.8664 3.54249 12.2915 3.69263C10.0165 3.90903 8.02495 5.41746 7.09991 7.64256C6.65829 8.70065 6.7166 9.87578 6.81655 10.5923C4.68328 11.8422 3.33329 14.159 3.33329 16.6671C3.33329 20.0504 5.73324 22.7336 9.16649 23.4755V30.8335H6.54987C6.17486 29.4002 4.88327 28.3336 3.33329 28.3336C1.49167 28.3336 0 29.8253 0 31.6669C0 33.5004 1.49167 35.0002 3.33329 35.0002C4.88327 35.0002 6.17486 33.9337 6.54987 32.5003H10.8331V23.684C10.9331 23.684 11.0331 23.6924 11.1331 23.6924H14.9997V33.4504C13.5664 33.8254 12.4998 35.117 12.4998 36.6669C12.4998 38.5004 13.9914 40.0002 15.8331 40.0002C17.6747 40.0002 19.1664 38.5004 19.1664 36.6669C19.1664 35.117 18.0997 33.8254 16.6665 33.4504V23.6924H23.333V33.4504C21.8997 33.8254 20.833 35.117 20.833 36.6669C20.833 38.5004 22.3247 40.0002 24.1663 40.0002C26.008 40.0002 27.4996 38.5004 27.4996 36.6669C27.4996 35.117 26.433 33.8254 24.9997 33.4504V23.6924H28.8663C28.9663 23.6924 29.0663 23.684 29.1663 23.684V32.5003H33.4495C33.8245 33.9337 35.1161 35.0002 36.6661 35.0002C38.5077 35.0002 39.9994 33.5004 39.9994 31.6669C39.9992 29.8254 38.5075 28.3338 36.6659 28.3338Z" fill="#2143A6"/>
    </g>
    <defs>
    <clipPath id="clip0_359_94030">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    ,
    title: 'S3-compatible API access',
    description: 'Easily integrate with existing tools and workflows using a fully S3-compatible API—no need to re-architect or change your storage strategy.'
  },
  {
    icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_359_94038)">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.357 24.4941L11.983 31.4932L8.33301 29.1377V31.7783L20.333 39L32.333 31.7783V29.1377L28.707 31.4932L20.357 24.4941ZM40.333 8.84668L28.567 1L20.333 8.01855L32.197 15.502L40.333 8.84668ZM20.333 22.9844L28.567 30.0039L40.333 22.1572L32.197 15.502L20.333 22.9844ZM0.333008 22.1572L12.099 30.0039L20.333 22.9844L8.46899 15.502L0.333008 22.1572ZM20.333 8.01855L8.46899 15.502L0.333008 8.84668L12.099 1L20.333 8.01855Z" fill="#2143A6"/>
    </g>
    <defs>
    <clipPath id="clip0_359_94038">
    <rect width="40" height="40" fill="white" transform="translate(0.333008)"/>
    </clipPath>
    </defs>
    </svg>
    ,
    title: 'Scalable capacity up to petabytes',
    description: 'Effortlessly scale from gigabytes to petabytes without performance drops—built to grow with your data, no matter the size.'
  },
  {
    icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_359_94047)">
    <path d="M33.167 27.8553H24.2295C27.0764 23.7397 31.5389 16.6416 31.5389 12.5366C31.5389 5.70469 27.2739 1.28906 20.667 1.28906C14.0601 1.28906 9.79512 5.70469 9.79512 12.5372C9.79512 16.6466 14.2532 23.7422 17.1039 27.8559H8.16699L0.666992 38.7141H40.667L33.167 27.8553ZM20.667 9.00844C22.6114 9.00844 24.1876 10.5847 24.1876 12.5291C24.1876 14.4734 22.6114 16.0497 20.667 16.0497C18.7226 16.0497 17.1464 14.4734 17.1464 12.5291C17.1464 10.5847 18.7226 9.00844 20.667 9.00844ZM5.43199 36.2141L9.47887 30.3553H9.87574L9.86824 30.3666L18.1326 36.2141H5.43199ZM14.1807 30.3559H18.8951C19.0964 30.6259 19.2489 30.8278 19.3376 30.9434L20.667 32.6997L22.0051 30.9434C22.0926 30.8272 22.2439 30.6259 22.4432 30.3559H27.2301L20.8132 35.0491L14.1807 30.3559ZM31.4651 30.3553H31.8551L35.902 36.2141H23.4551L31.4651 30.3553Z" fill="#2143A6"/>
    </g>
    <defs>
    <clipPath id="clip0_359_94047">
    <rect width="40" height="40" fill="white" transform="translate(0.666992)"/>
    </clipPath>
    </defs>
    </svg>
    ,
    title: 'High Availability and Durability',
    description: 'Your data is always accessible and protected—engineered for 99.999% durability and minimal downtime, even during failures.'
  }
];
const faqs = [
  {
    question: "Is Layer3 Object Storage compatible with S3 APIs?",
    answer: "Yes, Layer3 Object Storage is fully S3-compatible, allowing you to use existing tools and SDKs."
  },
  {
    question: "What are typical use cases for Object Storage?",
    answer: "Backup, DR, media storage, analytics, AI datasets, and multi-cloud integrations."
  },
  {
    question: "Can I integrate Object Storage into my existing backup or media workflows?",
    answer: "Yes, you can seamlessly integrate with your existing workflows using our S3-compatible API."
  },
  {
    question: "Is there a minimum storage requirement or contract?",
    answer: "No, there is no minimum storage requirement or long-term contract. Pay only for what you use."
  },
  {
    question: "How does billing work for Object Storage—do I pay for used or allocated space?",
    answer: "You are billed for the actual storage used, not for allocated space."
  }
];

const objectStorageUseCases = [
  {
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z" fill="#E9ECF6"/>
    <path d="M18.6998 29.1984C15.9936 29.1984 13.7998 27.0046 13.7998 24.2984C13.7998 21.7667 15.7199 19.6834 18.1832 19.4253C18.0635 18.9698 17.9998 18.4916 17.9998 17.9984C17.9998 14.9056 20.507 12.3984 23.5998 12.3984C26.2302 12.3984 28.437 14.212 29.0381 16.6569C29.3198 16.6183 29.6075 16.5984 29.8998 16.5984C33.3792 16.5984 36.1998 19.419 36.1998 22.8984C36.1998 26.3778 33.3792 29.1984 29.8998 29.1984H26.3998V24.1783L28.2099 25.9884C28.7566 26.5351 29.643 26.5351 30.1898 25.9884C30.7365 25.4417 30.7365 24.5552 30.1898 24.0085L25.9898 19.8085C25.443 19.2618 24.5566 19.2618 24.0099 19.8085L19.8099 24.0085C19.2631 24.5552 19.2631 25.4417 19.8099 25.9884C20.3566 26.5351 21.243 26.5351 21.7898 25.9884L23.5998 24.1783L23.5998 29.1984H18.6998Z" fill="#2143A6"/>
    <path d="M23.5998 29.1984H26.3998L26.3998 36.1984C26.3998 36.9716 25.773 37.5984 24.9998 37.5984C24.2266 37.5984 23.5998 36.9716 23.5998 36.1984L23.5998 29.1984Z" fill="#2143A6"/>
    </svg>
    , // placeholder for SVG/icon
    title: 'Backup & DR',
    description: 'Automatically store snapshots, backups, and recovery data with built-in redundancy and encryption—seamlessly integrate with tools like Veeam or Velero to automate workflows and ensure your data is protected.'
  },
  {
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z" fill="#E9ECF6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5998 15.2031C15.0534 15.2031 13.7998 16.4567 13.7998 18.0031V32.0031C13.7998 33.5495 15.0534 34.8031 16.5998 34.8031H33.3998C34.9462 34.8031 36.1998 33.5495 36.1998 32.0031V18.0031C36.1998 16.4567 34.9462 15.2031 33.3998 15.2031H16.5998ZM20.7998 18.0031L29.1998 18.0031V23.6031H20.7998V18.0031ZM31.9998 29.2031V32.0031H33.3998V29.2031H31.9998ZM29.1998 26.4031H20.7998V32.0031H29.1998V26.4031ZM31.9998 26.4031H33.3998V23.6031H31.9998V26.4031ZM33.3998 20.8031V18.0031H31.9998V20.8031H33.3998ZM17.9998 18.0031V20.8031H16.5998V18.0031H17.9998ZM17.9998 23.6031H16.5998V26.4031H17.9998V23.6031ZM16.5998 29.2031H17.9998V32.0031H16.5998V29.2031Z" fill="#2143A6"/>
    </svg>
    , // placeholder for SVG/icon
    title: 'Media storage for apps',
    description: 'Store and serve high-quality video, audio, and image files with ease—perfect for web apps, mobile platforms, and content-heavy services that demand speed, scalability, and reliability.'
  },
  {
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z" fill="#E9ECF6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0002 15.2031C16.4538 15.2031 15.2002 16.4567 15.2002 18.0031V32.0031C15.2002 33.5495 16.4538 34.8031 18.0002 34.8031H32.0002C33.5466 34.8031 34.8002 33.5495 34.8002 32.0031V18.0031C34.8002 16.4567 33.5466 15.2031 32.0002 15.2031H18.0002ZM30.6002 20.8031C30.6002 20.0299 29.9734 19.4031 29.2002 19.4031C28.427 19.4031 27.8002 20.0299 27.8002 20.8031V29.2031C27.8002 29.9763 28.427 30.6031 29.2002 30.6031C29.9734 30.6031 30.6002 29.9763 30.6002 29.2031V20.8031ZM26.4002 23.6031C26.4002 22.8299 25.7734 22.2031 25.0002 22.2031C24.227 22.2031 23.6002 22.8299 23.6002 23.6031V29.2031C23.6002 29.9763 24.227 30.6031 25.0002 30.6031C25.7734 30.6031 26.4002 29.9763 26.4002 29.2031V23.6031ZM22.2002 27.8031C22.2002 27.0299 21.5734 26.4031 20.8002 26.4031C20.027 26.4031 19.4002 27.0299 19.4002 27.8031V29.2031C19.4002 29.9763 20.027 30.6031 20.8002 30.6031C21.5734 30.6031 22.2002 29.9763 22.2002 29.2031V27.8031Z" fill="#2143A6"/>
    </svg>
    , // placeholder for SVG/icon
    title: 'Analytics and AI datasets',
    description: 'Store and access large datasets for machine learning, AI training, and analytics workflows—built for performance, scalability, and easy integration with your data pipelines and cloud-native tools.'
  },
  {
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12C0 5.37258 5.37258 0 12 0H38C44.6274 0 50 5.37258 50 12V38C50 44.6274 44.6274 50 38 50H12C5.37258 50 0 44.6274 0 38V12Z" fill="#E9ECF6"/>
    <path d="M18.6998 33.4016C15.9936 33.4016 13.7998 31.2078 13.7998 28.5016C13.7998 25.9698 15.7199 23.8866 18.1832 23.6285C18.0635 23.1729 17.9998 22.6947 17.9998 22.2016C17.9998 19.1088 20.507 16.6016 23.5998 16.6016C26.2302 16.6016 28.437 18.4151 29.0381 20.86C29.3198 20.8215 29.6075 20.8016 29.8998 20.8016C33.3792 20.8016 36.1998 23.6222 36.1998 27.1016C36.1998 30.581 33.3792 33.4016 29.8998 33.4016H18.6998Z" fill="#2143A6"/>
    </svg>
    , // placeholder for SVG/icon
    title: 'Hybrid/multi-cloud integrations',
    description: 'Seamless data movement across clouds—easily integrate with public and private cloud environments to enable flexibility, avoid vendor lock-in, and support your evolving infrastructure strategy.'
  }
];

export default function ObjectStoragePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="overflow-hidden py-34 md:py-20 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content - Text */}
          <div className="flex-1 lg:pr-8 w-full">
            {/* Breadcrumb Navigation */}
            <div className="mb-4">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-700 font-medium">Object Storage</span>
              </nav>
            </div>
            {/* Main Heading */}
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-gray-700 mb-6 leading-tight">
              Object Storage
            </h1>
            {/* Description */}
            <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
              S3-compatible object storage solution for scalable, secure, and resilient data storage.
            </p>
            {/* CTA Button */}
            <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-3 py-2 rounded-lg text-sm shadow transition-colors">
              Talk to Sales
            </button>
          </div>
          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg lg:max-w-xl">
              <Image 
                src={herosection} 
                alt="Object Storage Hero Section"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-[#E9ECF6]/30 py-30'>
        <div className="max-w-7xl mx-8 md:mx-24 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {objectStorageFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-12 h-12 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-red-600 font-semibold text-base mb-2">Uses Cases</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Object Storage Use Cases</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectStorageUseCases.map((useCase, idx) => (
              <div key={idx} className="flex flex-row items-start bg-white border border-gray-200 rounded-2xl p-8 gap-6 shadow-sm">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Blue Background Section */}
      <section className="relative w-full overflow-hidden py-20">
        {/* Wavy SVG Background */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={caseStudiesBg} 
            alt="Background Pattern" 
            className="w-full h-auto block"
            style={{ 
              display: 'block',
              transform: 'scaleX(1.2)',
              transformOrigin: 'center'
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8">
          {/* Left: 3D Cloud Image Placeholder */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-md lg:max-w-lg">
              <Image 
                src={bgImage1} 
                alt="Cloud Storage 3D" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
          {/* Right: Text and Button */}
          <div className="flex-1 flex flex-col items-center lg:items-start lg:text-left max-w-lg">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
              Ready to Simplify Your Data Storage Strategy with Scalable, Secure Object Storage?
            </h2>
            <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl self-start">
              Contact Sales
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="bg-[#E9ECF6]/30 mt-24 py-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <span className="text-red-600 font-semibold text-base mb-2">Data Centers</span>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
            Based in Nigeria. Serving Africa.<br />
            Trusted by the world!
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Layer3 Object Storage is hosted in enterprise-grade data centers across Lagos and Abuja—delivering low-latency performance and data sovereignty you can trust.
          </p>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl">
              <Image src={mapImage} alt="World Map" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */} 
      <FAQSection
        label="FAQs"
        heading="Frequently Asked Questions"
        subtext="Review our FAQs for more information about Layer3Cloud's object storage."
        faqs={faqs}
        buttonText="Read More"
        buttonHref="/faqs"
      />

    </div>
  );
}

