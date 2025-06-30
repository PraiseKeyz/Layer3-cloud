import Image from "next/image";
import credeqiuty from "@/assets/credequity.svg";
import mobile from "@/assets/9mobile.svg";
import nepc from "@/assets/nepc.svg";

interface CaseStudy {
  logo: string;
  title: string;
  description: string;
  alt: string;
}

const caseStudies: CaseStudy[] = [
  {
    logo: credeqiuty,
    title: "Credequity",
    description:
      "Credequity is a medium scale company located in Lagos, Nigeria focused on health care, insurance, lifestyle commitments like rent, car or equipment purchase and school fees.",
    alt: "Credequity",
  },
  {
    logo: mobile,
    title: "9Mobile",
    description:
      "Emerging Markets Telecommunication Services (EMTS), trading as 9mobile, is a Nigerian private limited liability company. EMTS acquired a Unified Access Service License from the Nigerian Communications Commission in 2007.",
    alt: "9mobile",
  },
  {
    logo: nepc,
    title: "NEPC",
    description:
      "The Nigerian Export Promotion Council (NEPC) is the Federal Government of Nigeria's apex institution for the promotion, development, and diversification of exports.",
    alt: "NEPC",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-white py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-center text-gray-900 mb-24">
          Real impact through cloud and connectivity.
        </h2>

        {/* Timeline with alternating content */}
        <div className="relative">
          {/* Middle Timeline Line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 z-0"
            style={{ transform: "translateX(-50%)" }}
          >
            {/* Top Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "calc(0% + 120px)",
                transform: "translate(-50%, -50%)",
              }}
              className="w-6 h-6 bg-blue-600 border-4 border-white rounded-full z-10 shadow-lg"
            ></div>
            {/* Middle Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="w-6 h-6 bg-blue-600 border-4 border-white rounded-full z-10 shadow-lg"
            ></div>
            {/* Bottom Dot */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "calc(0% + 120px)",
                transform: "translate(-50%, 50%)",
              }}
              className="w-6 h-6 bg-blue-600 border-4 border-white rounded-full z-10 shadow-lg"
            ></div>
          </div>

          {/* Alternating Content */}
          <div className="flex flex-col gap-32">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Image Side */}
                <div
                  className={`flex-1 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} z-10`}
                >
                  <div className="bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 w-[320px] h-[200px] md:w-[380px] md:h-[240px] relative overflow-hidden border border-gray-100">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.alt}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div
                  className={`flex-1 flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} z-10`}
                >
                  <div className="w-[320px] md:w-[400px] flex flex-col justify-center space-y-6">
                    <div className="flex items-center mb-6">
                      <span className="w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-md block md:hidden mr-4"></span>
                      <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                        {caseStudy.title}
                      </span>
                    </div>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <div className="pt-4">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
