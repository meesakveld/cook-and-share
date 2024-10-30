'use client';
import { useEffect, useState } from "react";

// ——— GraphQL ———
import Category from "@/types/Category";

// ——— Components ———
import InputSelectMultiple from "./input-components/InputSelectMultiple"
import Button from "../common/Button";

export default function kFilterRecipeForm({ allCategories, categoryIdsFromUrl }: { allCategories: Category[], categoryIdsFromUrl: string[] }) {
    const [inputSelect, setInputSelect] = useState<Category[]>([])

    useEffect(() => {
        if (categoryIdsFromUrl.length > 0) {
            const categories = allCategories.filter(category => categoryIdsFromUrl.includes(category.documentId))
            setInputSelect(categories)
        }
    }, [])

    const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        const categories = inputSelect.map(category => category.documentId).join(',')
        window.location.href = `/recipes?cids=${categories}`
    }

    return (
        <form className="flex gap-2 items-end">
            <InputSelectMultiple
                id="input-text" 
                label="Filter categories" 
                options={allCategories}
                values={inputSelect}
                nameAndValue={{ name: 'name', value: 'documentId' }}
                color="red" 
                setValue={setInputSelect} 
                placeholder="Choose a category or more"
            />

            <Button color='red' function="button" fontSize="2.7vw" onClick={onClick}>Search</Button>
        </form>
    )
}