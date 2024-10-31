'use client';

type ButtonProps = {
    children: React.ReactNode,
    function: 'link' | 'button',
    color: 'beige' | 'red',
    
    // —— Optional props ——
    minFontSize?: string,
    fontSize?: string,
    maxFontSize?: string,
    className?: string,
    style?: React.CSSProperties,

    // If the button is a link
    href?: string,
    target?: string,

    // If the button is a button
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, function: buttonFunction, color, minFontSize = "2rem", fontSize, maxFontSize = "2.2rem", className, style, href, target, onClick }: ButtonProps) {
    const background = color === 'beige' ? 'bg-beige' : 'bg-red';
    const text = color === 'beige' ? 'text-red' : 'text-beige';
    const border = color === 'beige' ? 'border-red' : 'border-red';
    const hover = color === 'beige' ? 'hover:bg-red hover:text-beige' : 'hover:bg-beige hover:text-red hover:border-red';
    const styles: React.CSSProperties = {
        ...style,
        fontSize: `clamp(${minFontSize}, ${fontSize ?? '3vw'}, ${maxFontSize})`,
        lineHeight: `clamp(${minFontSize}, ${fontSize ?? '3vw'}, ${maxFontSize})`
    }

    const styleButton = `
        font-manukaCondensed
        uppercase 
        ${text} 
        ${background} 
        px-4
        py-[2px]
        inline-block
        rounded-[10px]
        
        ${border}
        border-[2px]

        ${hover}
        transition-all
        duration-300

        ${className ?? ''}
    `;
    
    switch (buttonFunction) {
        case 'link':
            return (
                <a
                    href={href}
                    target={target ?? '_self'}
                    className={styleButton}
                    style={styles}
                >
                    {children}
                </a>
            )

        case 'button':
            return (
                <button
                    onClick={onClick}
                    className={styleButton}
                    style={styles}
                >
                    {children}
                </button>
            )
    }
}