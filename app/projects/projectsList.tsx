"use client"

import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("@/components/Masonry"), {
    ssr: false,
});

export default function ProjectsList() {

    const list = [
        {
            id: "1",
            img: "/mad-space.jpg",
            url: "https://example.com/one",
            height: 500,
        },
        {
            id: "2",
            img: "/learn2switchClear.jpg",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "3",
            img: "/sidera.jpg",
            url: "https://example.com/one",
            height: 700,
        },
        {
            id: "4",
            img: "/ziggyClear.jpg",
            url: "https://example.com/one",
            height: 600,
        },
        {
            id: "6",
            img: "/fleshHunt.jpeg",
            url: "https://example.com/one",
            height: 900,
        },
        {
            id: "7",
            img: "/eclipse-arena.jpg",
            url: "https://example.com/one",
            height: 900,
        },
        {
            id: "0",
            img: "/moreToCome.jpg",
            url: "/projects",
            height: 400,
        },


    ]

    return(
            <Masonry
                items={list}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={true}/>
    );
}