"use client"

import dynamic from "next/dynamic";

const Masonry = dynamic(() => import("@/components/Masonry"), {
    ssr: false,
});

export default function ProjectsList() {

    const list = [
        {
            id: "1",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "2",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 250,
        },
        {
            id: "3",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 600,
        },
        {
            id: "4",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 150,
        },
        {
            id: "5",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 350,
        },
        {
            id: "6",
            img: "/fleshHunt.jpeg",
            url: "https://example.com/one",
            height: 700,
        },
        {
            id: "7",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 500,
        },
        {
            id: "8",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 400,
        },
        {
            id: "9",
            img: "https://picsum.photos/id/1015/600/900?grayscale",
            url: "https://example.com/one",
            height: 200,
        }

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