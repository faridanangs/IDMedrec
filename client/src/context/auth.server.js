"use server"

import { auth, signIn, signOut } from "../lib/auth";

export const logIn = async (formData) => {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        console.log(error, "s error")
        throw error;
    }
}


export const sessionAuth = async () => {
    return await auth();
}

export const logout = async () => {
    await signOut();
}