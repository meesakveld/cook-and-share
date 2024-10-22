type TitleProps = {
    fontSize?: string;
    color?: 'red' | 'beige';
    children: React.ReactNode;
}

export default function Title({ fontSize, color = "beige", children }: TitleProps) {
    const invertedColor = color === 'red' ? 'beige' : 'red';
    const colorText = `text-${color}`;
    const textShadow = `-1px 0 rgb(var(--color-${invertedColor})), 0 1px rgb(var(--color-${invertedColor})), 1px 0 rgb(var(--color-${invertedColor})), 0 -1px rgb(var(--color-${invertedColor}))`;

    return (
        <h1 
            className={`title relative font-manuka uppercase ${invertedColor}`} 
            data-title={children} 
            style={{ fontSize: `clamp(2rem, ${fontSize || '3vw'}, ${fontSize || '3vw'})` }}
        >
            <span 
                className={`${colorText} relative z-10`}
                style={{ textShadow: textShadow }}
            >
                {children}
            </span>
            <span className="after:text-beige"></span>
            <span className="after:text-red"></span>
        </h1>
    );
}
