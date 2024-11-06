'use client';
// ——— Assets ———
import accImg from "@/assets/icons/account_logged_in.svg";
import trashcan from "@/assets/icons/trashcan.svg";

// ——— Next.js ———
import Image from "next/image";
import Link from "next/link";

// ——— Components ———
import Card from "@/components/ui/Card";

// ——— Types ———
import { CommentType } from "@/types/Recipe";

// ——— Functions ———
import dateFormatter from "@/functions/dateFormatter";
import { User } from "next-auth";
import { useState } from "react";

type CommentCardProps = {
    comment: CommentType;
    recipeId: string;
    user?: User | undefined;
    onSubmitDelete?: (commentId: string, recipeId: string) => Promise<any>;
};


export default function CommentCard({ comment, recipeId, user, onSubmitDelete }: CommentCardProps) {
    const [loading, setLoading] = useState(false);

    let mayDelete = false
    if (user) {
        mayDelete = comment.user.documentId === user.strapiUserId || user.role === "Admin"
    }

    const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading(true);

        const commentId = ev.currentTarget.commentId.value;
        try {
            if (onSubmitDelete) {
                await onSubmitDelete(commentId, recipeId);
            }
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <Card key={comment.documentId} className={`p-4 flex flex-col justify-between gap-4 h-full`} parentClassName={`${loading ? "loading" : ""}`}>
            <div>
                <p>{comment.comment}</p>
            </div>

            <div className="flex justify-between items-center text-red">
                <div className="flex gap-2">
                    <Image src={accImg} alt={comment.user.firstname + comment.user.lastname} className="aspect-auto w-8" />
                    <p>{comment.user.firstname} {comment.user.lastname}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="opacity-50">{dateFormatter(comment.datePosted)}</p>

                    {mayDelete && (
                        <form className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-200" onSubmit={onSubmit}>
                            <button className="aspect-auto w-4" type="submit" name="commentId" value={comment.documentId}>
                                <Image src={trashcan} alt="delete" className="w-4 aspect-auto" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </Card>
    );
}
