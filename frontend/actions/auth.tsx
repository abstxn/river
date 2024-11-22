"use server"

import { redirect } from "next/navigation";
import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession } from "@/lib/session";

type SignUpErrors = {
  username?: string[] | undefined;
  email?: string[] | undefined;
  password?: string[] | undefined;
  service?: string | undefined;
}

export async function signUp(state: FormState, formData: FormData) {
  // Validate fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // Return early if any fields are invalid
  if (!validatedFields.success) {
    const signUpErrors: SignUpErrors = validatedFields.error.flatten().fieldErrors;
    return { errors: signUpErrors };
  }

  // Make a call to auth-service to sign up
  const response = await fetch(
    `${process.env.GATEWAY_URL}/api/auth-service/sign-up`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(validatedFields.data)
    });

  // Handle unhappy routes
  if (!response.ok) {
    const data = await response.json();  // TODO: Not typed!
    const signUpErrors: SignUpErrors = {
      service: data.message
    }
    return { errors: signUpErrors }
  }

  // Create user session
  await createSession(validatedFields.data.username);

  // Redirect the user
  redirect('/')
}

// TODO: Implement login method