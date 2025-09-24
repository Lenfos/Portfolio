"use client"

import {useState} from "react";
import NavItems from "@/components/NavItems";
import {isMobile} from "@/lib/utils";

export default function NavBar(){

    return (
        isMobile() ?
            <div/> :
        <div className="h-17 w-lg nav flex justify-evenly items-center m-auto mt-8">
            <NavItems href={"/"} label={"Home"}/>
            <NavItems href={"/projects"} label={"Projects"}/>
            <NavItems href={"/skills"} label={"Skills"}/>
        </div>
    );
}