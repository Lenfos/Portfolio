"use client"

import Image from "next/image";
import {isMobile} from "@/lib/utils";
import FadeIn from "@/components/FadeIn";

export default function SkillTree() {

    return (
        <FadeIn>
            <div className="2xl:px-40 xl:px-20 md:px-20 px-5">
                <Image
                    src={isMobile() ? "/Mobile/MobileSkilltree.svg" : "/Skilltree.svg"}
                    alt="Skilltree"
                    width={1200}
                    height={700}
                    className="w-full h-auto"
                />
            </div>
        </FadeIn>
    );
}