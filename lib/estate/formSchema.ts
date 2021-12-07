import { z } from "zod";

const phonePattern = /^\+(?:[0-9] ?){8,14}[0-9]$/;

export const schema = z.object({
  title: z
    .string()
    .nonempty("Please enter a title")
    .min(8, "Title is too short"),
  price: z.number().min(100, "Price too short or invalid"),
  status: z.enum(["rent", "sale"]),
  address: z
    .string()
    .nonempty("Please enter an address")
    .min(8, "Address name too short"),
  province: z
    .string()
    .nonempty("Please enter a state or province")
    .min(3, "State/Province name too short"),
  postal_code: z
    .string()
    .nonempty("Enter a valid postal code")
    .min(4, "Enter a valid postal code"),
  country: z.string().nonempty("Select a country"),
  category: z.string().nonempty("Select a category"),
  bedrooms: z.number().min(1, "Specify the number of bedrooms"),
  baths: z.number().min(1, "Specify the number of bathrooms"),
  surface_area: z.number().min(50, "Small surface area or invalid"),
  property_briefing: z
    .string()
    .nonempty("Write a little briefing about the property")
    .min(20, "Briefing too short"),
  additional_info: z.string().optional(),
  cooling: z.boolean().default(false),
  heating: z.boolean().default(false),
  internet: z.boolean().default(false),
  furniture: z.boolean().default(false),
  parking: z.boolean().default(false),
  email: z
    .string()
    .nonempty("Enter contact email address")
    .email("Enter valid email address"),
  telephone: z
    .string()
    .nonempty("Enter contact telephone number")
    .regex(phonePattern, "Invalid phone number format"),
  createDate: z.date().default(new Date()),
  imgUrl: z.string().url().nonempty(),
  reviews: z.number().default(0),
  totalRating: z.number().default(0),
});
