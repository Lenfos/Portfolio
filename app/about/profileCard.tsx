'use client'

import {isMobile} from "@/lib/utils";
import Image from "next/image";
import Socials from "@/app/about/Socials";
import FadeIn from "@/components/FadeIn";

export default function ProfileCard(){

    return(
        isMobile() ?
            <div className="profileCardDivOuter">
                <div className="profileCardDivInter">
                    <div className="flex flex-col space-y-4">
                        <FadeIn>
                            <Image width={130} height={130} alt={"Profile Picture"} src={"/photo.jpg"} className={"rounded-full self-center"}></Image>
                        </FadeIn>
                        <div>
                            <FadeIn delay={0.3}>
                                <h2 className={"font-gila text-lg text-[color:var(--text-foreground)] text-center"}>Pierre Vanhove</h2>
                            </FadeIn>
                            <FadeIn delay={0.35}>
                                <h3 className={"font-raleway font-extralight text-[color:var(--text-foreground)] text-center"}>Game Developer</h3>
                            </FadeIn>
                        </div>
                    </div>
                    <div className={"w-full"}>
                        <Socials/>
                    </div>
                </div>
            </div> :
            <div>
                <div className="profileCardDivOuter">
                    <div className="profileCardDivInter space-x-10 items-center">
                        <Image alt={"logo decoration"} src={"/logo.svg"} className={"absolute top-10 right-0"} width={"50"} height={"50"}/>
                        <div className="flex flex-col space-y-4">
                            <FadeIn>
                                <Image width={315} height={315} alt={"Profile Picture"} src={"/photo.jpg"} className={"rounded-full self-center"}></Image>
                            </FadeIn>
                            <div>
                                <FadeIn delay={0.3}>
                                    <h2 className={"font-gila text-2xl text-[color:var(--text-foreground)] text-center"}>Pierre Vanhove</h2>
                                </FadeIn>
                                <FadeIn delay={0.35}>
                                    <h3 className={"font-raleway text-lg font-extralight text-[color:var(--text-foreground)] text-center"}>Game Developer</h3>
                                </FadeIn>
                            </div>
                        </div>
                        <div className={"bg-[color:var(--text-foreground)] h-3/4 w-1 rounded-2xl"}/>
                        <div className={"w-full h-2/3"}>
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
    );
}