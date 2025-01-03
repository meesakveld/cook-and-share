import React from "react";

type TitleProps = {
    fontSize?: string;
    maxFontSize?: string;
    color?: 'red' | 'beige';
    id?: string;
    hTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
}

export default function Title({ fontSize, maxFontSize, color = "beige", id, hTag = "h2", children }: TitleProps) {
    const invertedColor = color === 'red' ? 'beige' : 'red';
    const colorText = `text-${color}`;
    const textShadow = `-1px 0 rgb(var(--color-${invertedColor})), 0 1px rgb(var(--color-${invertedColor})), 1px 0 rgb(var(--color-${invertedColor})), 0 -1px rgb(var(--color-${invertedColor}))`;

    return React.createElement(
        hTag,
        {
            id: id,
            className: `title relative font-manuka uppercase ${invertedColor}`,
            "data-title": children,
            style: {
                fontSize: `clamp(2rem, ${fontSize || '3vw'}, ${maxFontSize || fontSize || '3vw'})`,
                lineHeight: `clamp(2rem, ${fontSize || '3vw'}, ${maxFontSize || fontSize || '3vw'})`
            }
        },
        <>
            <span 
                className={`${colorText} relative z-10`}
                style={{ textShadow: textShadow }}
            >
                {children}
            </span>
            <span className="after:text-beige"></span>
            <span className="after:text-red"></span>
        </>
    );
}
