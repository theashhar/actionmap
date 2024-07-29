import Navbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients, HeroImages, pricing } from "@/lib/constants";
import Image from "next/image";
import { PriceCart } from "@/components/ui/card-hover-effect";
import LampOverLight from "@/components/ui/lamp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section>
        <ContainerScroll
          titleComponent={
            <>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-600 bg-[linear-gradient(110deg,#17181a,45%,#2e3747,55%,#17181a)] bg-[length:200%_100%] px-16 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50 text-xl">
              Start For Free Today
            </button>
              <h1 className="text-4xl font-semibold text-black dark:text-white py-6">
                Automate Your Work With <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-10  leading-none">
                  ActionMap
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/heroImg.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={true}
          />
        </ContainerScroll>

      </section>
        <InfiniteMovingCards
        className='mt-[-120px] md:mx-36'
        items={clients}
        direction="right"
        speed="slow"
      />
      <HeroParallax products={HeroImages} />
      <LampOverLight />
      <PriceCart items={pricing} />

    </main>
  );
}
