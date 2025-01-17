import { z } from 'zod'

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username must be at least 1 characters long.' })
    .trim(),
    // TODO: Is there potential issue with trimming after the min check?
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
  username: z
    .string()
    .trim(),
  password: z
    .string()
    .trim()
})

export type FormState =
  | {
      errors?: {
        username?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
    userId: string
    expiresAt: Date
  }