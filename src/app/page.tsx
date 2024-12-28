import { Host } from "@/components/Host";
import { Message } from "@/components/Message";
import { TopPhoto } from "@/components/TopPhoto";

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen">
      <div className="absolute inset-0 
        bg-[url('/images/backgrounds/light_blue_flower.jpg')] bg-center opacity-20">
      </div>
    
      <div className="relative">
        <TopPhoto />
        <Message />
        <Host />
      </div>
    </div>
    </>
  );
}
