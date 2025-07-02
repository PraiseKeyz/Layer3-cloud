import Image, { StaticImageData } from "next/image";
import caseStudyBg from "@/assets/object-storage/case-studies-bg.svg";
import case2 from "@/assets/mobile-svg.svg";

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
    <section className=" flex justify-center items-center overflow-x-hidden">
      <div className="w-full relative max-w-full overflow-x-hidden">
        <Image
          src={caseStudyBg}
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
        {/* Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center w-full max-w-full ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <div className="mt-16 mx-8 max-w-lg">
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
          <div className="">
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
      </div>
    </section>
  );
}
