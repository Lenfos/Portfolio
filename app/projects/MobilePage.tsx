"use client"

import ProjectsList from "@/app/projects/projectsList";

export default function MobilePage() {
    return (
        <div className={"w-screen mb-15 flex flex-col gap-15"}>
            <div className={"bg-[url('/Mobile/ProjectsBG.svg')] bg-cover w-screen bg-no-repeat aspect-video"}/>
            <div className={"px-10"}>
                <ProjectsList/>
            </div>
        </div>
    )
}