import React from "react";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavBarSection } from "./sections/NavBarSection";
import { PartnershipInquirySection } from "./sections/PartnershipInquirySection";
import { ProductsOverviewSection } from "./sections/ProductsOverviewSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";

export const Desktop = (): JSX.Element => {
  // Certification data for mapping
  const certifications = [
    {
      alt: "Gmp",
      src: "/figmaAssets/gmp.png",
      width: "w-[99px]",
      height: "h-[99px]",
    },
    {
      alt: "Iso",
      src: "/figmaAssets/iso.png",
      width: "w-[101px]",
      height: "h-[97px]",
    },
    {
      alt: "Fssai",
      src: "/figmaAssets/fssai.png",
      width: "w-[127px]",
      height: "h-[93px]",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-white overflow-hidden">
      <NavBarSection />
      <HeroSection />

      <section className="flex flex-col items-center justify-center gap-2.5 relative w-full px-4 md:px-8 lg:px-[79px] py-8 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-36 w-full max-w-7xl">
          <h2 className="text-center lg:text-left font-['Poppins',Helvetica] font-semibold text-[#3d3b3b] text-2xl md:text-3xl lg:text-[40px] tracking-[-1.60px] leading-tight lg:leading-[70px]">
            Certified &amp; <br />
            Quality Assured by
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-[164px] flex-1">
            {certifications.map((cert, index) => (
              <img
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
                alt={cert.alt}
                src={cert.src}
              />
            ))}
          </div>
        </div>
      </section>

      <ServicesOverviewSection />
      <CustomerReviewsSection />
      <ProductsOverviewSection />
      <PartnershipInquirySection />
      <FooterSection />

      <div className="absolute w-[76px] top-[304px] left-[107px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[12.7px] text-center tracking-[0] leading-[21.9px] whitespace-nowrap">
        Bulk Inquiry
      </div>
    </div>
  );
};
