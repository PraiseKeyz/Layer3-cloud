import {
  Database,
  Globe,
  CloudDownload,
  Phone,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";
import whyUsImage from "@/assets/why-choose-us-section-image.webp";

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const features: Feature[] = [
  { icon: Database, title: "Local Data Residency & Compliance" },
  { icon: Globe, title: "Multi-Availability Zones" },
  { icon: CloudDownload, title: "Ultra-Low Latency" },
  { icon: Phone, title: "24/7 Local Support" },
  { icon: LockKeyhole, title: "Enterprise-Grade Security" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#E9ECF6] py-20 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Built for Africa.
            <br />
            Designed for the Future.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Layer3Cloud is built on African soil with global capabilities. From
            startups to enterprises, we offer the agility, security, and local
            presence businesses need to thrive.
          </p>
          <ul className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <li key={index} className="flex items-center space-x-4">
                  <span
                    className="rounded-xl p-2"
                    style={{ backgroundColor: "#EFEFEF" }}
                  >
                    <IconComponent className="w-6 h-6" color="#ef4444" />
                  </span>
                  <span className="text-gray-800 text-lg">{feature.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
            <Image
              src={whyUsImage}
              alt="Layer3Cloud Data Center"
              width={564}
              height={504}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
