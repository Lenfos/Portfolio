"use client"

import Link from "next/link";

export default function NavBar(){


    return (
        <div className="h-17 w-lg sticky z-100 nav flex justify-evenly items-center m-auto mt-8">
            <Link href={"/"} className={"text-[color:var(--nav-foreground)] font-raleway text-xl w-auto font-bold"}>Home</Link>
            <Link href={"/projects"} className={"text-[color:var(--nav-foreground)] font-raleway text-xl w-auto font-bold"}>Projects</Link>
            <Link href={"/skills"} className={"text-[color:var(--nav-foreground)] font-raleway text-xl w-auto font-bold"}>Skills</Link>
        </div>
    );
}