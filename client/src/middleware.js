import NextAuth from 'next-auth';
import { authConfig } from './lib/auth.config';
 

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};

export default NextAuth(authConfig).auth;