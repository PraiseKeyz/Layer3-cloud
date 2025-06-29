import Image from "next/image"
import mapImage from '@/assets/object-storage/map.png'


export default function DataCenter() {
    return(
        <div>
                  {/* Data Centers Section */}
      <section className="bg-[#E9ECF6]/30 py-24 px-4">
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
        </div>
    )
}