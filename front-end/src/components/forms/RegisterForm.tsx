'use client';

// ——— Imports ———
import { useState } from "react";
import { registrate } from "@/lib/loginActions";

// ——— Components ———
import Card from "@/components/ui/Card";
import Title from "../common/Title";
import InputText from "./input-components/InputText";
import Button from "../common/Button";

export default function RegisterForm() {
    
    const getCallbackUrl = () => {
        const url = new URL(window.location.href);
        const callbackUrl = url.searchParams.get("callbackUrl");
        return callbackUrl ? callbackUrl : "/";
    }
    
    const [errorMessage, setErrorMessage] = useState("");
    const initialState = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    };

    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        if (!data || !data.firstname || !data.lastname || !data.username || !data.email || !data.password) {
            return null;
        }

        const response = await registrate(data, getCallbackUrl());
        if (response?.error) {
            setErrorMessage(response.error);
        }
        setLoading(false);
    }

    return (

        <Card color="red" className="p-4 flex flex-col gap-8 justify-between" parentClassName={`w-full md:w-3/4 m-auto ${loading ? "loading" : ""}`}>
            <Title>Register</Title>

            <form className="flex flex-col gap-6 items-baseline" method="post" onSubmit={handleSubmit} >

                {errorMessage !== "" &&
                    <p className="text-beige border-2 border-beige p-2 rounded-md">Error: {errorMessage}</p>
                }

                <div className="flex flex-col gap-6 w-full">
                    <InputText
                        name="firstname"
                        label="Firstname"
                        color="beige"
                        textColor="beige"
                        placeholder="Firstname"
                        required={true}
                        onChange={handleChange}
                    />
                   
                    <InputText
                        name="lastname"
                        label="Lastname"
                        color="beige"
                        textColor="beige"
                        placeholder="Lastname"
                        required={true}
                        onChange={handleChange}
                    />
                    
                    <InputText
                        name="username"
                        label="Username"
                        color="beige"
                        textColor="beige"
                        placeholder="Username"
                        required={true}
                        onChange={handleChange}
                    />
                    
                    <InputText
                        name="email"
                        label="Email"
                        color="beige"
                        textColor="beige"
                        placeholder="Email"
                        required={true}
                        onChange={handleChange}
                    />

                    <InputText
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

                <Button color="beige" function="button" className="hover:border-beige">Sign up</Button>
            </form>
        </Card>

    )
}