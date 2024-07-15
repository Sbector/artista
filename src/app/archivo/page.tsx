import { Metadata } from "next"
import Button from "../_components/Button"

export const metadata: Metadata = {
    title: "archivo",
    description: "archivo de sbector"
}

export default function archivo() {
    return (
        <div>
            <h1>archivo</h1>
            <Button href="/archivo/obra">obra</Button>
            <Button href="/archivo/proyectos">proyectos</Button>
        </div>
    )
}