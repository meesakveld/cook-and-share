type CardProps = {
    className?: string,
    parentClassName?: string,
    children: React.ReactNode
    color?: 'red' | 'beige'
}

export default function Card({ className, parentClassName, children, color = 'beige' }: CardProps) {
    const invertedColor = color === 'red' ? 'beige' : 'red';

    return (
        <div className={`pr-2 pb-2 ${parentClassName ?? ""}`}>
            <div className={`bg-${color} w-full border-${invertedColor} border-[2px] rounded-[15px] card-after ${className ?? ""}`}>
                {children}
            </div>
        </div>
    )
}