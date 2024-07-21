import { Metadata } from "next"
import Button from "../_components/Button"
import Wrapper from "../_components/Wrapper"

export const metadata: Metadata = {
    title: "archivo",
    description: "archivo de sbector"
}

export default function archivo() {
    return (
        <div>
            <Wrapper className="justify-center">
                <div className="flex justify-around">
                    <Button href="/archivo/obra">obra</Button>
                    <Button href="/archivo/proyectos">proyectos</Button>
                </div>
            </Wrapper>
        </div>
    )
}