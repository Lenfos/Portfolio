"use client"

import ParallaxScene from "@/app/about/parallaxScene";
import {isMobile} from "@/lib/utils";
import MobilePage from "@/app/about/MobilePage";


export default function AboutPage(){
    return (
        isMobile() ?
            <div className={"mobileWrapper"}>
                <MobilePage/>
            </div> :
        <div className={"parallaxWrapper"}>
           <ParallaxScene/>
        </div>
    );
}