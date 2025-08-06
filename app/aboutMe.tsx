"use client"

export default function AboutMe() {
    return (
        <div className={"grid grid-cols-2 gap-4 h-full pt-5"}>
            <div className="custom-radius bg-[url('/lofiMoi.jpg')] h-2/3 aspect-square bg-cover bg-[35%] "/>
            <div>
                <h2 className={"font-gila text-6xl"}>Hello,<br/>I'm Pierre !</h2>
                <h3 className={"font-gila text-2xl py-2"}>Game Developer and Game <br/>Designer</h3>
            </div>
        </div>
    )
}