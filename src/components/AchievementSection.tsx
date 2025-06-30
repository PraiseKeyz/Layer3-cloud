import { Server, Cloud, BadgeCheck } from "lucide-react";
import Image from "next/image";
import award1 from "@/assets/award/best-cloud-service-provider-2024.svg";
import award2 from "@/assets/award/pecbms-2015-red.svg";
import award3 from "@/assets/award/pecbms-2015-black.svg";
import award4 from "@/assets/award/bcsp-2017.svg";
import award5 from "@/assets/award/bsi-27001.svg";
import award6 from "@/assets/award/bcsp-2018.svg";
import award7 from "@/assets/award/pecbms-red-2013.svg";
import award8 from "@/assets/award/bsi-22301.svg";
import award9 from "@/assets/award/bcsp-2025.svg";

interface Award {
  src: string;
  alt: string;
}

const awards: Award[] = [
  { src: award1, alt: "Best Cloud Service Provider 2024" },
  { src: award2, alt: "PECB MS 2015 Red" },
  { src: award3, alt: "PECB MS 2015 Black" },
  { src: award4, alt: "BCSP 2017" },
  { src: award5, alt: "BSI 27001" },
  { src: award6, alt: "BCSP 2018" },
  { src: award7, alt: "PECB MS 2013 Red" },
  { src: award8, alt: "BSI 22301" },
  { src: award9, alt: "BCSP 2025" },
];

const certifications = [
  {
    icon: Server,
    title: "Availability Zones",
    subtitle: "(Abuja & Lagos)",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: Cloud,
    title: "ISO Cloud",
    subtitle: "Certified",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: BadgeCheck,
    title: "PCI DSS",
    subtitle: "Certified",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

export default function AchievementSection() {
  return (
    <section className="bg-white py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            You Can Count On Us
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            At Layer3, We&apos;ve achieved these certifications to demonstrate
            our commitment to superior professionalism, upholding industry
            standard, and global best practices.
          </p>

          <div className="grid grid-cols-3 gap-x-4 mb-10">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index}>
                  <div className="inline-block mb-3 border-l-2 border-red-500 pl-3">
                    <div className={`p-2 rounded-lg ${cert.bgColor}`}>
                      <IconComponent size={20} className={cert.iconColor} />
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-xs text-gray-500">{cert.subtitle}</p>
                </div>
              );
            })}
          </div>

          <button className="bg-[#eb1c2a] hover:bg-[#d41925] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Talk to Sales
          </button>
        </div>

        {/* Right Content - Awards Grid */}
        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-3 gap-10 py-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-2 md:p-4 shadow-lg flex items-center justify-center h-24 w-24 md:h-32 md:w-32 transition-transform duration-300 hover:scale-105 ${index % 3 === 1 ? "transform -translate-y-8" : ""}`}
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
