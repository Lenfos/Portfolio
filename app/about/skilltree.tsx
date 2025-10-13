"use client"

import Image from "next/image";
import {isMobile} from "@/lib/utils";
import FadeIn from "@/components/FadeIn";

export default function SkillTree() {

    return (
        <FadeIn>
            <div className="2xl:px-40 xl:px-20 md:px-20 px-5 md:scale-75 xl:scale-100">
                <Image src={isMobile() ? "/Mobile/MobileSkilltree.svg" : "/Skilltree.svg"} alt="Skilltree" width={(screen.width)} height={screen.height} />
            </div>
        </FadeIn>
    );
}