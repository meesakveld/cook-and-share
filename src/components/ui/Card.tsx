type CardType = {
    className?: string,
    children: React.ReactNode
}

export default function Card({ className, children }: CardType) {
    return (
        <div className='pr-2 pb-2'>
            <div className={`bg-beige w-full border-red border-[2px] rounded-[15px] p-2 card-after ${className ?? ""}`}>
                {children}
            </div>
        </div>
    )
}