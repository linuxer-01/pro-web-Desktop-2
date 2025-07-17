import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Form validation schema
const partnershipFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

export const PartnershipInquirySection = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Form setup
  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      businessType: "",
      message: "",
    },
  });

  // Form submission mutation
  const submitPartnershipMutation = useMutation({
    mutationFn: async (data: PartnershipFormData) => {
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Partnership inquiry submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error submitting inquiry",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  // Handle form submission
  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);
    try {
      await submitPartnershipMutation.mutateAsync(data);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Business type options
  const businessTypes = [
    "Retail Store",
    "Wholesale Distributor",
    "E-commerce Platform",
    "Healthcare Provider",
    "Pharmacy Chain",
    "Fitness Center/Gym",
    "Health & Wellness Clinic",
    "Restaurant/Cafe",
    "Export/Import Business",
    "Other",
  ];

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
      title: "Phone Support",
      content: "+91 7200281134",
      description: "Call us for immediate assistance",
      alt: "Phone icon",
    },
    {
      icon: "/figmaAssets/emailicon.png",
      title: "Email Us",
      content: "nutrazs.off1@gmail.com",
      description: "Send us your inquiries anytime",
      alt: "Email icon",
    },
    {
      icon: "/figmaAssets/icon-2.png",
      title: "Live Chat",
      content: "Chat with us",
      description: "Get instant support online",
      alt: "Chat icon",
      hasButton: true,
    },
    {
      icon: "/figmaAssets/icon-3.png",
      title: "Visit Us",
      content: "52/5, Sri Thirupathi Nagar",
      description: "Kottalampakkam, Pudupet Panruti Taluk, Cuddalore Tamil Nadu– 607106",
      alt: "Location icon",
    },
  ];

  return (
    <section id="partnership" className="flex flex-col items-start gap-12 px-4 md:px-8 py-16 md:py-20 lg:py-24">
      {/* Contact Information Section - Above Form */}
      <div className="flex flex-col gap-6 lg:gap-[33px] w-full max-w-4xl mx-auto">
        <h2 className="font-medium [font-family:'Poppins',Helvetica] text-black text-xl md:text-2xl lg:text-[34px] tracking-[-0.8px] lg:tracking-[-1.36px] text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 hover:border-[#186627] group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-[#186627] rounded-full flex items-center justify-center group-hover:bg-[#144d1f] transition-colors">
                  <img
                    className="w-8 h-8 object-cover filter brightness-0 invert"
                    alt={item.alt}
                    src={item.icon}
                  />
                </div>
                <div>
                  <h3 className="font-semibold [font-family:'Poppins',Helvetica] text-[#186627] text-lg mb-2">
                    {item.title}
                  </h3>
                  {item.hasButton ? (
                    <Button className="h-[35px] w-[110px] rounded-[15px] bg-[#207b31] hover:bg-[#186627] border-[1.35px] border-black text-white font-semibold text-[14px] tracking-[0.43px] mb-2">
                      {item.content}
                    </Button>
                  ) : (
                    <p className="font-medium [font-family:'Poppins',Helvetica] text-black text-base mb-2">
                      {item.content}
                    </p>
                  )}
                  <p className="text-sm [font-family:'Poppins',Helvetica] text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Row */}
      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[120px] w-full">
        {/* Left Column - Partnership Process (Desktop Only) */}
        <div className="hidden lg:flex flex-col w-full lg:w-[475px] items-start gap-10 lg:gap-[75px]">
          <div className="w-full max-w-[319px]">
            <h2 className="font-medium [font-family:'Poppins',Helvetica] text-black text-xl md:text-2xl lg:text-[34px] tracking-[-0.8px] lg:tracking-[-1.36px]">
              Partnership Process
            </h2>
            <p className="mt-4 font-light [font-family:'Poppins',Helvetica] text-black text-sm md:text-base lg:text-[15.4px] tracking-[-0.3px] lg:tracking-[-0.62px]">
              Sub heading for the the Partnership Process.
            </p>
          </div>

          <div className="relative w-full">
            {/* Timeline Line */}
            <div className="absolute w-[3px] h-[250px] md:h-[312px] top-[26px] left-[14px] bg-[url('/figmaAssets/line-1.svg')]" />

            {/* Timeline Steps */}
            <div className="flex flex-col gap-8 md:gap-12 lg:gap-[74px]">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 lg:gap-[22px]">
                  <div className="w-[30px] h-[30px] bg-[#186627] rounded-[15px] flex items-center justify-center flex-shrink-0">
                    <span className="opacity-70 [font-family:'Poppins',Helvetica] font-semibold text-white text-xs lg:text-[12.7px] tracking-[-0.3px] lg:tracking-[-0.51px]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium [font-family:'Poppins',Helvetica] text-black text-base md:text-lg lg:text-[19.1px] tracking-[-0.4px] lg:tracking-[-0.77px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-light [font-family:'Poppins',Helvetica] text-black text-xs md:text-sm lg:text-[12.7px] tracking-[-0.3px] lg:tracking-[-0.51px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="w-full lg:w-[673px] rounded-[15.31px] border-[1.53px] border-solid border-black">
          <CardContent className="p-6 md:p-8 lg:p-[44.79px]">
            <div className="flex flex-col gap-8 lg:gap-[57.85px]">
              {/* Form Header */}
              <div className="w-full">
                <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl md:text-3xl lg:text-[47.2px] tracking-[-1px] lg:tracking-[-1.89px]">
                  Partnership Inquiry Form
                </h1>
                <p className="mt-4 lg:mt-6 [font-family:'Poppins',Helvetica] font-light text-black text-base md:text-lg lg:text-[18.2px] tracking-[-0.4px] lg:tracking-[-0.73px]">
                  Fill out the form below to start your partnership journey with
                  NUTRAZS
                </p>
              </div>

              {/* Partnership Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 lg:gap-[42.03px] w-full">
                {/* Name and Email Row */}
                <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-[8.25px] w-full">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[21.7px] tracking-[-0.4px] lg:tracking-[-0.87px]">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-12 lg:h-[57px] rounded-[8.36px] border-[1.39px] border-solid border-black"
                            placeholder="Enter your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[21.7px] tracking-[-0.4px] lg:tracking-[-0.87px]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="h-12 lg:h-[57px] rounded-[8.36px] border-[1.39px] border-solid border-black"
                            placeholder="Enter your email address"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company and Phone Row */}
                <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-[8.25px] w-full">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[22.8px] tracking-[-0.4px] lg:tracking-[-0.91px]">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-12 lg:h-[60px] rounded-[8.78px] border-[1.46px] border-solid border-black"
                            placeholder="Enter your company name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[22.8px] tracking-[-0.4px] lg:tracking-[-0.91px]">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            className="h-12 lg:h-[61px] rounded-[8.78px] border-[1.46px] border-solid border-black"
                            placeholder="Enter your phone number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Business Type */}
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem className="w-full lg:w-[450.03px]">
                      <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[23.8px] tracking-[-0.4px] lg:tracking-[-0.95px]">
                        Business Type
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 lg:h-[63px] rounded-[9.18px] border-[1.53px] border-solid border-black">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg lg:text-[23.8px] tracking-[-0.4px] lg:tracking-[-0.95px]">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="mt-3 h-24 lg:h-[104px] rounded-[9.18px] border-[1.53px] border-solid border-black"
                          placeholder="Tell us about your business, expected order volumes, and partnership requirements."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full lg:w-[590px] h-12 lg:h-[70px] bg-[#186526] hover:bg-[#144d1f] disabled:bg-gray-400 rounded-[9.18px] border-[1.53px] border-solid border-black [font-family:'Poppins',Helvetica] font-medium text-[#afdda4] text-lg lg:text-[23.8px] tracking-[-0.4px] lg:tracking-[-0.95px]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
                </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
