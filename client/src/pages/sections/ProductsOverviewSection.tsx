import React from "react";
import { Card } from "@/components/ui/card";
import proteinPowderImage from "@assets/protein powder _1753007900833.png";
import capsulesImage from "@assets/capsules _1753007900835.png";

export const ProductsOverviewSection = (): JSX.Element => {
  // Product data for easier maintenance and mapping
  const products = [
    {
      title: "Protein powders",
      description:
        "High-quality protein powder in delicious flavour made to match your goals.",
      imagePosition: "left",
      image: proteinPowderImage,
      alt: "NUTRAZS Protein Powder Collection - Various flavors including NRG PRO, PRO D, PRO WALK, and PRO PERG supplements",
    },
    {
      title: "Capsules",
      description:
        "Targeted wellness capsules Each one designed for specific need.",
      imagePosition: "right",
      image: capsulesImage,
      alt: "NUTRAZS Capsule Collection - Healthcare supplements including Grapicur, Enjom, ZECARTIP, Om369, Mavitz, BCOMPZ, CARDIFERT, LACOL-M, Unicorn Night, and Skelcare",
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
            <Card className="w-full max-w-md lg:w-[548.1px] h-[200px] md:h-[280px] lg:h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white order-2 lg:order-1 overflow-hidden">
              <img
                src={products[0].image}
                alt={products[0].alt}
                className="w-full h-full object-cover"
              />
            </Card>

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

            <Card className="w-full max-w-md lg:w-[548.1px] h-[200px] md:h-[280px] lg:h-[346.33px] rounded-[5.5px] border-[1.1px] border-solid border-black bg-white order-2 overflow-hidden">
              <img
                src={products[1].image}
                alt={products[1].alt}
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
