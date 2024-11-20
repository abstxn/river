"use server"

import { redirect } from "next/navigation";
import { SignupFormSchema, FormState } from "@/lib/definitions";
import { createSession } from "@/lib/session";
import bcrypt from 'bcryptjs';

export async function signUp(state: FormState, formData: FormData) {

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  // Validate fields
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // Return early if any fields are invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Hash the password
  const salt = bcrypt.genSaltSync(10)
  const passwordHash = bcrypt.hashSync(validatedFields.data.password, salt);

  // Make a call to auth-service to sign up
  const username = validatedFields.data.username;
  const email = validatedFields.data.email;
  const response = await fetch(
    `${process.env.GATEWAY_URL}/api/auth-service/sign-up`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, email, passwordHash })
    });

  // Handle unhappy routes
  if (!response.ok) {
    // TODO: Handle non-ok cases from /api/auth-service/sign-up
  }

  // Create user session
  await createSession(validatedFields.data.username);

  // Redirect the user
  redirect('/')
}

// TODO: Implement login method