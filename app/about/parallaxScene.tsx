'use client'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AboutMe from "@/app/about/aboutMe";
import Formations from "@/app/about/formations";
import SkillTree from "@/app/about/skilltree";
import ProfileCard from "@/app/about/profileCard";
import FadeIn from "@/components/FadeIn";

export default function ParallaxScene() {
    return (
        <Parallax pages={5} style={{ top: '0', left: '0' }} className="animation">
            {/* --- Décor --- */}
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="background" className="animation_layer parallax bg-[url('./image/Background.svg')]" style={{ backgroundSize: 'cover' }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.8}>
                <div id="sun" className="animation_layer parallax bg-[url('./image/Sun.svg')] right-1/4 top-1/3" style={{ backgroundRepeat: 'no-repeat', height: '300px' }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2}>
                <div id="clouds" className="animation_layer parallax bg-[url('./image/clouds.svg')] bottom-0" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="mountainBack" className="animation_layer parallax bg-[url('./image/MoutainBack.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.4}>
                <div id="Name" className="animation_layer parallax flex justify-center top-1/3">
                    <FadeIn delay={0.4}>
                        <h1 className="font-gila text-6xl text-[color:var(--name-foreground)]" style={{ textShadow: 'var(--name-shadows)' }}>
                            PIERRE VANHOVE
                        </h1>
                    </FadeIn>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.05}>
                <div id="moutainMiddle" className="animation_layer parallax bg-[url('./image/MoutainMiddle.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0}>
                <div id="moutainFront" className="animation_layer parallax bg-[url('./image/MountainFront.svg')] bottom-0"></div>
            </ParallaxLayer>

            {/* --- Fond bordeaux continu --- */}
            <ParallaxLayer offset={1} speed={0} factor={4} style={{ backgroundColor: '#5D002E' }} />

            {/* --- Contenu --- */}
            <ParallaxLayer offset={1} speed={0} factor={1}>
                <div className="flex justify-center items-center h-full">
                    <AboutMe />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0} factor={1}>
                <div className="flex justify-center items-center h-full">
                    <Formations />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0} factor={1}>
                <div className="flex justify-center items-center h-full">
                    <SkillTree />
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0} factor={1}>
                <div className="flex justify-center items-center h-full">
                    <ProfileCard />
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}