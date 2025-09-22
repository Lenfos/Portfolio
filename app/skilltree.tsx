"use client"

import Image from "next/image";

export default function SkillTree() {

    return (
        <div className="2xl:px-40 xl:px-20 px-10 mt-30">
            <Image src={"/Skilltree.svg"} alt="Skilltree" width={(screen.width)} height={screen.height} />
        </div>
    );
}