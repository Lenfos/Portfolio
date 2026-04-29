"use client"

import {JSX} from "react";
import FadeIn from "@/components/FadeIn";

export default function AboutMe({className}: {className?: string}): JSX.Element {
    return (
        <div className={`flex flex-col sm:flex-row gap-y-8 justify-center items-center ${className}`}>
            <div className="custom-radius bg-[url('/lofiMoi.webp')]
        w-[250px] h-[250px]
        sm:w-[280px] sm:h-[280px]
        md:w-[320px] md:h-[320px]
        lg:w-[380px] lg:h-[380px]
        xl:w-[420px] xl:h-[420px]
        shrink-0
        bg-cover bg-[35%]"/>
            <div className={"px-5 max-w-[310px] md:max-w-full"}>
                <FadeIn>
                    <h2 className={"font-gila lg:text-6xl text-3xl text-[color:var(--text-foreground)]"}>Hello,<br/>I'm Pierre !</h2>
                </FadeIn>
                <FadeIn>
                    <h3 className={"font-gila lg:text-2xl text-lg pt-1 pb-6 text-[color:var(--text-foreground)]"}>Game Developer and Game <br/>Designer</h3>
                </FadeIn>
                <FadeIn>
                    <p className={"md:w-100 lg:text-lg text-xs font-raleway text-justify leading-tight text-[color:var(--text-foreground)]"}>Developer specialising in video games, with a degree in computer science from the University Institute of Technology in Dijon and a degree in game development from UQAC in Canada. Currently studying for a master's degree in Game Design, I am proficient in Unreal Engine and C++, enabling me to transform creative concepts into memorable interactive experiences.</p>
                </FadeIn>
            </div>
        </div>
    )
}