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
  // All reviews data - doctors, third party, pharmacy, and distributor
  const reviews = [
    // Doctor Reviews
    {
      title: "Doctor's Review",
      quote:
        '"NUTRAZS has proven highly effective in my practice with excellent patient satisfaction and outstanding packaging quality. I have complete trust in the brand and would definitely recommend it to my peers."',
      author: "Dr.Ayyanar",
      qualification: "b.sc,DNYS,D.ACU, Abundent cases - specialization",
      hospital: "Arokiyam Hospitals, Panruti",
      locationLink: "",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group.png",
      type: "doctor",
    },
    {
      title: "Doctor's Review",
      quote:
        '"The consistent quality and purity of NUTRAZS products make them my preferred choice for patient recommendations."',
      author: "Dr.Sennilavan",
      qualification: "MD - phy & specialization in DIAB",
      hospital: "R.S Hospital",
      locationLink: "#",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-1.png",
      type: "doctor",
    },
    // Third Party Reviews
    {
      title: "Third Party Review",
      quote:
        '"NUTRAZS has consistently delivered quality products. Their GMP certification and testing standards ensure reliability for our customers."',
      author: "Quality Assurance Lab",
      company: "Certified Testing Services",
      location: "Mumbai",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group.png",
      type: "thirdparty",
    },
    {
      title: "Third Party Review",
      quote:
        '"Outstanding manufacturing standards. NUTRAZS maintains excellent batch consistency and documentation for all their supplement lines."',
      author: "ISO Certification Board",
      company: "International Standards Authority",
      location: "New Delhi",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-2.png",
      type: "thirdparty",
    },
    // Pharmacy Reviews
    {
      title: "Pharmacy Review",
      quote:
        '"Our customers trust NUTRAZS products. The brand recognition and quality assurance make them our top-selling supplements."',
      author: "MedPlus Pharmacy Chain",
      branch: "Regional Head - South India",
      stores: "450+ Stores",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-1.png",
      type: "pharmacy",
    },
    {
      title: "Pharmacy Review",
      quote:
        '"NUTRAZS products have excellent shelf life and packaging. Customer satisfaction rates are consistently high across all locations."',
      author: "Apollo Pharmacy",
      branch: "Purchase Manager",
      stores: "5000+ Outlets Nationwide",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group.png",
      type: "pharmacy",
    },
    // Distributor Review
    {
      title: "Distributor Review",
      quote:
        '"Partnering with NUTRAZS has been excellent. Their supply chain efficiency, product range, and support make distribution seamless across regions."',
      author: "HealthCare Distributors",
      role: "National Distribution Head",
      coverage: "Pan India Coverage",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-2.png",
      type: "distributor",
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
                        {/* Doctor Review Layout */}
                        {review.type === "doctor" && (
                          <>
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
                          </>
                        )}

                        {/* Third Party Review Layout */}
                        {review.type === "thirdparty" && (
                          <>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h5 className="font-['Poppins',Helvetica] font-semibold text-[#262525] text-sm md:text-base lg:text-lg tracking-[-0.3px]">
                                  {review.author}
                                </h5>
                                <p className="font-['Poppins',Helvetica] font-normal text-[#666] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  {review.company}
                                </p>
                                <p className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  📍 {review.location}
                                </p>
                              </div>
                              <img
                                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-gray-200"
                                alt="Organization photo"
                                src={review.photo}
                              />
                            </div>
                            <div className="flex justify-end">
                              <img
                                className="w-16 h-3 md:w-20 md:h-4 lg:w-24 lg:h-4"
                                alt="Rating stars"
                                src={review.rating}
                              />
                            </div>
                          </>
                        )}

                        {/* Pharmacy Review Layout */}
                        {review.type === "pharmacy" && (
                          <>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h5 className="font-['Poppins',Helvetica] font-semibold text-[#262525] text-sm md:text-base lg:text-lg tracking-[-0.3px]">
                                  {review.author}
                                </h5>
                                <p className="font-['Poppins',Helvetica] font-normal text-[#666] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  {review.branch}
                                </p>
                                <p className="font-['Poppins',Helvetica] font-medium text-[#2b552c] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  🏪 {review.stores}
                                </p>
                              </div>
                              <img
                                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-gray-200"
                                alt="Pharmacy logo"
                                src={review.photo}
                              />
                            </div>
                            <div className="flex justify-end">
                              <img
                                className="w-16 h-3 md:w-20 md:h-4 lg:w-24 lg:h-4"
                                alt="Rating stars"
                                src={review.rating}
                              />
                            </div>
                          </>
                        )}

                        {/* Distributor Review Layout */}
                        {review.type === "distributor" && (
                          <>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h5 className="font-['Poppins',Helvetica] font-semibold text-[#262525] text-sm md:text-base lg:text-lg tracking-[-0.3px]">
                                  {review.author}
                                </h5>
                                <p className="font-['Poppins',Helvetica] font-normal text-[#666] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  {review.role}
                                </p>
                                <p className="font-['Poppins',Helvetica] font-medium text-[#2b552c] text-xs md:text-sm tracking-[-0.2px] mt-1">
                                  🚚 {review.coverage}
                                </p>
                              </div>
                              <img
                                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-gray-200"
                                alt="Distributor logo"
                                src={review.photo}
                              />
                            </div>
                            <div className="flex justify-end">
                              <img
                                className="w-16 h-3 md:w-20 md:h-4 lg:w-24 lg:h-4"
                                alt="Rating stars"
                                src={review.rating}
                              />
                            </div>
                          </>
                        )}
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
