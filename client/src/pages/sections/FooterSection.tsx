import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  // Company description data
  const companyDescription =
    "Your trusted partner for high-quality supplement manufacturing. We help brands create exceptional products with our state-of-the-art facilities and expert team.";

  // Quick links data with navigation
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
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
    <footer id="contact" className="w-full bg-[#323232] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 md:gap-20 lg:gap-24">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-12 lg:gap-16">
            {/* Company info section */}
            <div className="flex flex-col w-full lg:w-[530px] items-start gap-8 lg:gap-[35px]">
              <div className="flex items-start gap-6 lg:gap-8">
                <img
                  className="w-16 h-16 lg:w-[83px] lg:h-[84.26px] object-cover"
                  alt="Logo placeholder"
                  src="/figmaAssets/logoplaceholder.png"
                />
                <h2 className="font-['Poppins',Helvetica] font-normal text-white text-2xl md:text-4xl lg:text-[55px] tracking-[-1px] lg:tracking-[-2.20px] leading-tight lg:leading-[100px]">
                  NutraZS
                </h2>
              </div>
              <p className="font-['Poppins',Helvetica] font-normal text-white text-base md:text-lg lg:text-xl tracking-[-0.4px] lg:tracking-[-0.80px] leading-relaxed lg:leading-[50px]">
                {companyDescription}
              </p>
            </div>

            {/* Quick links section */}
            <div className="flex flex-col w-full lg:w-[156px] items-start gap-4 lg:gap-[12px]">
              <h3 className="font-['Poppins',Helvetica] font-medium text-white text-xl md:text-2xl lg:text-3xl tracking-[-0.8px] lg:tracking-[-1.20px] leading-tight lg:leading-[50px]">
                Quick Links
              </h3>
              {quickLinks.map((link, index) => (
                <button
                  key={`quick-link-${index}`}
                  onClick={() => scrollToSection(link.href)}
                  className="font-['Poppins',Helvetica] font-light text-white text-base md:text-lg lg:text-[22px] tracking-[-0.4px] lg:tracking-[-0.88px] leading-relaxed lg:leading-[50px] hover:underline cursor-pointer text-left transition-colors hover:text-green-400"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Contact info section */}
            <div className="flex flex-col w-full lg:w-[333px] items-center gap-8 lg:gap-[50px]">
              <h3 className="font-['Poppins',Helvetica] font-medium text-white text-xl md:text-2xl lg:text-3xl text-center tracking-[-0.8px] lg:tracking-[-1.20px] leading-tight lg:leading-[50px] w-full">
                Contact Info
              </h3>

              {contactInfo.map((item, index) => (
                <div
                  key={`contact-item-${index}`}
                  className="flex items-start gap-6 lg:gap-10 w-full"
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
          <div className="font-['Poppins',Helvetica] font-light text-white text-sm md:text-lg lg:text-[25px] tracking-[-0.5px] lg:tracking-[-1.00px] leading-relaxed lg:leading-[100px] text-center">
            © 2024 NutraZS. All rights reserved. | Designed for excellence in
            supplement manufacturing.
          </div>
        </div>
      </div>
    </footer>
  );
};
