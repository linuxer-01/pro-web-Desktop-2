import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const CustomerReviewsSection = (): JSX.Element => {
  // Review data for mapping
  const reviews = [
    {
      title: "Top Choice",
      quote:
        '"Nutrazs is my top choice and its breaking bad and freaking good."',
      author: "Walter White",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group.png",
    },
    {
      title: "Top Choice",
      quote:
        '"Nutrazs is my top choice and its breaking bad and freaking good."',
      author: "Walter White",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-1.png",
    },
    {
      title: "Top Choice",
      quote:
        '"Nutrazs is my top choice and its breaking bad and freaking good."',
      author: "Walter White",
      photo: "/figmaAssets/photo-2.png",
      rating: "/figmaAssets/mask-group-2.png",
    },
  ];

  return (
    <section className="w-full bg-[#323232] py-16 md:py-20 lg:py-24">
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

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-full bg-[#e4e4e4] rounded-[14px] border-none"
            >
              <CardContent className="p-8 md:p-10 lg:p-12">
                <div className="flex flex-col gap-10 md:gap-12 lg:gap-[60px]">
                  <div className="min-h-[120px] md:min-h-[168px]">
                    <h4 className="font-['Poppins',Helvetica] font-medium text-[#262525] text-lg md:text-[25.2px] tracking-[-0.5px] md:tracking-[-1.01px] text-center mb-8 md:mb-[72px]">
                      {review.title}
                    </h4>
                    <p className="font-['Poppins',Helvetica] font-bold text-[#323232] text-base md:text-[19.6px] tracking-[-0.4px] md:tracking-[-0.79px] leading-6 md:leading-8">
                      {review.quote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-sm md:text-[15.8px] tracking-[-0.3px] md:tracking-[-0.63px] mb-2">
                        {review.author}
                      </span>
                      <img
                        className="w-24 h-4 md:w-[136px] md:h-[25px]"
                        alt="Rating stars"
                        src={review.rating}
                      />
                    </div>
                    <img
                      className="w-12 h-12 md:w-[61px] md:h-[61px] object-cover rounded-full"
                      alt="Customer photo"
                      src={review.photo}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
