"use client"


import ProjectsParallax from "@/app/projects/projectsParallax";

export default function Projects() {
    return (
        <div className="d font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#5D002E]">
            <ProjectsParallax/>
        </div>
    );
}