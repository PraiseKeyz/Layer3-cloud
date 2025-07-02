import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroSectionProps {
  heroImage?: StaticImageData | string;
  heroImageAlt?: string;
  heading: string;
  description: string;
  breadcrumbText: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  textColor?: "white" | "default";
}

export default function HeroSection({
  heroImage,
  heroImageAlt,
  heading,
  description,
  breadcrumbText,
  buttonText = "Talk to Sales",
  buttonOnClick,
  textColor = "default",
}: HeroSectionProps) {
  // Determine text color classes
  const headingClass = textColor === "white" ? "text-white" : "text-gray-700";
  const descClass = textColor === "white" ? "text-white/90" : "text-gray-600";
  const breadcrumbClass =
    textColor === "white" ? "text-white/80" : "text-gray-600";
  const breadcrumbActiveClass =
    textColor === "white"
      ? "text-white font-medium"
      : "text-gray-700 font-medium";

  return (
    <section className="overflow-hidden py-34 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content - Text */}
        <div className="flex-1 lg:pr-8 w-full">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <nav
              className={`flex items-center space-x-2 text-sm ${breadcrumbClass}`}
            >
              <Link href="/" className="hover:text-red-600 transition-colors">
                Home
              </Link>
              <span
                className={
                  textColor === "white" ? "text-white/40" : "text-gray-400"
                }
              >
                /
              </span>
              <span className={breadcrumbActiveClass}>{breadcrumbText}</span>
            </nav>
          </div>
          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight ${headingClass}`}
          >
            {heading}
          </h1>
          {/* Description */}
          <p className={`text-sm mb-8 leading-relaxed max-w-2xl ${descClass}`}>
            {description}
          </p>
          {/* CTA Button */}
          <button
            className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-3 py-2 rounded-lg text-sm shadow transition-colors"
            onClick={buttonOnClick}
          >
            {buttonText}
          </button>
        </div>
        {/* Right Content - Image */}
        {heroImage && (
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg lg:max-w-xl">
              <Image
                src={heroImage}
                alt={heroImageAlt || "Hero image"}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
