import { NextResponse } from "next/server";

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    session: { strategy: "jwt" },
    providers: [],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user = {
                    name: token?.name,
                    username: token?.username,
                    email: token?.email,
                    wallet_address: token?.wallet_address,
                    user_role: token.user_role,
                    id: token?.id,
                    created_at: token?.created_at,
                    office_address: token?.office_address,
                    specialty: token?.specialty,
                };
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.name = user?.name;
                token.username = user?.username;
                token.email = user?.email;
                token.wallet_address = user?.wallet_address;
                token.user_role = user?.user_role;
                token.id = user?.id;
                token.created_at = user?.created_at;
                token.office_address = user?.office_address,
                    token.specialty = user?.specialty

            }

            return token;
        },
        async authorized({ auth, request }) {
            const user = auth?.user;
            const url = request.nextUrl.clone();
            
            console.log(request.nextUrl.pathname, "reqq")
            if (user) {
                if (request.nextUrl.pathname.startsWith("/auth/login") || request.nextUrl.pathname.startsWith("/auth/register")) {
                    url.pathname = `/dashboard/${user.user_role}`;
                    return Response.redirect(url);
                } else if (user.user_role && request.nextUrl.pathname.startsWith('/dashboard')) {
                    // Avoid redirect if already on the correct dashboard
                    if (!request.nextUrl.pathname.includes(user.user_role)) {
                        url.pathname = `/dashboard/${user.user_role}`;
                        return Response.redirect(url);
                    }
                }
            } else {
                // If no user or none of the conditions matched, redirect to login
                if (request.nextUrl.pathname.startsWith("/dashboard")) {
                    url.pathname = '/auth/login';
                    return Response.redirect(url);
                }
            }

            return NextResponse.next();
        }

    }
}