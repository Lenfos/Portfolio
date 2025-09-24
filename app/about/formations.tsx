"use client"


export default function Formations({className} : { className?: string }) {

    return (
        <div className={`about-container ${className}`}>
            <p className={"about-text about-text-1 col-start-3 col-span-3 md:col-end-7 2xl:col-start-2 2xl:col-end-7 md:mr-5"}>I graduated from the University Institute of Technology in Dijon with a degree in computer science after three years studying application development and web development. This training gave me a solid foundation in programming and development, which now forms the basis of my technical expertise. I acquired a rigorous methodology and a structured approach to software development.</p>
            <p className={"about-text about-text-2 row-start-2 col-start-1 col-span-3 md:col-start-5 2xl:col-start-5 2xl:col-end-10 md:col-end-10 "}>I spent my third year at UQAC in Canada as part of a dual degree programme, allowing me to obtain my French degree and a Canadian one. I specialised in video game development with Unreal Engine, also exploring game design and online multiplayer development. This international experience opened up new perspectives for me while confirming my appetite for video game development.</p>
        </div>
    );
}