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
    <section className="w-full bg-[#323232] py-12">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-[#f0efef] text-6xl tracking-[-2.40px] leading-[100px]">
            Why Thousands Trust NUTRAZS?
          </h2>
          <h3 className="font-['Poppins',Helvetica] font-semibold text-[#e0e0e0] text-[29.5px] tracking-[-1.18px]">
            Voices of&nbsp;&nbsp;Our Valued Customers.
          </h3>
        </div>

        {/* Review Cards */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="w-[340px] bg-[#e4e4e4] rounded-[14px] border-none"
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-[60px]">
                  <div className="h-[168px]">
                    <h4 className="font-['Poppins',Helvetica] font-medium text-[#262525] text-[25.2px] tracking-[-1.01px] text-center mb-[72px]">
                      {review.title}
                    </h4>
                    <p className="font-['Poppins',Helvetica] font-bold text-[#323232] text-[19.6px] tracking-[-0.79px] leading-8">
                      {review.quote}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-['Poppins',Helvetica] font-medium text-[#4c4c4c] text-[15.8px] tracking-[-0.63px] mb-2">
                        {review.author}
                      </span>
                      <img
                        className="w-[136px] h-[25px]"
                        alt="Rating stars"
                        src={review.rating}
                      />
                    </div>
                    <img
                      className="w-[61px] h-[61px] object-cover"
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
