import { Metadata } from "next"
import Button from "../_components/Button"

export const metadata: Metadata = {
    title: "archivo",
    description: "archivo de sbector"
}

export default function archivo() {
    return (
        <div>

            <div className="text-center">
                <Button href="/archivo/obra">obra</Button>
                <Button href="/archivo/proyectos">proyectos</Button>
            </div>
        </div>
    )
}