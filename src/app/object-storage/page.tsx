import herosection from '@/assets/object-storage/herosection.png'

export default function ObjectStorage() {
    return (
      <div className="min-h-screen">
              {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center justify-center min-h-screen text-white">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          {/* Badge */}
          <div className="flex items-center mb-8">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-white/20 shadow">
              <svg className="w-4 h-4 bg-white text-[#002366] rounded-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              #1 Leading Cloud Provider in Nigeria
            </span>
          </div>
          {/* Headline */}
          <h1 className="md:text-5xl font-bold text-center mb-6">
            Africa's Cloud.<br />
            Local Performance. Global Standards.
          </h1>
          {/* Subtext */}
          <p className="text-base sm:text-sm md:text-sm text-center text-white/80 max-w-4xl mb-10">
            Built for the demands of businesses across Africa, Layer3Cloud delivers secure, scalable cloud infrastructure with low latency, local support, and flexible pricing.
          </p>
          {/* CTA Button */}
          <button className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-colors">
            Talk to Sales
          </button>
        </div>
      </section>
      </div>  
    )
}  