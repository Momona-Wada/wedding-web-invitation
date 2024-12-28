import { Message } from "@/components/Message";
import { TopPhoto } from "@/components/TopPhoto";

export default function Home() {
  return (
    <>
    <div className="relative h-screen">
      <div className="absolute inset-0 
        bg-[url('/images/backgrounds/light_blue_flower.jpg')] bg-cover bg-center h-screen opacity-20">
      </div>
    
      <div className="relative">
        <TopPhoto />
        <Message />
      </div>
    </div>
    </>
  );
}
