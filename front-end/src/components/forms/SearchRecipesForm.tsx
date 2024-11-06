'use client';

// ——— React ———
import { useEffect, useState } from "react";

// ——— Components ———
import InputText from "./input-components/InputText";
import Button from "../common/Button";

export default function SearchRecipesForm() {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const getQfromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const q = urlParams.get('q');
        if (q) {
            setSearchQuery(q);
        }
    };

    useEffect(() => {
        getQfromUrl();
    }, []);

    return (
        <form className="flex gap-2 items-end w-full">
            <div className="w-full">
                <InputText
                    id="q"
                    name="q"
                    label=""
                    value={searchQuery}
                    setValue={setSearchQuery}
                    color="red"
                    placeholder="Search for a recipe"
                />
            </div>
            <Button color='red' function="link" href={`/search?q=${searchQuery}`}>Search</Button>
        </form>
    );
}