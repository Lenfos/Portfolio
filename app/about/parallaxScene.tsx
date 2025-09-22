'use client'

import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import AboutMe from "@/app/aboutMe";
import Formations from "@/app/formations";
import SkillTree from "@/app/skilltree";

export default function ParallaxScene() {

    return(
        <Parallax pages={3} style={{top:'0', left: '0'}} className="animation">
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="background" className="animation_layer parallax bg-[url('./image/Background.svg')]" style={{backgroundSize:'cover'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.6}>
                <div id="sun" className="animation_layer parallax bg-[url('./image/Sun.svg')] right-1/4 top-1/3" style={{backgroundRepeat: 'no-repeat', height:'300px'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2}>
                <div id="clouds" className="animation_layer parallax bg-[url('./image/clouds.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="mountainBack" className="animation_layer parallax bg-[url('./image/MoutainBack.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.4}>
                <div id="Name" className="animation_layer parallax flex justify-center top-1/3" style={{}}>
                    <h1 className={"font-gila text-6xl text-[color:var(--name-foreground)] "} style={{textShadow: 'var(--name-shadows)'}}>PIERRE VANHOVE</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div id="moutainMiddle" className="animation_layer parallax bg-[url('./image/MoutainMiddle.svg')] bottom-0" ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div id="moutainFront" className="animation_layer parallax bg-[url('./image/MountainFront.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={.99} speed={0.5}>
                <div className="w-full h-auto bg-[#5D002E] bottom-0 flex justify-center items-center z-20" style={{top:'0'}}>
                    <div className={"w-auto h-full flex-col justify-between items-center mt-50 mb-20"}>
                        <AboutMe/>
                        <Formations/>
                        <SkillTree/>
                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}