"use client"

import {Parallax, ParallaxLayer} from "@react-spring/parallax";


export default function SkillsParallax() {
    return (
        <Parallax pages={2} style={{top:'0', left: '0'}} className="animation">
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="background" className="animation_layer parallax bg-[url('./image/Desert/desertBG.svg')]" style={{backgroundSize:'cover'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="mountainBack" className="animation_layer parallax bg-[url('./image/Desert/desertMoutainBack.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.4}>
                <div id="Name" className="animation_layer parallax align-middle justify-center flex top-1/8">
                    <h1 className={"font-gila skillsTitle"}>SKILLS</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div id="moutainMiddle" className="animation_layer parallax bg-[url('./image/Desert/desertMoutainMiddle.svg')] bottom-0" ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div id="moutainFront" className="animation_layer parallax bg-[url('./image/Desert/desertMountainFront.svg')] bottom-0"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={.99} speed={0.5}>
                <div className="w-full h-auto bg-[#5D002E] bottom-0 flex justify-center items-center z-20" style={{top:'0'}}>
                    <div className={"w-auto h-full flex-col justify-between items-center mt-50"}>

                    </div>
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}