import React from "react";
import { Card } from "@/components/ui/card";

export const ProductsOverviewSection = (): JSX.Element => {
  // Product data for easier maintenance and mapping
  const products = [
    {
      title: "Protein powders",
      description:
        "High-quality protein powder in delicious flavour made to match your goals.",
      imagePosition: "left",
    },
    {
      title: "Capsules",
      description:
        "Targeted wellness capsules Each one designed for specific need.",
      imagePosition: "right",
    },
  ];

  return (
    <section id="products" className="flex flex-col items-center gap-16 md:gap-20 lg:gap-24 w-full px-4 md:px-0 py-16 md:py-20 lg:py-24">
      <h2 className="w-full font-['Poppins',Helvetica] font-semibold text-[#323232] text-3xl md:text-5xl lg:text-[66.8px] text-center tracking-[-1.5px] md:tracking-[-2.67px] leading-tight md:leading-[153.0px]">
        Our Products
      </h2>

      <div className="w-full bg-[#323232] py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-[118px]">
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 max-w-[1189px] mx-auto">
          {/* First product - Protein powders */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[178px] w-full">
            <Card className="w-full max-w-md lg:w-[548.1px] h-[200px] md:h-[280px] lg:h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white order-2 lg:order-1" />

            <div className="flex flex-col w-full lg:w-[458px] items-center lg:items-end gap-6 md:gap-8 order-1 lg:order-2">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-2xl md:text-3xl lg:text-[58.6px] text-center lg:text-right tracking-[-1px] lg:tracking-[-2.34px] leading-tight lg:leading-[83.7px]">
                {products[0].title}
              </h3>
              <p className="w-full lg:w-[450px] font-['Poppins',Helvetica] font-light text-[#cccbcb] text-base md:text-lg lg:text-[22.9px] text-center lg:text-right tracking-[-0.4px] lg:tracking-[-0.91px] leading-relaxed lg:leading-[32.6px]">
                {products[0].description}
              </p>
            </div>
          </div>

          {/* Second product - Capsules */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[184px] w-full">
            <div className="flex flex-col w-full lg:w-[458px] items-center lg:items-start gap-6 md:gap-8 order-1">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-2xl md:text-3xl lg:text-[58.6px] text-center lg:text-left tracking-[-1px] lg:tracking-[-2.34px] leading-tight lg:leading-[83.7px]">
                {products[1].title}
              </h3>
              <p className="w-full lg:w-[380.9px] font-['Poppins',Helvetica] font-light text-[#cccbcb] text-base md:text-lg lg:text-[22.9px] text-center lg:text-left tracking-[-0.4px] lg:tracking-[-0.91px] leading-relaxed lg:leading-[32.6px]">
                {products[1].description}
              </p>
            </div>

            <Card className="w-full max-w-md lg:w-[548.1px] h-[200px] md:h-[280px] lg:h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white order-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
