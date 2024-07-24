import { Metadata } from "next"
import Button from "../_components/Button"
import TextWrapper from "../_components/TextWrapper"

export const metadata: Metadata = {
    title: "archivo",
    description: "archivo de sbector"
}

export default function archivo() {
    return (
        <div>
            <TextWrapper className="grid grid-cols-2">
                <div className="flex justify-around">
                    <Button href="/archivo/obra">obra</Button>
                    <Button href="/archivo/proyectos">proyectos</Button>
                </div>
            </TextWrapper>
        </div>
    )
}