"use client"

import {Parallax, ParallaxLayer} from "@react-spring/parallax";

export default function ProjectsParallax(){
    return (
        <Parallax pages={2} style={{top:'0', left: '0'}} className="animation">
            <ParallaxLayer offset={0} speed={0.1}>
                <div id={"CaveBackground"} className={"animation_layer parallax caveParallaxBackground"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.4}>
                <div id="Name" className="animation_layer parallax flex justify-center align-center">
                    <div className="bg-[url('./image/Cave/ProjectsText.svg')] bg-top bg-contain bg-no-repeat self-center" style={{width:'75%', height:'40%'}}/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div id={"MountainMiddleTop"} className={"animation_layer parallax bg-[url('./image/Cave/MountainMiddle.svg')]"} style={{backgroundPosition:'top center'}}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div id={"MoutainFrontTop"} className={"animation_layer parallax bg-[url('./image/Cave/MountainFront.svg')]"} style={{backgroundPosition:'top center'}}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div id={"MountainBackBot"} className={"animation_layer parallax bg-[url('./image/Cave/MountainBackBot.svg')] bottom-0"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div id={"MountainMiddleBot"} className={"animation_layer parallax bg-[url('./image/Cave/MountainMiddleBot.svg')] bottom-0"}/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div id={"MountainFrontBot"} className={"animation_layer parallax bg-[url('./image/Cave/MountainFrontBot.svg')] bottom-0"}/>
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