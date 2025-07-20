import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CustomerReviewsSection = (): JSX.Element => {
  // Doctor reviews data - only two cards as requested
  const reviews = [
    {
      title: "Doctor's Review",
      quote:
        '"NUTRAZS supplements meet the highest quality standards. I confidently recommend them to my patients for their nutritional needs."',
      author: "Dr. Rajesh Kumar",
      qualification: "MBBS, MD - Internal Medicine",
      hospital: "Apollo Hospitals, Chennai",
      locationLink: "#",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group.png",
    },
    {
      title: "Doctor's Review",
      quote:
        '"The consistent quality and purity of NUTRAZS products make them my preferred choice for patient recommendations."',
      author: "Dr. Priya Sharma",
      qualification: "MBBS, MD - Nutrition & Dietetics",
      hospital: "Fortis Healthcare, Bangalore",
      locationLink: "#",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-1.png",
    },
  ];

  return (
    <section
      id="reviews"
      className="w-full bg-[#323232] py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 flex flex-col gap-16 md:gap-20 lg:gap-24">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-[#f0efef] text-2xl md:text-4xl lg:text-6xl tracking-[-1px] md:tracking-[-2.40px] leading-tight md:leading-[100px]">
            Why Thousands Trust NUTRAZS?
          </h2>
          <h3 className="font-['Poppins',Helvetica] font-semibold text-[#e0e0e0] text-lg md:text-xl lg:text-[29.5px] tracking-[-0.5px] md:tracking-[-1.18px]">
            Voices of Our Valued Customers.
          </h3>
        </div>

        {/* Review Cards Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="w-full bg-[#e4e4e4] rounded-[14px] border-none h-full">
                  <CardContent className="p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 h-full">
                      <div className="flex-1">
                        <h4 className="font-['Poppins',Helvetica] font-medium text-[#262525] text-base md:text-lg lg:text-xl tracking-[-0.5px] text-center mb-4 md:mb-6">
                          {review.title}
                        </h4>
                        <p className="font-['Poppins',Helvetica] font-bold text-[#323232] text-sm md:text-base lg:text-lg tracking-[-0.4px] leading-5 md:leading-6">
                          {review.quote}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h5 className="font-['Poppins',Helvetica] font-semibold text-[#262525] text-sm md:text-base lg:text-lg tracking-[-0.3px]">
                              {review.author}
                            </h5>
                            <p className="font-['Poppins',Helvetica] font-normal text-[#666] text-xs md:text-sm tracking-[-0.2px] mt-1">
                              {review.qualification}
                            </p>
                            <p className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-xs md:text-sm tracking-[-0.2px] mt-1">
                              {review.hospital}
                            </p>
                          </div>
                          <img
                            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-gray-200"
                            alt="Doctor photo"
                            src={review.photo}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <a 
                            href={review.locationLink}
                            className="font-['Poppins',Helvetica] font-normal text-[#2b552c] text-xs md:text-sm tracking-[-0.2px] hover:underline cursor-pointer flex items-center gap-1"
                          >
                            📍 location of doctor
                          </a>
                          <img
                            className="w-16 h-3 md:w-20 md:h-4 lg:w-24 lg:h-4"
                            alt="Rating stars"
                            src={review.rating}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white hover:bg-white hover:text-black -left-6 md:-left-12" />
          <CarouselNext className="text-white border-white hover:bg-white hover:text-black -right-6 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};
