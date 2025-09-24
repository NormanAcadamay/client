import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "Title must be fore than 2 charactor"),
  price: z.coerce.number(),
  description: z.string().max(50, "Desription must be less than 50 charactor"),
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number()
});
