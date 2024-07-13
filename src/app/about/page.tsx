import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "acerca de sbector"
    },
    description: "información sobre sbector"
}

export default function About() {
    return (
        <div>
            <h1>sbector</h1>
            <p>Este es un sitio para reunir las obras realizadas o apadrinadas por Saúl Becerra Torres</p>
        </div>
    )
}