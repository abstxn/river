import 'server-only';

import { cache } from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { decrypt } from '@/lib/session';

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/login');
  }

  return { isAuth: true, userId: session.userId };
});

// TODO: Remove once done testing
export const authGet = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  // Some action that requires authentication

  return "success";
});