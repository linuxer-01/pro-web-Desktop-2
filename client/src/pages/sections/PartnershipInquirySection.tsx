import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const PartnershipInquirySection = (): JSX.Element => {
  // Process steps data
  const processSteps = [
    {
      number: "1",
      title: "Submit Partnership Inquiry",
      description:
        "Fill out our partnership form with your business details and requirements.",
    },
    {
      number: "2",
      title: "Business Verification",
      description:
        "Our team reviews your application and verifies business credentials.",
    },
    {
      number: "3",
      title: "Product Samples & Pricing",
      description:
        "Receive product samples and detailed wholesale pricing information.",
    },
    {
      number: "4",
      title: "Partnership Agreement",
      description:
        "Sign partnership agreement and place your first bulk order.",
    },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: "/figmaAssets/icon.png",
      content: "7200281134",
      alt: "Phone icon",
    },
    {
      icon: "/figmaAssets/icon-1.png",
      content: "nutrazs.off1@gmail.com",
      alt: "Email icon",
    },
    {
      icon: "/figmaAssets/icon-2.png",
      content: (
        <div className="flex flex-col">
          <span className="opacity-80 font-semibold text-[#003800] text-[13.8px] tracking-[0.41px]">
            Click Below to chat with us
          </span>
          <div className="mt-2 ml-10">
            <Button className="h-[31px] w-[102px] rounded-[15px] bg-[#207b31] border-[1.35px] border-black text-white font-semibold text-[14.3px] tracking-[0.43px]">
              Chat
            </Button>
          </div>
        </div>
      ),
      alt: "Chat icon",
    },
    {
      icon: "/figmaAssets/icon-3.png",
      content: (
        <span className="opacity-80 text-[21.6px] tracking-[0.65px]">
          <span className="font-bold tracking-[0.14px]">
            52/5, Sri Thirupathi Nagar
          </span>
          <span className="tracking-[0.14px]">
            {" "}
            Kottalampakkam, Pudupet Panruti Taluk, Cuddalore Tamil Nadu– 607106
          </span>
        </span>
      ),
      alt: "Location icon",
    },
  ];

  return (
    <div className="flex items-center gap-[89px]">
      {/* Left Column - Process and Contact */}
      <div className="flex flex-col w-[475px] items-start gap-[85px]">
        {/* Partnership Process Section */}
        <div className="flex flex-col items-start gap-[61px] w-full">
          <div className="w-[319px]">
            <h2 className="font-medium [font-family:'Poppins',Helvetica] text-black text-[34px] tracking-[-1.36px]">
              Partnership Process
            </h2>
            <p className="mt-4 font-light [font-family:'Poppins',Helvetica] text-black text-[15.4px] tracking-[-0.62px]">
              Sub heading for the the Partnership&nbsp;&nbsp;Process.
            </p>
          </div>

          <div className="relative w-full">
            {/* Timeline Line */}
            <div className="absolute w-[3px] h-[312px] top-[26px] left-[14px] bg-[url('/figmaAssets/line-1.svg')]" />

            {/* Timeline Steps */}
            <div className="flex flex-col gap-[74px]">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-[22px]">
                  <div className="w-[30px] h-[30px] bg-[#186627] rounded-[15px] flex items-center justify-center">
                    <span className="opacity-70 [font-family:'Poppins',Helvetica] font-semibold text-white text-[12.7px] tracking-[-0.51px]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium [font-family:'Poppins',Helvetica] text-black text-[19.1px] tracking-[-0.77px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-light [font-family:'Poppins',Helvetica] text-black text-[12.7px] tracking-[-0.51px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col gap-[33px] w-full">
          {contactInfo.map((item, index) => (
            <div key={index} className="relative w-full">
              <div className="flex items-center gap-[38px] py-3.5">
                <img
                  className={`${index === 0 ? "w-9 h-9" : index === 1 ? "w-16 h-16" : index === 2 ? "w-[51px] h-[51px]" : "w-14 h-14"} object-cover`}
                  alt={item.alt}
                  src={item.icon}
                />
                <div
                  className={`${index === 0 ? "opacity-70 [font-family:'Poppins',Helvetica] font-normal text-black text-[24.2px] tracking-[1.21px]" : "[font-family:'Poppins',Helvetica]"}`}
                >
                  {item.content}
                </div>
              </div>
              <Separator className="mt-4 w-[420px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - Form */}
      <Card className="w-[673px] rounded-[15.31px] border-[1.53px] border-solid border-black">
        <CardContent className="p-[44.79px]">
          <div className="flex flex-col gap-[57.85px]">
            {/* Form Header */}
            <div className="w-[609.34px]">
              <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-[47.2px] tracking-[-1.89px]">
                Partnership Inquiry Form
              </h1>
              <p className="mt-6 [font-family:'Poppins',Helvetica] font-light text-black text-[18.2px] tracking-[-0.73px]">
                Fill out the form below to start your partnership journey with
                NUTRAZS
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-[42.03px] w-[590.52px]">
              {/* Name and Email Row */}
              <div className="flex items-center gap-[8.25px] w-full">
                <div className="flex flex-col gap-[9.56px] w-[255.67px]">
                  <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[21.7px] tracking-[-0.87px]">
                    Full Name
                  </label>
                  <Input
                    className="h-[57px] rounded-[8.36px] border-[1.39px] border-solid border-black"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col gap-[9.56px] w-[352px]">
                  <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[21.7px] tracking-[-0.87px]">
                    Email Address
                  </label>
                  <Input
                    className="h-[57px] rounded-[8.36px] border-[1.39px] border-solid border-black"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="flex items-center gap-[8.25px] w-full">
                <div className="flex flex-col gap-[10.05px] w-[323.3px]">
                  <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[22.8px] tracking-[-0.91px]">
                    Company Name
                  </label>
                  <Input
                    className="h-[60px] rounded-[8.78px] border-[1.46px] border-solid border-black"
                    placeholder="Company name"
                  />
                </div>
                <div className="flex flex-col gap-[10.05px] w-[258.97px]">
                  <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[22.8px] tracking-[-0.91px]">
                    Phone Number
                  </label>
                  <Input
                    className="h-[61px] rounded-[8.78px] border-[1.46px] border-solid border-black"
                    placeholder="Phone"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="flex flex-col gap-[10.51px] w-[450.03px]">
                <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[23.8px] tracking-[-0.95px]">
                  Business Type
                </label>
                <Select>
                  <SelectTrigger className="h-[63px] rounded-[9.18px] border-[1.53px] border-solid border-black">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                </Select>
              </div>

              {/* Message */}
              <div className="w-[590.52px]">
                <label className="[font-family:'Poppins',Helvetica] font-medium text-black text-[23.8px] tracking-[-0.95px]">
                  Message
                </label>
                <Textarea
                  className="mt-3 h-[104px] rounded-[9.18px] border-[1.53px] border-solid border-black"
                  placeholder="Tell us about your business, expected order volumes, and partnership requirements."
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-[590px] h-[70px] bg-[#186526] rounded-[9.18px] border-[1.53px] border-solid border-black [font-family:'Poppins',Helvetica] font-medium text-[#afdda4] text-[23.8px] tracking-[-0.95px]">
              Submit Partnership Inquiry
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
