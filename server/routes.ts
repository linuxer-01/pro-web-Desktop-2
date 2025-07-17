import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPartnershipInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Partnership inquiry submission endpoint
  app.post("/api/partnership", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertPartnershipInquirySchema.parse(req.body);
      
      // Save to storage
      const inquiry = await storage.createPartnershipInquiry(validatedData);
      
      // Log the inquiry for debugging
      console.log("New partnership inquiry received:", inquiry);
      
      // TODO: Send email notification (requires SendGrid setup)
      // await sendNotificationEmail(inquiry);
      
      res.status(201).json({
        success: true,
        message: "Partnership inquiry submitted successfully",
        id: inquiry.id,
      });
    } catch (error) {
      console.error("Partnership inquiry submission error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    }
  });

  // Get all partnership inquiries (for admin purposes)
  app.get("/api/partnership", async (req, res) => {
    try {
      const inquiries = await storage.getPartnershipInquiries();
      res.json({
        success: true,
        inquiries,
      });
    } catch (error) {
      console.error("Error fetching partnership inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
