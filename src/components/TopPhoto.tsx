import Image from "next/image"

export const TopPhoto = () => {
    return (
        <>
        <div className="relative">
            <Image 
                src="/images/hina_takuto/show_ring.jpg"
                alt="Engagement Ring"
                width={400}
                height={300}
            />
            <div className="absolute bottom-4 left-4 text-white text-4xl font-sans">
                <p>2025.12.13</p>
                <p>Wedding</p>
                <p>Invitation</p>
            </div>
        </div>
            
        
        </>
    )
}