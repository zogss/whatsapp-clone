import z from 'zod';

export const onBoardingSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(50, { message: 'Name must be less than 50 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  about: z
    .string()
    .min(10, { message: 'About must be at least 10 characters long' })
    .max(1000, { message: 'About must be less than 1000 characters long' }),
  profileImage: z.string().url({ message: 'Please enter a valid url' }),
});

export type OnBoardingFormType = z.infer<typeof onBoardingSchema>;
