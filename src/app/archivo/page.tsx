import Button from "../_components/Button"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "archivo",
    description: "archivo de sbector"
}

export default function Archivo() {
    return (
        <div>
            <h1>archivo</h1>
            <Button href="/archivo/obra">obra</Button>
            <Button href="/archivo/proyectos">proyectos</Button>
        </div>
    )
}