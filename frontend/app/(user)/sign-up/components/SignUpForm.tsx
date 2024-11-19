'use client'

import { signUp } from '../actions/auth'

export function SignUpForm() {
  return (
    <form action={signUp} className="max-w-sm mx-auto space-y-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full border rounded p-2"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  )
}
