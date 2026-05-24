import { z } from "zod";

export const productSchema = z.object({

  name: z.string().min(3),

  description: z.string().min(10),

  price: z.number().positive(),

  stock: z.number().min(0),

});