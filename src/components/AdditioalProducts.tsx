import infrastructure from "@/assets/platform-as-a-service/infracture.png";
import baas from "@/assets/platform-as-a-service/baas.png";
import disaster from "@/assets/platform-as-a-service/disaster.png";
import Image from "next/image";

const additionalProducts = [
    {
      svg: infrastructure,
      title: "Object Storage",
      description:
        "S3-compatible object storage solution for scalable, secure, and resilient data storage.",
      link: "/object-storage",
    },
    {
      svg: baas,
      title: "Backup-as-a-Service (BaaS)",
      description:
        "Automated backup for VMs, databases, SaaS, and cloud-native apps",
      link: "/backup-as-a-service",
    },
    {
      svg: disaster,
      title: "Disaster Recovery-as-a-Service",
      description:
        "Enterprise-grade DR with near-zero RTO/RPO, replication, and instant failover.",
      link: "/disaster-recovery-as-a-service",
    },
  ];

export default function Additionalproducts() {
    return(
        <div>
                    <section className="py-20 flex flex-col items-center">
          <h3 className="text-[#EB1C29] font-semibold text-center mb-2">
            Products
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Additional Products to Start With.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {additionalProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-md"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={product.svg}
                    alt="product image"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  {product.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                <a
                  href={product.link}
                  className="text-[#EB1C29] font-semibold flex items-center gap-2 hover:underline"
                >
                  Learn More
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
        </div>
    )
}