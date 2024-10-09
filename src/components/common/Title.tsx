type TitleProps = {
    fontSize?: string;
    children: React.ReactNode;
}

export default function Title({ fontSize, children }: TitleProps) {
    return (
        <h1 
            className={`title relative font-manuka uppercase`} 
            data-title={children} 
            style={{ fontSize: `clamp(2rem, ${fontSize || '3vw'}, ${fontSize || '3vw'})` }}
        >
            <span 
                className="text-beige relative z-10"
                style={{ textShadow: '-1px 0 rgb(var(--color-red)), 0 1px rgb(var(--color-red)), 1px 0 rgb(var(--color-red)), 0 -1px rgb(var(--color-red))' }}
            >
                {children}
            </span>
        </h1>
    );
}
