"use client"

import Image from "next/image";
import {isMobile} from "@/lib/utils";

export default function SkillTree() {

    return (
        <div className="2xl:px-40 xl:px-20 md:px-10 md:mt-30 px-5">
            <Image src={isMobile() ? "/Mobile/MobileSkilltree.svg" : "/Skilltree.svg"} alt="Skilltree" width={(screen.width)} height={screen.height} />
        </div>
    );
}