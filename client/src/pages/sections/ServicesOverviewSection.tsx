import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesOverviewSection = (): JSX.Element => {
  const services = [
    {
      title: "Contract Manufacturing",
      description:
        "From small batches to large scale production, we offer flexible, GMP-certified manufacturing that meets your volume, quality, and compliance needs — with fast turnaround times.",
      backgroundImage: "/figmaAssets/manufacturebackground.png",
      className: "w-[496px] h-[733px]",
      contentClassName: "top-[321px] left-7 w-[452px]",
      titleClassName:
        "font-extrabold text-[#f1f1f2] text-[58.8px] tracking-[-1.76px] leading-[76.0px]",
    },
    {
      title: "Private Label Manufacturing",
      description:
        "Quickly bring products to market under your own brand. Choose from a wide range of pre-formulated, high demand supplements, fully customizable to reflect your branding",
      backgroundImage: "/figmaAssets/labelbackground.png",
      className: "w-[378px] h-[733px]",
      contentClassName:
        "top-[38px] left-[22px] w-[341px] items-center justify-center gap-[35px]",
      titleClassName:
        "font-bold text-[#f4fff1] text-[44.7px] tracking-[-1.34px] leading-[53.4px]",
      hasButton: true,
    },
    {
      title: "Custom Formulation",
      description:
        "We work closely with you to develop science-backed, innovative supplement formulas based on your market and target audience — including vitamins, botanicals, nutraceuticals, and specialty blends",
      backgroundImage: "/figmaAssets/formulabackground.png",
      className: "w-[397px] h-[737px]",
      contentClassName: "top-[282px] left-6 w-[352px]",
      titleClassName:
        "font-extrabold text-[#f1f1f2] text-[56.5px] tracking-[-1.69px] leading-[73.0px]",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[29px] w-full max-w-[1303px]">
      <div className="flex flex-col items-center gap-[13px] w-full max-w-[968px]">
        <h2 className="w-full font-['Poppins',Helvetica] font-semibold text-[#083d0e] text-[86.2px] text-center tracking-[-3.45px] leading-[150.8px]">
          Services we provide
        </h2>
        <p className="w-full opacity-80 font-['Poppins',Helvetica] font-semibold text-black text-[27.1px] text-center tracking-[-1.08px] leading-[47.4px]">
          We provide the services that you consider as a services and we spent s
          lot of time to design this website.So please consider our efforts and
          hit the CTA button
        </p>
      </div>

      <div className="flex items-center gap-4 w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`relative ${service.className} bg-[url(${service.backgroundImage})] bg-[100%_100%] border-0 rounded-none`}
          >
            <CardContent
              className={`flex flex-col items-start gap-[13px] absolute ${service.contentClassName} p-0`}
            >
              <h3
                className={`w-full font-['Poppins',Helvetica] ${service.titleClassName}`}
              >
                {service.title}
              </h3>
              <p className="font-['Poppins',Helvetica] font-semibold text-white text-[20.2px] tracking-[-0.61px] leading-[35.9px]">
                {service.description}
              </p>
              {service.hasButton && (
                <Button className="w-[205px] h-[46px] bg-[#d9d9d9] rounded-[22.78px] text-black font-['Poppins',Helvetica] font-bold text-[16.6px] leading-[29.5px] mt-[22px] hover:bg-[#c0c0c0]">
                  Download Catalog
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
