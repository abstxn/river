"use server"

import { redirect } from "next/navigation";
import { SignupFormSchema, FormState, LoginFormSchema } from "@/lib/definitions";
import { createSession } from "@/lib/session";

type SignUpErrors = {
  username?: string[] | undefined;
  email?: string[] | undefined;
  password?: string[] | undefined;
  service?: string | undefined;
}

type LoginErrors = {
  username?: string[] | undefined;
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

  // Handle unhappy responses
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
export async function login(state: FormState, formData: FormData) {
  // Validate fields
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    const loginErrors: LoginErrors = validatedFields.error.flatten().fieldErrors;
    return { errors: loginErrors };
  }

  // Make a call to auth-service to login
  const response = await fetch(
    `${process.env.GATEWAY_URL}/api/auth-service/login`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(validatedFields.data)
    }
  )

  // Handle unhappy responses
  if (!response.ok) {
    const data = await response.json();  // TODO: Not typed!
    const loginErrors: LoginErrors = {
      service: data.message
    }
    return { errors: loginErrors }
  }

  // Create user session
  await createSession(validatedFields.data.username);

  // Redirect user
  redirect('/');
}