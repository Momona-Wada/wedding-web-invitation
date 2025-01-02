import { parisienne } from "@/ui/fonts"
import Image from "next/image"

export const CountDown = () => {
    return (
        <>
        <div className="relative p-10">
            <Image 
                src="/images/hina_takuto/sakura.jpg"
                alt="Count down to the wedding day"
                width={500}
                height={300}
            />
            <div className={`absolute bottom-12 right-12 text-yellow-100 ${parisienne.className}`}>
                <p>Count Down to 2025.12.13</p>
                <p className="text-4xl">★★days</p>
            </div>

        </div>
        </>
    )
}