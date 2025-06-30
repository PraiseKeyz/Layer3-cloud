interface BannerSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function BannerSection({
  title = "Take Your Business to The Next Level",
  subtitle = "Lets Discuss how we can help you transform your business with our cloud servicess",
  primaryButtonText = "Talk to Sales",
  secondaryButtonText = "Request a Demo",
  onPrimaryClick,
  onSecondaryClick,
}: BannerSectionProps) {
  return (
    <section
      className="relative bg-[#10205B] overflow-hidden flex items-center justify-center px-4 py-16 md:py-24 mx-4 md:mx-8 lg:mx-16"
      style={{ borderRadius: "32px", margin: "5rem auto", maxWidth: "1200px" }}
    >
      {/* Decorative Curves - Top Left */}
      <svg
        className="absolute left-0 top-0 w-1/2 md:w-1/3 h-auto z-10"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "400px" }}
      >
        <path
          d="M400 0C300 80 100 120 0 80"
          stroke="white"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Decorative Curves - Bottom Right */}
      <svg
        className="absolute right-0 bottom-0 w-1/2 md:w-1/3 h-auto z-10"
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "400px" }}
      >
        <path
          d="M0 120C100 40 300 0 400 40"
          stroke="white"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "url(/optimized/img.webp) center/cover no-repeat",
          opacity: 0.18,
        }}
      ></div>
      {/* Subtle blue overlay for readability */}
      <div className="absolute inset-0 bg-[#10205B] opacity-90 z-0"></div>
      {/* Content - Constrained width */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPrimaryClick}
            className="bg-[#eb1c2a] hover:bg-[#d41925] text-white px-6 py-2 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="border-2 border-[#eb1c2a] text-[#eb1c2a] hover:bg-[#eb1c2a] hover:text-white px-6 py-2 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}
