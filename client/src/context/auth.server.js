"use server"

import { auth, signIn } from "../../auth";

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
        throw error;
    }
}


export const sessionAuth = async ()=> {
    return await auth();
}