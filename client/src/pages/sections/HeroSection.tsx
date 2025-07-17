import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 md:gap-20 py-16 md:py-24 lg:py-32 w-full max-w-7xl mx-auto">
      {/* Headline and Description */}
      <div className="flex flex-col items-center justify-center gap-16 md:gap-20 px-4 md:px-20 w-full">
        <h1 className="font-['Lora',Helvetica] font-bold text-[#235d25] text-4xl md:text-[65.1px] text-center tracking-tight leading-tight md:leading-[92px]">
          Clean. Effective. Market-Ready{" "}
          <span className="text-[#225d24]">
            Nutritional Supplements for Modern Health Brands
          </span>
        </h1>

        <p className="opacity-85 font-['Poppins',Helvetica] text-lg md:text-[22px] text-center tracking-tight leading-relaxed md:leading-10">
          At NUTRAZS, we manufacture high-quality supplements, offer custom
          formulations, and provide private/white labeling—perfect for
          healthcare&nbsp;&nbsp;professionals, clinics, and retail brands
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full">
          <Button className="w-[281px] h-[50px] bg-[#2b552c] hover:bg-[#1e3e1f] rounded-[26.85px] font-['Poppins',Helvetica] font-medium text-[17.9px]">
            Get Wholesale Quote
          </Button>

          <Button
            variant="outline"
            className="w-[237px] h-[50px] rounded-[26.85px] border-[#0b3c0f] font-['Poppins',Helvetica] font-medium text-[#085308] text-[17.9px]"
          >
            Download catalog
          </Button>
        </div>

        <Badge
          variant="outline"
          className="bg-transparent opacity-80 font-['Poppins',Helvetica] font-semibold text-black text-sm"
        >
          No Minimum Order • Doctor Exclusive Offers • Custom Formulation
          Support
        </Badge>
      </div>

      {/* Social Proof */}
      <div className="flex items-center justify-center gap-2.5 w-full mt-8 md:mt-12">
        <div className="flex items-center gap-4">
          <div className="relative h-[39px] w-[136px]">
            <Avatar className="absolute w-[39px] h-[39px] top-0 left-0 border-2 border-white">
              <img
                className="object-cover"
                alt="Person"
                src="/figmaAssets/person1.png"
              />
            </Avatar>

            <Avatar className="absolute w-[39px] h-[39px] top-0 left-[26px] border-2 border-white">
              <img
                className="object-cover"
                alt="Person"
                src="/figmaAssets/person2.png"
              />
            </Avatar>

            <Avatar className="absolute w-[39px] h-[39px] top-0 left-[57px] border-2 border-white">
              <img
                className="object-cover"
                alt="Person"
                src="/figmaAssets/person3.png"
              />
            </Avatar>

            <Avatar className="absolute w-[39px] h-[39px] top-0 left-20 border-2 border-white">
              <img
                className="object-cover"
                alt="Person"
                src="/figmaAssets/person4.png"
              />
            </Avatar>

            <Badge className="absolute w-[34px] h-[18px] top-[11px] left-[102px] bg-[#dbd9d9] text-black rounded-[14.79px] p-0 flex items-center justify-center">
              <span className="font-['Poppins',Helvetica] font-medium text-[7.6px]">
                1000+
              </span>
            </Badge>
          </div>

          <div className="flex flex-col">
            <span className="font-['Poppins',Helvetica] font-normal text-black text-[12.7px]">
              Trusted By People
            </span>
            <img
              className="w-[129px] h-6"
              alt="Five star rating"
              src="/figmaAssets/fivestar.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
