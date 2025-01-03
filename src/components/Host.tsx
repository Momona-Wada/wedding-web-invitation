import { inriaSerif, parisienne } from "@/ui/fonts"
import Image from "next/image"

type HostProps = {
    image: string,
    host: string,
    nameJapanese: string,
    nameEnglish: string,
    message: string
}

export const Host = ({image, host, nameJapanese, nameEnglish, message }: HostProps) => { 
    return (
        <>
        <div className="relative px-10 pb-10 flex items-center space-x-8">
            <div className="relative h-full">
                <Image 
                    src={`/images/hina_takuto/${image}.jpg`}
                    alt={nameEnglish}
                    width={300}
                    height={500}
                    className="rounded-lg object-cover"/>
            </div>
            <div className="px-4">
                <div className={`${parisienne.className}`}>
                    {host}
                </div>
                <div className="py-3">
                    <div className="text-xl">{nameJapanese}</div>
                    <div className="text-xs">{nameEnglish}</div>
                </div>

                <div className="text-sm">
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}