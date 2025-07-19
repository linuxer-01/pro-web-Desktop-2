import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesOverviewSection = (): JSX.Element => {
  // Download catalog function
  const downloadCatalog = () => {
    const link = document.createElement('a');
    link.href = '/figmaAssets/nutrazs-catalog.pdf';
    link.download = 'Nutrazs-Product-Catalog.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section id="services" className="flex flex-col items-center gap-16 md:gap-20 lg:gap-24 w-full max-w-[1303px] px-4 md:px-8 py-16 md:py-20 lg:py-24">
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 w-full max-w-[968px]">
        <h2 className="w-full font-['Poppins',Helvetica] font-semibold text-[#083d0e] text-3xl md:text-5xl lg:text-[86.2px] text-center tracking-[-2px] md:tracking-[-3.45px] leading-tight md:leading-[150.8px]">
          Services we provide
        </h2>
        <p className="w-full opacity-80 font-['Poppins',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-[27.1px] text-center tracking-[-0.5px] md:tracking-[-1.08px] leading-relaxed md:leading-[47.4px]">Empowering health brands with state-of-the-art manufacturing capabilities, certified quality processes, and flexible solutions tailored to your business needs.</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-4 w-full">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative w-full lg:w-auto lg:flex-1 h-[400px] md:h-[500px] lg:h-[733px] bg-cover bg-center border-0 rounded-lg lg:rounded-none"
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
          >
            <CardContent className="flex flex-col items-start justify-end gap-6 md:gap-8 lg:gap-[13px] absolute inset-0 p-8 md:p-10 lg:p-8">
              <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-[13px] w-full">
                <h3 className="font-['Poppins',Helvetica] font-extrabold text-white text-2xl md:text-3xl lg:text-[44.7px] tracking-[-1px] md:tracking-[-1.34px] leading-tight md:leading-[53.4px]">
                  {service.title}
                </h3>
                <p className="font-['Poppins',Helvetica] font-semibold text-white text-sm md:text-base lg:text-[20.2px] tracking-[-0.3px] md:tracking-[-0.61px] leading-relaxed md:leading-[35.9px]">
                  {service.description}
                </p>
                {service.hasButton && (
                  <Button 
                    onClick={downloadCatalog}
                    className="w-auto lg:w-[205px] h-[46px] bg-[#d9d9d9] rounded-[22.78px] text-black font-['Poppins',Helvetica] font-bold text-sm md:text-[16.6px] leading-[29.5px] mt-[22px] hover:bg-[#c0c0c0] cursor-pointer"
                  >
                    Download Catalog
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
