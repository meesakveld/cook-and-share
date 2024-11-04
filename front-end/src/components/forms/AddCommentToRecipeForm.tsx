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
    addCommentToRecipe: (data: { comment: string, userId: string, recipeId: string }) => Promise<any>;
}


export default function AddCommentToRecipeForm({ recipe, addCommentToRecipe }: AddCommentToRecipeFormProps) {
    const [inputText, setInputText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [requestError, setRequestError] = useState<string>("");

    const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (inputText.length < 3) {
            setError("The comment must be at least 3 characters long.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await addCommentToRecipe({ comment: inputText, userId: recipe.user.documentId, recipeId: recipe.documentId });
            setInputText("");
        } catch (error: any) {
            setRequestError(error.message);
        }

    }

    return (
        <div className="flex flex-col gap-0">
            { requestError && <p className="text-red-500 border-2 border-red p-2 rounded-md w-full text-center text-red mt-4">Error: {requestError}</p> }

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