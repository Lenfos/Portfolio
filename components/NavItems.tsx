"use client"

import {useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import { isMobile } from "@/lib/utils";

type LinkItemProps = {
    label: string;
    href: string;
    setIsOpenAction?: (isOpen: boolean) => void; // optionnel si tu veux le réutiliser ailleurs
};

export default function NavItems({label, href, setIsOpenAction} : LinkItemProps) {
    const [hovered, setHovered] = useState(false);

    const clickNavMobile = () =>  {
        if (setIsOpenAction && isMobile()) {
            setIsOpenAction(false);
        }
    }

    return (
        isMobile() ?
            <div className={"flex flex-col w-fit"}>
                <div className={"flex space-x-3"}>
                    <Link href={href} className={"text-2xl font-raleway text-[color:var(--text-foreground)]"} onClick={clickNavMobile} >{label}</Link>
                    <img src="/arrowTopLeft.svg" alt="Link Decorator"/>
                </div>
                <div className={"border-t-2 border-[color:var(--text-foreground)] w-1/3"}/>
            </div>
            :
        <motion.div className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => {setHovered(false)}} whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
            <Link href={href} className={"text-[color:var(--nav-foreground)] font-raleway text-lg w-auto font-semibold"}>{label}</Link>
            <div className={`border-t-2 border-[color:var(--nav-foreground)] transition-all ease-in-out duration-300 ${hovered ? "w-10/12" : "w-0"} `}/>
        </motion.div>
    )
}