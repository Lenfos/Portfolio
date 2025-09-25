"use client"

import { isMobile } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Socials(){

    const SocialsList = [
        {
            id: 0,
            href : "https://linkedin.com/in/pierre-vanhove/",
            srcIcon : "/icons/linkedin.svg",
            alt: "LinkedIn link",
            description: "linkedin.com/in/pierre-vanhove",
        },
        {
            id: 1,
            href : "https://github.com/Lenfos",
            srcIcon : "/icons/github.svg",
            alt: "Github Link",
            description: "github.com/Lenfos",
        },
        {
            id: 2,
            href : "mailto:vanhove.pierre@proton.me",
            srcIcon : "/icons/mail.svg",
            alt: "Mail Link",
            description: "vanhove.pierre@proton.me",
        }
    ]

    return (
        isMobile() ?
        <div className={"flex justify-around w-full"}>
            {SocialsList.map((social, index) => (
                <div key={social.id} className={"bg-transparent w-[45px] aspect-square stroke-[color:var(--text-foreground)] rounded-full border-2 flex justify-center items-center"}>
                    <Link href={social.href} className={""} target="_blank">
                        <Image src={social.srcIcon} alt={social.alt} width={24} height={24}></Image>
                    </Link>
                </div>
            ))}
        </div> :
            <div className={"flex flex-col justify-evenly items-start w-full h-full"}>
                {SocialsList.map((social, index) => (
                    <div key={social.id}  className={"flex gap-4 items-center"}>
                        <div className={"bg-transparent w-[45px] aspect-square stroke-[color:var(--text-foreground)] rounded-full border-2 flex justify-center items-center"}>
                            <Link href={social.href} className={""} target="_blank">
                                <Image src={social.srcIcon} alt={social.alt} width={24} height={24}></Image>
                            </Link>
                        </div>
                        <Link href={social.href} className={"text-lg text-[color:var(--text-foreground)]"} target="_blank">
                            {social.description}
                        </Link>
                    </div>
                ))}
            </div>
    );
}