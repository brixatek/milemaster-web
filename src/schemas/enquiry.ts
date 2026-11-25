import { z } from "zod";

export const enquiryTypes = ["general", "quote", "product", "partnership"] as const;

export const fuelInterests = ["Diesel Conditioner", "Petrol Booster", "Oil Conditioner", "Fuel Storage Solutions", "Remote Fuel Monitoring"] as const;

const phoneRe = /^[+()\d\s-]{7,20}$/;

export const enquirySchema = z.object({
  type: z.enum(enquiryTypes),
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .max(20)
    .refine((v) => v === "" || phoneRe.test(v), "Enter a valid phone number")
    .optional()
    .default(""),
  company: z.string().trim().max(160).optional().default(""),
  interests: z.array(z.enum(fuelInterests)).max(fuelInterests.length).optional().default([]),
  equipment: z.string().trim().max(500).optional().default(""),
  volume: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)").max(4000),
  consent: z.literal(true, { message: "Please agree so we can respond to you" }),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional().default(""),
  /** Form render timestamp (ms) for minimum-fill-time spam check. */
  startedAt: z.number().int().positive(),
  source: z.string().trim().max(200).optional().default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type Enquiry = z.output<typeof enquirySchema>;
