"use client";

import React, { useState } from "react";
import { Obra } from "../types";
import Button from "@/app/_components/Button";
import Wrapper from "@/app/_components/Wrapper";
import Image from "next/image";
import FullScreenIcon from "./icons/FullScreen";
import ExitFullScreenIcon from "./icons/ExitFullScreen";
import Link from "next/link";

export default function ObraPageClient({ obra }: { obra: Obra }) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div>
            <Wrapper className={`relative px-0 grid gap-2 ${
                isFullScreen? "flex": "grid-rows-9 grid-cols-1 landscape:grid-cols-6 landscape:grid-rows-1"
            }`}>
                <div className={`row-span-6 transition-all ${
                    isFullScreen? "absolute h-[100dvh] w-screen bg-black z-20": "relative landscape:col-span-3"
                }`}>
                    {obra.videosrc? (
                        <video 
                        src={obra.videosrc}
                        className="bg-black top-0 left-0 w-full h-full"
                        autoPlay loop muted>
                        </video>
                    ) : obra.iframesrc?(
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
                        className={`absolute right-2 text-emerald-100 w-8 h-8 bottom-4 ${
                            isFullScreen? "" : ""
                        }`}>
                        {isFullScreen ? 
                        <ExitFullScreenIcon className="size-4"/> : <FullScreenIcon className="size-4"/>}
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
                    {obra.appLink? (
                        <Link href={obra.appLink} target="blank" className="font-light text-emerald-100">ir a webapp</Link>
                    ) : (
                        <></>
                    )}
                    <Button className="absolute right-8 bottom-4" href="/archivo/obra">volver</Button>
                </div>

            </Wrapper>

        </div>
    );
}
