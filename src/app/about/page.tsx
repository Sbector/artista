import { Metadata } from "next"
import Wrapper from "../_components/Wrapper"

export const metadata: Metadata = {
    title: {
        absolute: "acerca de sbector"
    },
    description: "información sobre sbector"
}

export default function About() {
    return (
        <div>
            <Wrapper>
                <p>Este es un sitio para reunir las obras realizadas o apadrinadas por sbector.</p>
            </Wrapper>
        </div>
    )
}