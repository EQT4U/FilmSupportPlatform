import { z } from 'zod';

// Film schema
export const filmSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  year: z.number().min(1900).max(new Date().getFullYear() + 10),
  genre: z.string().min(1),
  stars: z.array(z.string()),
  description: z.string().min(1),
  poster_url: z.string().url().optional(),
  funding_goal: z.number().positive().optional(),
  funding_current: z.number().min(0).optional(),
});

export type Film = z.infer<typeof filmSchema>;

// Insert schema for creating new films
export const insertFilmSchema = filmSchema.omit({ id: true });
export type InsertFilm = z.infer<typeof insertFilmSchema>;

// Contact schema
export const contactSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  created_at: z.date(),
});

export const insertContactSchema = contactSchema.omit({ id: true, created_at: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = z.infer<typeof contactSchema>;