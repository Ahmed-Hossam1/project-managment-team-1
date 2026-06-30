import {z} from "zod";
export const forgotPasswordSchema = z.object({
    email: z.string()
    .min(4,"Email is too short")
    .email("Invalid email address")
});
export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
