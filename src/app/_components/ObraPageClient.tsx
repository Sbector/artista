"use client";

import React, { useState } from "react";
import Button from "@/app/_components/Button";
import Wrapper from "@/app/_components/Wrapper";
import Image from "next/image";

export default function ObraPageClient({ obra }: { obra: any }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div>
            <Wrapper className={`relative px-0 grid gap-2 ${
                isFullScreen? "flex": "grid-rows-9 landscape:grid-cols-6 landscape:grid-rows-1"
            }`}>
                <div className={`row-span-6 transition-all ${
                    isFullScreen? "absolute h-[100dvh] w-screen bg-black z-20": "relative landscape:col-span-3 landscape:pr-4"
                }`}>
                    {obra.iframesrc?(
                        <iframe
                        id={obra.slug}
                        title={obra.title}
                        src={obra.iframesrc}
                        className="top-0 left-0 w-full h-full"
                        allowFullScreen
                    />
                    ): (
                        <Image
                        src={obra.imgsrc}
                        alt={obra.imgalt}
                        layout="fill"
                        objectFit={`${isFullScreen? "contain": "cover"}`}
                        priority
                    />
                    )}
                    
                    <button
                        onClick={toggleFullScreen}
                        className={`absolute right-4 text-sm text-emerald-100 px-4 transition-all animate-pulse ${
                            isFullScreen? "w-8 h-8 bottom-4" : "top-4"
                        }`}>
                        {isFullScreen ? "X" : "Fullscreen"}
                    </button>
                </div>
                <div className="
                    px-8
                    flex flex-col landscape:justify-center
                    row-span-3 
                    landscape:col-span-3 landscape:pr-3">
                    <h1 className="font-medium 
                    text-xl xl:text-3xl">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    max-h-[60%] landscape:max-h-[75%]
                    overflow-scroll
                    no-scrollbar
                    my-2
                    ">
                        {obra.description}
                    </p>
                    <Button className="absolute right-8 bottom-4" href="/archivo/obra">obra</Button>
                </div>

            </Wrapper>

        </div>
    );
}
