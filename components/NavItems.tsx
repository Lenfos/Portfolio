"use client"

import {useState} from "react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function NavItems({label, href}: {label: string; href: string}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div className="flex flex-col" onHoverStart={() => setHovered(true)} onHoverEnd={() => {setHovered(false)}} whileTap={{scale: 0.95}} whileHover={{scale: 1.1}}>
            <Link href={href} className={"text-[color:var(--nav-foreground)] font-raleway text-lg w-auto font-semibold"}>{label}</Link>
            <div className={`border-t-2 border-[color:var(--nav-foreground)] transition-all ease-in-out duration-300 ${hovered ? "w-10/12" : "w-0"} `}/>
        </motion.div>
    )
}