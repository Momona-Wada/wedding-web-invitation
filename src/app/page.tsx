import { Host } from "@/components/Host";
import { Message } from "@/components/Message";
import { SectionWrapper } from "@/components/SectionWrapper";
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
        <SectionWrapper background="yellow_flower" title="Hosts">
          <div className="space-y-20">
            <Host 
              image="takuto_profile"
              host="Groom"
              nameJapanese="藤岡拓人"
              nameEnglish="Fujioka Takuto"
              message="最近覚えた博多弁は「どげんかせんとばいかっちゃねんけど」(何それbyひなの)"/>
            <Host
              image="hina_profile"
              host="Bride"
              nameJapanese="和田ひなの"
              nameEnglish="Wada Hinano"
              message="庭で芋とさつまいもを育てるのが夢（最近ミニトマト枯らしました）"
            />
          </div>
          </SectionWrapper>
      </div>
    </div>
    </>
  );
}
