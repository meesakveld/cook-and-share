type CardProps = {
    className?: string,
    children: React.ReactNode
    color?: 'red' | 'beige'
}

export default function Card({ className, children, color = 'beige' }: CardProps) {
    const invertedColor = color === 'red' ? 'beige' : 'red';

    return (
        <div className='pr-2 pb-2'>
            <div className={`bg-${color} w-full border-${invertedColor} border-[2px] rounded-[15px] card-after ${className ?? ""}`}>
                {children}
            </div>
        </div>
    )
}