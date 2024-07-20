import { Metadata } from "next"
import Wrapper from "../_components/Wrapper"

export const metadata: Metadata = {
    title: "contacto",
    description: "contactar con sbector"
}

export default function Contacto() {
    return (
        <div>
            <Wrapper>
                <h1 className="text-xl text-center pb-8">contacto</h1>
            </Wrapper>
        </div>
    )
}