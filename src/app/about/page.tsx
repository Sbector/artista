import { Metadata } from "next"
import TextWrapper from "../_components/TextWrapper"

export const metadata: Metadata = {
    title: {
        absolute: "acerca de sbector"
    },
    description: "información sobre sbector"
}

export default function About() {
    return (
        <div>
            <TextWrapper>
                <p>Este es un sitio para reunir las obras realizadas o apadrinadas por sbector.</p>
            </TextWrapper>
        </div>
    )
}