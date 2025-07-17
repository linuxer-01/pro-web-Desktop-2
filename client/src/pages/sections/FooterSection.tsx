import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Company description data
  const companyDescription =
    "Your trusted partner for high-quality supplement manufacturing. We help brands create exceptional products with our state-of-the-art facilities and expert team.";

  // Quick links data
  const quickLinks = [
    "Quick Links",
    "Services",
    "About Us",
    "Get Quote",
    "Privacy Policy",
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: "/figmaAssets/instaicon.png",
      text: "7200281134",
      iconWidth: "w-[43px]",
      iconHeight: "h-10",
      textStyles: "font-normal text-[21.5px] tracking-[1.72px] leading-[41px]",
    },
    {
      icon: "/figmaAssets/emailicon.png",
      text: "nutrazs.off1@gmail.com",
      iconWidth: "w-14",
      iconHeight: "h-[55px]",
      textStyles: "font-normal text-[21.5px] tracking-[-0.86px] leading-normal",
    },
    {
      icon: "/figmaAssets/locationicon.png",
      text: (
        <>
          <span className="font-bold tracking-[-0.15px]">
            52/5, Sri Thirupathi Nagar{" "}
          </span>
          <span className="tracking-[-0.15px]">
            Kottalampakkam, Pudupet Panruti Taluk, Cuddalore Tamil Nadu – 607106
          </span>
        </>
      ),
      iconWidth: "w-[54px]",
      iconHeight: "h-[53px]",
      textStyles:
        "font-normal text-[19.2px] tracking-[-0.77px] leading-[33.0px]",
    },
  ];

  return (
    <footer className="w-full bg-[#323232] py-9">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-[38px]">
          {/* Main footer content */}
          <div className="flex flex-wrap justify-between w-full gap-8">
            {/* Company info section */}
            <div className="flex flex-col w-full md:w-[530px] items-start gap-[27px]">
              <div className="flex items-start gap-7">
                <img
                  className="w-[83px] h-[84.26px] object-cover"
                  alt="Logo placeholder"
                  src="/figmaAssets/logoplaceholder.png"
                />
                <h2 className="font-['Poppins',Helvetica] font-normal text-white text-[55px] tracking-[-2.20px] leading-[100px] whitespace-nowrap">
                  NutraZS
                </h2>
              </div>
              <p className="font-['Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.80px] leading-[50px]">
                {companyDescription}
              </p>
            </div>

            {/* Quick links section */}
            <div className="flex flex-col w-full md:w-[156px] items-start gap-[9px]">
              <h3 className="font-['Poppins',Helvetica] font-medium text-white text-3xl tracking-[-1.20px] leading-[50px]">
                Quick Links
              </h3>
              {quickLinks.map((link, index) => (
                <a
                  key={`quick-link-${index}`}
                  href="#"
                  className="font-['Poppins',Helvetica] font-light text-white text-[22px] tracking-[-0.88px] leading-[50px] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Contact info section */}
            <div className="flex flex-col w-full md:w-[333px] items-center gap-[43px]">
              <h3 className="font-['Poppins',Helvetica] font-medium text-white text-3xl text-center tracking-[-1.20px] leading-[50px] w-full">
                Contact Info
              </h3>

              {contactInfo.map((item, index) => (
                <div
                  key={`contact-item-${index}`}
                  className="flex items-start gap-8 w-full"
                >
                  <img
                    className={`${item.iconWidth} ${item.iconHeight} object-cover`}
                    alt={`Contact icon ${index + 1}`}
                    src={item.icon}
                  />
                  <div
                    className={`w-full font-['Poppins',Helvetica] text-white ${item.textStyles}`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <Separator className="bg-white/20 w-full max-w-[1073px]" />

          {/* Copyright */}
          <div className="font-['Poppins',Helvetica] font-light text-white text-[25px] tracking-[-1.00px] leading-[100px] text-center">
            © 2024 NutraZS. All rights reserved. | Designed for excellence in
            supplement manufacturing.
          </div>
        </div>
      </div>
    </footer>
  );
};
