// ----------------------------------------------------------------------------------
//
// ----------------------------------------------------------------------------------

import { z } from "zod";

export const signupSchema = z.object({
	fullName: z.string(),
	email: z.string().email({ message: `Please enter a valid email address` }),
	password: z
		.string()
		.min(12, `Password must be at least 12 characters long`)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_-])[A-Za-z\d`~!@#$%^&*()_-]{12,}$/,
			`Password must include uppercase and lowercase letters, numbers, and special characters`
		),
	confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, { message: `Passwords do not match`, path: ["confirmPassword"] });

export const loginSchema = z.object({
	email: z.string().email({ message: `Please enter a valid email address` }),
	password: z
		.string()
		.min(12, `Password must be at least 12 characters long`)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_-])[A-Za-z\d`~!@#$%^&*()_-]{12,}$/,
			`Password must include uppercase and lowercase letters, numbers, and special characters`
		),
});

export type TSignupSchema = z.infer<typeof signupSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;
