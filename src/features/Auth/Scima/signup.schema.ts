import {z} from "zod";
export const signupSchema = z.object({
    name:z.string()
    .min(3,"Name is too short ")
    .max(30, "Name is too long ")
    .trim()
    .regex(/^[A-Za-z\s]+$/,"Name must contain only letters and spaces "),
    email:z.string()
    .min(4,"Email is too short ")
    .max(100, "Email is too long ")
    .email("Invalid email address")
    .trim(),
    password:z.string()
    .min(8,"Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must include uppercase, lowercase, number, and special character."),
    password_confirmation:z.string()
    .min(8,"Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Password must include uppercase, lowercase, number, and special character.")
    .trim(),
    rememberMe:z.boolean().optional(),
})
export type signupFormData = z.infer<typeof signupSchema>;