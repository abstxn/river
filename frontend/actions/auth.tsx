"use server"

import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

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

  // TODO:
  // 1. Hash the password
  // 2. Make a call to auth-service to sign up

  // 3. Create user session
  await createSession(validatedFields.data.name);

  // 4. Redirect the user
  redirect('/')
}