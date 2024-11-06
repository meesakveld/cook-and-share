import Image from "next/image";

import hand4 from "@/assets/images/hands/hand-4.png";
import hand5 from "@/assets/images/hands/hand-5.png";
import hand1 from "@/assets/images/hands/hand-1.png";
import hand6 from "@/assets/images/hands/hand-6.png";

type HeroProps = {
    title: string;

    className?: string;

    minFontSize?: string;
    fontSize?: string;
    maxFontSize?: string;
};

export default function Hero({ title, minFontSize = '3vw', fontSize = '18vw', maxFontSize, className }: HeroProps) {
    const fontSizeStyle = `clamp(${minFontSize || fontSize}, ${fontSize}, ${maxFontSize || fontSize})`;
    const lineHeightStyle = `clamp(${minFontSize || fontSize}, ${fontSize}, ${maxFontSize || fontSize})`;

    return (
        <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20vw] flex flex-col justify-between h-4/6">
                <Image src={hand4} alt="hand with a pan" />
                <Image src={hand5} alt="hand with a pan" className="rotate-[-37deg] -translate-x-8 scale-150" />
            </div>

            <div className={`flex flex-col mw p-8" ${className}`}>
                <h1 className="font-manukaCondensed font-black uppercase text-center text-red w-[85%] m-auto" style={{ fontSize: fontSizeStyle, lineHeight: lineHeightStyle }}
                >{title}</h1>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20vw] flex flex-col justify-between h-4/6">
                <Image src={hand1} alt="hand with a pan" />
                <Image src={hand6} alt="hand with a pan" className="scale-x-[-1]" />
            </div>   
        </div>
    );
}