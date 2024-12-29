import { inriaSerif, parisienne } from "@/ui/fonts"

type SectionWrapperProps = {
    background: string
    title: string
    children: React.ReactNode
}

export const SectionWrapper = ({background, title, children}: SectionWrapperProps) => {
    return (
        <>
        <div className="relative h-[555px]">
            <div 
                className="absolute inset-0 bg-cover"
                style={{backgroundImage: `url(/images/backgrounds/${background}.jpg)` }}
            >
            </div>

            <div className="relative p-10">
                <p className={`text-4xl ${inriaSerif.className}`}>{title}</p>
            </div>
            <div className="relative">{children}</div>
        </div>
            
        </>
    )
} 