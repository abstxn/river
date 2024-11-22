'use client'

import { useActionState } from 'react'
import { login } from '@/actions/auth';

export function LoginForm() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <form
      action={action}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md space-y-4"
    >
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          placeholder="Username"
          className="w-full p-2 mt-1 border border-gray-300 rounded"
        />
        {state?.errors?.username && (
          <p className="text-sm text-red-500">{state.errors.username}</p>
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
      <LoginButton isPending={isPending} />
      {state?.errors?.service && (
        <p className="text-sm text-red-500">{state.errors.service}</p>
      )}
    </form>
  )
}

function LoginButton({ isPending }: { isPending:boolean }) {

  return (
    <button
      disabled={isPending}
      type="submit"
      className={`w-full p-2 text-white rounded ${
        isPending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {isPending ? 'Logging in...' : 'Login'}
    </button>
  )
}
