'use client';

// ——— Imports ———
import { useState } from "react";
import { authenticate } from "@/lib/loginActions";

// ——— Components ———
import Card from "@/components/ui/Card";
import Title from "../common/Title";
import InputText from "./input-components/InputText";
import Button from "../common/Button";

export default function Login() {
    const [loading, setLoading] = useState(false);

    const getCallbackUrl = () => {
        const url = new URL(window.location.href);
        const callbackUrl = url.searchParams.get("callbackUrl");
        return callbackUrl ? callbackUrl : "/";
    }

    const getErrorMessage = () => {
        const url = new URL(window.location.href);
        const errorMessage = url.searchParams.get("error");
        return errorMessage ? errorMessage : "";
    }

    const initialState = {
        identifier: '',
        password: '',
    };
    
    const [data, setData] = useState(initialState);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        if (!data || !data.identifier || !data.password) {
            return null;
        }

        authenticate(data.identifier, data.password, getCallbackUrl());
        setLoading(false);
    }

    return (
        <Card color="red" className="p-4 flex flex-col gap-8 justify-between w-full" parentClassName={`w-full md:w-3/4 m-auto ${loading ? "loading" : ""}`}>
            <Title>Login</Title>

            <form className="flex flex-col gap-6 items-baseline" method="post" onSubmit={handleSubmit} >

                {getErrorMessage() !== "" &&
                    <p className="text-beige border-2 border-beige p-2 rounded-md">Error: {getErrorMessage()}</p>
                }

                <div className="flex flex-col gap-6 w-full">
                    <InputText
                        id="identifier"
                        name="identifier"
                        label="Email or username"
                        color="beige"
                        textColor="beige"
                        placeholder="Email or username"
                        required={true}
                        onChange={handleChange}
                    />

                    <InputText
                        id="password"
                        name="password"
                        label="Password"
                        color="beige"
                        textColor="beige"
                        type="password"
                        placeholder="Password"
                        required={true}
                        onChange={handleChange}
                    />
                </div>

                <Button color="beige" function="button" className="hover:border-beige">Sign in</Button>
            </form>
        </Card>
    )
}