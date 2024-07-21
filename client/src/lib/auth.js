import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        if (credentials) {
          const data = {
            name: credentials?.name,
            email: credentials?.email,
            username: credentials?.username,
            wallet_address: credentials?.wallet_address,
            user_role: credentials.user_role,
            id: credentials?.id,
            created_at: credentials?.created_at,
            specialty: credentials?.specialty,
            office_address: credentials?.office_address,
          }
          return data;
        }
        return null;
      }
    })
  ],
  ...authConfig.callbacks,
});