import Image from "next/image"
import { inriaSerif } from "@/ui/fonts"

export const EventDetail = () => {
    return (
        <>
        <div className="relative p-10 h-full">
            <Image 
                src="/images/hina_takuto/hina_heart.jpg"
                alt="Count down to the wedding day"
                width={500}
                height={300}
            />
            <div className="absolute inset-x-16 bottom-20">
                <p className={`text-4xl bg-yellow-100/70 ${inriaSerif.className} inline-block px-4`}>Event Details</p>
                <div className={`bg-rose-300/70 p-4 inline-block relative`}
                style={{marginLeft: "35px"}}>
                    <p>日付: 2025年12月13日(土)</p>
                    <br />
                    <p>挙式: 10:30 - 11:30 
                    <br />
                    (受付: 10:00)
                    </p>
                    <br />
                    <p>披露宴: 11:30 - 14:00</p>
                </div>
            </div>
        </div>
        </>
    )
}