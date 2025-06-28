'use client'

import React from "react";
import Image from "next/image";
import slideImage1 from "@/assets/slide-image1.png";
import slideImage2 from "@/assets/slide-image2.png";
import slideImage3 from "@/assets/slide-image3.png";
import slideImage4 from "@/assets/slide-image4.png";

const images = [slideImage1, slideImage2, slideImage3, slideImage4];

const ImageSlideshow = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <div className="relative">
        <div className="flex w-max animate-marquee">
          {images.concat(images).map((img, idx) => (
            <div className="mx-4 flex-shrink-0" key={idx}>
              <Image
                src={img}
                alt={`Slide ${idx % images.length + 1}`}
                className=""
                width={220}
                height={140}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageSlideshow; 