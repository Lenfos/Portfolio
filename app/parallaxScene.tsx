'use client'

import {Parallax, ParallaxLayer} from "@react-spring/parallax";

export default function ParallaxScene() {
    return(
        <Parallax pages={2} style={{top:'0', left: '0', height:'100vh'}} className="animation">
            <ParallaxLayer offset={0} speed={0.1}>
                <div id="background" className="animation_layer parallax bg-[url('./image/Background.svg')] bottom-0 top-0" style={{backgroundSize: 'cover'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.15}>
                <div id="stars" className="animation_layer parallax bg-[url('./image/Stars.svg')] bottom-0 left-30" style={{width:'60em', top: '-40em'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div id="sun" className="animation_layer parallax bg-[url('./image/Sun.svg')] right-70 top-70" style={{backgroundRepeat: 'no-repeat', height:'300px'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
                <div id="clouds" className="animation_layer parallax bg-[url('./image/clouds.svg')] bottom-0" style={{top: '-22em'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
                <div id="mountainBack" className="animation_layer parallax bg-[url('./image/MoutainBack.svg')] bottom-0" style={{top:'-8em'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.4}>
                <div id="Name" className="animation_layer parallax bottom-0" style={{top: '20em'}}>
                    <h1 className={"font-gila text-4xl text-[color:var(--name-foreground)]"} style={{textShadow: 'var(--name-shadows)'}}>PIERRE VANHOVE</h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div id="moutainMiddle" className="animation_layer parallax bg-[url('./image/MoutainMiddle.svg')] bottom-0" style={{top: '-8em'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.3}>
                <div className="w-full h-screen bg-[#5F0130] bottom-0" style={{top:'0'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.6}>
                <div id="moutainFront" className="animation_layer parallax bg-[url('./image/MountainFront.svg')] bottom-0" style={{top:'-10em', backgroundSize: 'contain'}}></div>
            </ParallaxLayer>


        </Parallax>
    )
}