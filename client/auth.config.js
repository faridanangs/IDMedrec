
export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, token }) {
            console.log(session, "session",)
            console.log(token, "token",)
            if (token) {
                session.user = {
                    name: token.name,
                    username: token.username,
                    email: token.email,
                    wallet_address: token.wallet_address,
                    user_role: token.user_role,
                    id: token.id,
                    created_at: token.created_at,
                };
            }

            console.log(session, "after sesion",)
            return session;
        },
        async jwt({ token, user }) {
            console.log(user, "user jw",)
            console.log(token, "token jw",)
            if (user) {
                token.name = user.name;
                token.username = user.username;
                token.email = user.email;
                token.wallet_address = user.wallet_address;
                token.user_role = user.user_role;
                token.id = user.id;
                token.created_at = user.created_at;
            }

            console.log(token, "after token jw",)

            return token;
        },
    },
    providers: [],
};