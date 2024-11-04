"use client";
import graphqlRequest, { getUsersDocumentIds, register, updateUser } from "@/graphql";
import { signIn } from "next-auth/react";

export function authenticate(identifier: string, password: string, callbackUrl: string) {
    signIn('credentials', { identifier, password, callbackUrl });
}

type registerFormData = {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
}

export async function registrate(registerFormData: registerFormData, callbackUrl: string = "/") {
    try {
        // ———— Register the user ————
        const registerReponse = await graphqlRequest(register, { input: {
            email: registerFormData.email,
            password: registerFormData.password,
            username: registerFormData.username,
        }});

        // ———— Add firstname and lastname to the user ————
        await graphqlRequest(updateUser, {
            updateUsersPermissionsUserId: registerReponse.register.user.id,
            data: {
                firstname: registerFormData.firstname,
                lastname: registerFormData.lastname,
            }
        }, process.env.API_TOKEN_AUTH);

        // ———— Sign in the user ————
        await signIn('credentials', {
            identifier: registerFormData.email,
            password: registerFormData.password,
            callbackUrl
        });

    } catch (error: any) {
        return {
            error: error.message.split(': ')[0]
        }
    }
}

export async function authenticateThirdParty(method: "github" | "google") {
    console.log('Authenticating with', method)
    try {
        await signIn(method, { callbackUrl: '/posts' });
    } catch (error) {
        if (error) {
            return 'Something went wrong.'

        }
    }
}