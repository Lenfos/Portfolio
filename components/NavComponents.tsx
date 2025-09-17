"use client"

import {useState} from "react";
import NavItems from "@/components/NavItems";

export default function NavBar(){
    const [hovered, setHovered ] = useState(false);

    return (
        <div className="h-17 w-lg sticky z-100 nav flex justify-evenly items-center m-auto mt-8">
            <NavItems href={"/"} label={"Home"}/>
            <NavItems href={"/projects"} label={"Projects"}/>
            <NavItems href={"/skills"} label={"Skills"}/>
        </div>
    );
}