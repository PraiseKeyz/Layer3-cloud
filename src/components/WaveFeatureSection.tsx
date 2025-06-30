import Image, { StaticImageData } from "next/image";
import caseStudiesBg from "@/assets/object-storage/case-studies-bg.svg";
import mobileBg from "@/assets/case-studies-bg-mobile.svg";

interface WaveFeatureSectionProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
}

export default function WaveFeatureSection({
  imageSrc,
  imageAlt,
  description,
  buttonText,
  reverse = false,
}: WaveFeatureSectionProps) {
  return (
    <section className="relative w-full overflow-hidden min-h-[800px] lg:h-[1200px]">
      {/* Background SVG */}
      {/* Desktop Background */}
      <div
        className="absolute inset-0 w-full max-w-[1440px] mx-auto h-full hidden md:block"
        style={{ aspectRatio: "1440 / 1200" }}
      >
        <Image
          src={caseStudiesBg}
          alt="Background Pattern"
          className="w-full h-full object-cover absolute inset-0"
          style={{ objectPosition: "center" }}
          fill
          priority
        />
      </div>
      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full block md:hidden"
        style={{ aspectRatio: "375 / 800" }}
      >
        <Image
          src={mobileBg}
          alt="Mobile Background Pattern"
          className="w-full h-full object-cover absolute inset-0"
          style={{ objectPosition: "center" }}
          fill
          priority
        />
      </div>
      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-between gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 min-h-[800px] lg:min-h-[1200px] lg:items-center ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        <div className="flex-1 flex flex-col items-center lg:items-start lg:text-left max-w-lg">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
            {description}
          </h2>
          <button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl self-start">
            {buttonText}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="w-full max-w-md lg:max-w-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-contain"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
