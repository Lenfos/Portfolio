"use client"

import AboutMe from "./aboutMe";
import Formations from "@/app/about/formations";
import SkillTree from "@/app/about/skilltree";
import ProfileCard from "@/app/about/profileCard";

export default function MobilePage(){
    return (
        <div className={"w-screen mb-15 flex flex-col gap-15 items-center"}>
            <div className={"bg-[url('/Mobile/AboutBg.svg')] bg-cover w-screen bg-no-repeat aspect-video"}/>
            <AboutMe className={""}/>
            <Formations className={""}/>
            <SkillTree/>
            <ProfileCard/>
        </div>
    )
}