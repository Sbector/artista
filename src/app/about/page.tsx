import { Metadata } from "next"
import TextWrapper from "../_components/TextWrapper"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: "acerca de sbector"
    },
    description: "información sobre sbector"
}

export default function About() {
    return (
        <div>
            <TextWrapper className="felx ">
                <div className="">
                    <h1 className="text-center text-lg font-semibold text-emerald-100 pb-6 md:text-3xl md:pb-10">acerca de...</h1>
                    <p className="pb-4 text-pretty">este un poryecto de uso libre para generar sitios de artista y/o coleccionista. con esta herramienta puedes crear colecciones de objetos a través de diferentes recursos de reproducción (texto, imagen, video, 3d, etc.).</p>
                    <p></p>
                </div>
            </TextWrapper>
        </div>
    )
}