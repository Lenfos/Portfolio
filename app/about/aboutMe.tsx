"use client"

import {JSX} from "react";

export default function AboutMe({className}: {className?: string}): JSX.Element {
    return (
        <div className={`flex flex-col sm:flex-row gap-y-8 justify-center items-center ${className}`}>
            <div className="custom-radius bg-[url('/lofiMoi.webp')] md:w-2/3 md:max-w-2/3 max-w-[300px] w-2/3 lg:w-1/3  aspect-square bg-cover bg-[35%]"/>
            <div className={"px-5 max-w-[310px] md:max-w-full"}>
                <h2 className={"font-gila lg:text-6xl text-3xl text-[color:var(--text-foreground)]"}>Hello,<br/>I'm Pierre !</h2>
                <h3 className={"font-gila lg:text-2xl text-lg pt-1 pb-6 text-[color:var(--text-foreground)]"}>Game Developer and Game <br/>Designer</h3>
                <p className={"md:w-100 lg:text-lg text-xs font-raleway text-justify leading-tight text-[color:var(--text-foreground)]"}>Developer specialising in video games, with a degree in computer science from the University Institute of Technology in Dijon and a degree in game development from UQAC in Canada. Currently studying for a master's degree in Game Design, I am proficient in Unreal Engine and C++, enabling me to transform creative concepts into memorable interactive experiences.</p>
            </div>
        </div>
    )
}