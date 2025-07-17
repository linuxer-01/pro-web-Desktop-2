import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 characters"),
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
    },
  });

  // Form submission mutation
  const submitPartnershipMutation = useMutation({
    mutationFn: async (data: PartnershipFormData) => {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzhdmlIVFhcStxK5dzmYoyn7CTVURBK_1CkKcHEVNrh47Lh7AMNiEkbSsR9KIcfll7x/exec",
        {
          method: "POST",
          mode: "no-cors", // Required for Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      // Since mode is no-cors, we can't check response.ok
      // We'll assume success if no error is thrown
      return { success: true };
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
      // With no-cors mode, we might not get detailed error info
      // but we'll still show error toast
      toast({
        title: "Error submitting inquiry",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
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
      description:
        "Kottalampakkam, Pudupet Panruti Taluk, Cuddalore Tamil Nadu– 607106",
      alt: "Location icon",
    },
  ];

  return (
    <section
      id="partnership"
      className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16"
    >
      {/* Contact Information Section - Above Form */}
      <div className="mb-8 md:mb-12">
        <h2 className="font-medium [font-family:'Poppins',Helvetica] text-black text-xl md:text-2xl lg:text-3xl tracking-[-0.8px] text-center mb-6 md:mb-8">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all duration-300 hover:border-[#186627] group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 bg-[#186627] rounded-full flex items-center justify-center group-hover:bg-[#144d1f] transition-colors">
                  <img
                    className="w-5 h-5 object-cover filter brightness-0 invert"
                    alt={item.alt}
                    src={item.icon}
                  />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold [font-family:'Poppins',Helvetica] text-[#186627] text-xs mb-1">
                    {item.title}
                  </h3>
                  {item.hasButton ? (
                    <Button className="h-[28px] w-[80px] rounded-[10px] bg-[#207b31] hover:bg-[#186627] border-[1px] border-black text-white font-semibold text-[11px] mb-1">
                      {item.content}
                    </Button>
                  ) : (
                    <p className="font-medium [font-family:'Poppins',Helvetica] text-black text-xs mb-1 break-words">
                      {item.content}
                    </p>
                  )}
                  <p className="text-[10px] [font-family:'Poppins',Helvetica] text-gray-600 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Row */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
        {/* Left Column - Partnership Process (Desktop Only) */}
        <div className="hidden lg:flex flex-col w-full lg:w-[400px] items-start gap-6">
          <div className="w-full">
            <h2 className="font-medium [font-family:'Poppins',Helvetica] text-black text-2xl lg:text-3xl tracking-[-0.8px] mb-3">
              Partnership Process
            </h2>
            <p className="font-light [font-family:'Poppins',Helvetica] text-black text-sm tracking-[-0.3px]">
              Sub heading for the Partnership Process.
            </p>
          </div>

          <div className="relative w-full">
            {/* Timeline Line */}
            <div className="absolute w-[3px] h-[280px] top-[26px] left-[14px] bg-[url('/figmaAssets/line-1.svg')]" />

            {/* Timeline Steps */}
            <div className="flex flex-col gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-[30px] h-[30px] bg-[#186627] rounded-[15px] flex items-center justify-center flex-shrink-0">
                    <span className="opacity-70 [font-family:'Poppins',Helvetica] font-semibold text-white text-xs">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="font-medium [font-family:'Poppins',Helvetica] text-black text-base tracking-[-0.4px]">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-light [font-family:'Poppins',Helvetica] text-black text-sm tracking-[-0.3px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="w-full lg:flex-1 max-w-2xl mx-auto lg:mx-0 rounded-[15px] border-[1.5px] border-solid border-black">
          <CardContent className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col gap-6">
              {/* Form Header */}
              <div className="w-full">
                <h1 className="[font-family:'Poppins',Helvetica] font-normal text-black text-xl md:text-2xl lg:text-3xl tracking-[-1px] mb-3">
                  Partnership Inquiry Form
                </h1>
                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm md:text-base tracking-[-0.4px]">
                  Fill out the form below to start your partnership journey with
                  NUTRAZS
                </p>
              </div>

              {/* Partnership Form */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 w-full"
                >
                  {/* Name and Email Row */}
                  <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="w-full md:w-1/2">
                          <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm mb-1">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="h-10 md:h-12 rounded-[8px] border border-black"
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
                          <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm mb-1">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="h-10 md:h-12 rounded-[8px] border border-black"
                              placeholder="Enter your email address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company and Phone Row */}
                  <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem className="w-full md:w-1/2">
                          <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm mb-1">
                            Company Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="h-10 md:h-12 rounded-[8px] border border-black"
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
                          <FormLabel className="[font-family:'Poppins',Helvetica] font-medium text-black text-sm mb-1">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              className="h-10 md:h-12 rounded-[8px] border border-black"
                              placeholder="Enter your phone number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 md:h-12 bg-[#186526] hover:bg-[#144d1f] disabled:bg-gray-400 rounded-[8px] border border-black [font-family:'Poppins',Helvetica] font-medium text-[#afdda4] text-sm md:text-base"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Partnership Inquiry"}
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
