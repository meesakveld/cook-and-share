type CardProps = {
    className?: string,
    children: React.ReactNode
}

export default function Card({ className, children }: CardProps) {
    return (
        <div className='pr-2 pb-2'>
            <div className={`bg-beige w-full border-red border-[2px] rounded-[15px] card-after ${className ?? ""}`}>
                {children}
            </div>
        </div>
    )
}