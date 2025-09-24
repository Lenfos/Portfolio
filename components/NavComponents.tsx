"use client"

import {useEffect, useState} from "react";
import NavItems from "@/components/NavItems";
import {isMobile} from "@/lib/utils";
import {AnimatePresence, motion, Transition} from "framer-motion";
import Link from "next/link";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const transition = {
        duration: 0.8,
        type: "spring" as const,
        bounce: 0,
    };

    return (
        isMobile() ?
            <>
                <button
                    className="z-[100] absolute top-5 right-5"
                    onClick={() => setIsOpen(!isOpen)}>

                    <img src="/menu.svg" alt="Menu Button" className="size-8" />
                </button>

                {/* Menu overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ top: "-100vh" }}
                            animate={{ top: 0 }}
                            exit={{ top: "-100vh" }}
                            transition={transition}
                            className="w-screen h-screen absolute z-[200] bg-[#5D002E] top-0">

                            <nav className="space-y-6 flex flex-col w-full h-full pt-50 pl-10 ">
                                <NavItems href={"/"} label={"Home"} setIsOpenAction={setIsOpen}/>
                                <NavItems href={"/projects"} label={"Projects"} setIsOpenAction={setIsOpen}/>
                            </nav>

                            <button className="absolute top-5 right-5" onClick={() => setIsOpen(false)}>
                                <img src="/close.svg" alt="close button" className={"size-8"}/>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
             :
        <div className="h-17 w-lg nav flex justify-evenly items-center m-auto mt-8">
            <NavItems href={"/"} label={"Home"}/>
            <NavItems href={"/projects"} label={"Projects"}/>
        </div>
    );
}