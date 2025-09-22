"use client"

export default function AboutMe() {
    return (
        <div className={"h-auto flex justify-center items-center gap-12"}>
            <div className="custom-radius bg-[url('/lofiMoi.webp')] h-full w-1/3 aspect-square bg-cover bg-[35%]"/>
            <div>
                <h2 className={"font-gila text-6xl text-[color:var(--text-foreground)]"}>Hello,<br/>I'm Pierre !</h2>
                <h3 className={"font-gila text-2xl pt-1 pb-6 text-[color:var(--text-foreground)]"}>Game Developer and Game <br/>Designer</h3>
                <p className={"w-100 text-lg font-raleway text-justify leading-tight text-[color:var(--text-foreground)]"}>Developer specialising in video games, with a degree in computer science from the University Institute of Technology in Dijon and a degree in game development from UQAC in Canada. Currently studying for a master's degree in Game Design, I am proficient in Unreal Engine and C++, enabling me to transform creative concepts into memorable interactive experiences.</p>
            </div>
        </div>
    )
}