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

      <section className="flex flex-col items-center justify-center gap-2.5 relative w-full">
        <div className="flex items-center justify-center gap-36 px-[79px] py-0 w-full">
          <h2 className="w-fit mt-[-1.50px] [font-family:'Poppins',Helvetica] font-semibold text-[#3d3b3b] text-[40px] tracking-[-1.60px] leading-[70px]">
            Certified &amp; <br />
            Quality Assured by
          </h2>

          <div className="flex items-center gap-[164px] flex-1">
            {certifications.map((cert, index) => (
              <img
                key={index}
                className={`${cert.width} ${cert.height} object-cover`}
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
