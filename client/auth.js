import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { config } from './middleware';

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        if (credentials) {
          return credentials;
        }
        return null;
      }
    })
  ],
  ...authConfig,
});