import { SignupFormSchema, FormState } from "@/lib/definitions";

export async function signUp(state: FormState, formData: FormData) {

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  // Validate fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // Return early if any fields are invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
}