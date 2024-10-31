'use client';

// ——— Components ———
import InputTextArea from "@/components/forms/input-components/InputTextArea";
import Button from "@/components/common/Button";

// ——— React ———
import { useState } from "react";

// ——— Types ———
import RecipeType from "@/types/Recipe";
type AddCommentToRecipeFormProps = {
    recipe: RecipeType;
}


export default function AddCommentToRecipeForm({ recipe }: AddCommentToRecipeFormProps) {
    const [inputText, setInputText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (inputText.length < 3) {
            setError("The comment must be at least 3 characters long.");
            return;
        }

        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes/${recipe.documentId}/comments`, {
            method: "POST",
            body: JSON.stringify({ comment: inputText, userId: "hx5q5gk59cj7ol15lp685o47" }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 200) {
            window.open(`/recipes/${recipe.documentId}#comments`, "_self");
            window.location.reload();
        }
    }

    return (
        <div>
            <form className={`flex gap-3 mt-4 mb-10 w-full items-end ${loading ? 'loading' : ''}`} onSubmit={onSubmit} {...loading && { disabled: true }}>
                <InputTextArea
                    id="add-comment"
                    label="Review the recipe"
                    color="red"
                    value={inputText}
                    setValue={setInputText}
                    placeholder="What do you think?"
                    required={true}
                    rows={1}
                    errorMessage={error}
                />

                <Button color="red" function="button">Publish</Button>
            </form>
        </div>
    )
}