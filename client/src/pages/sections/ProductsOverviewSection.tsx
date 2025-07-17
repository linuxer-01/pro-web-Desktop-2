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
    <section className="flex flex-col items-center gap-[26px] w-full">
      <h2 className="w-full font-['Poppins',Helvetica] font-semibold text-[#323232] text-[66.8px] text-center tracking-[-2.67px] leading-[153.0px]">
        Our Products
      </h2>

      <div className="w-full bg-[#323232] py-[59px] px-[118px]">
        <div className="flex flex-col gap-1.5 max-w-[1189px] mx-auto">
          {/* First product - Protein powders */}
          <div className="flex items-center justify-between gap-[178px] w-full">
            <Card className="w-[548.1px] h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white" />

            <div className="flex flex-col w-[458px] items-end gap-4">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-[58.6px] text-right tracking-[-2.34px] leading-[83.7px]">
                {products[0].title}
              </h3>
              <p className="w-[450px] font-['Poppins',Helvetica] font-light text-[#cccbcb] text-[22.9px] text-right tracking-[-0.91px] leading-[32.6px]">
                {products[0].description}
              </p>
            </div>
          </div>

          {/* Second product - Capsules */}
          <div className="flex items-center justify-between gap-[184px] w-full">
            <div className="flex flex-col w-[458px] items-start gap-[9px]">
              <h3 className="w-full font-['Poppins',Helvetica] font-semibold text-white text-[58.6px] tracking-[-2.34px] leading-[83.7px]">
                {products[1].title}
              </h3>
              <p className="w-[380.9px] font-['Poppins',Helvetica] font-light text-[#cccbcb] text-[22.9px] tracking-[-0.91px] leading-[32.6px]">
                {products[1].description}
              </p>
            </div>

            <Card className="w-[548.1px] h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
