import { z } from "zod"
export const signInSchema = z.object({
    email: z.string()
    .min(4,"Email is too short ")
    .email("Invalid email address"),
    password: z.string()
    .min(8,"Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must include uppercase, lowercase, number, and special character."),
    rememberMe: z.boolean().default(false).optional()
})
export type signInFormData = z.infer<typeof signInSchema>;
 