"use client"


import ProjectsParallax from "@/app/projects/projectsParallax";
import MobilePage from "@/app/projects/MobilePage";
import {isMobile} from "@/lib/utils";

export default function Projects() {
    return (
        isMobile() ?
            <div className={"mobileWrapper"}>
                <MobilePage/>
            </div> :
        <div className="parallaxWrapper">
            <ProjectsParallax/>
        </div>
    );
}