import React, { Suspense } from "react";
import { NavBarSection } from "./sections/NavBarSection";
import { HeroSection } from "./sections/HeroSection";
import { LazySection } from "@/components/LazySection";
import { OptimizedImage } from "@/components/OptimizedImage";
import { 
  ReviewsSkeleton, 
  ProductsSkeleton, 
  PartnershipSkeleton, 
  FooterSkeleton 
} from "@/components/ui/optimized-skeleton";

// Lazy load heavy components
const CustomerReviewsSection = React.lazy(() => import("./sections/CustomerReviewsSection").then(m => ({ default: m.CustomerReviewsSection })));
const FooterSection = React.lazy(() => import("./sections/FooterSection").then(m => ({ default: m.FooterSection })));
const PartnershipInquirySection = React.lazy(() => import("./sections/PartnershipInquirySection").then(m => ({ default: m.PartnershipInquirySection })));
const ProductsOverviewSection = React.lazy(() => import("./sections/ProductsOverviewSection").then(m => ({ default: m.ProductsOverviewSection })));
const ServicesOverviewSection = React.lazy(() => import("./sections/ServicesOverviewSection").then(m => ({ default: m.ServicesOverviewSection })));

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

      <section className="flex flex-col items-center justify-center gap-2.5 relative w-full px-4 md:px-8 lg:px-[79px] py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-48 w-full max-w-7xl">
          <h2 className="text-center lg:text-left font-['Poppins',Helvetica] font-semibold text-[#3d3b3b] text-2xl md:text-3xl lg:text-[40px] tracking-[-1.60px] leading-tight lg:leading-[70px]">
            Certified &amp; <br />
            Quality Assured by
          </h2>

          <div className="flex flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-[120px] flex-1">
            {certifications.map((cert, index) => (
              <OptimizedImage
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-cover"
                alt={cert.alt}
                src={cert.src}
                priority={false}
              />
            ))}
          </div>
        </div>
      </section>

      <LazySection 
        fallback={<div className="w-full h-64 bg-gray-50 animate-pulse" />}
        rootMargin="200px"
      >
        <ServicesOverviewSection />
      </LazySection>
      
      <LazySection 
        fallback={<ReviewsSkeleton />}
        rootMargin="200px"
      >
        <CustomerReviewsSection />
      </LazySection>
      
      <LazySection 
        fallback={<ProductsSkeleton />}
        rootMargin="200px"
      >
        <ProductsOverviewSection />
      </LazySection>
      
      <LazySection 
        fallback={<PartnershipSkeleton />}
        rootMargin="200px"
      >
        <PartnershipInquirySection />
      </LazySection>
      
      <LazySection 
        fallback={<FooterSkeleton />}
        rootMargin="200px"
      >
        <FooterSection />
      </LazySection>


    </div>
  );
};
