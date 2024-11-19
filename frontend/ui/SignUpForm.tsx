'use client'

import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'
import { signUp } from '@/actions/auth'

export function SignUpForm() {
  const [state, action] = useActionState(signUp, undefined)

  return (
    <form
      action={action}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
        {state?.errors?.password && (
          <div className="mt-2 text-sm text-red-500">
            <p>Password must:</p>
            <ul className="list-disc list-inside">
              {state.errors.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      type="submit"
      className={`w-full p-2 text-white rounded ${
        pending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {pending ? 'Submitting...' : 'Sign Up'}
    </button>
  )
}
