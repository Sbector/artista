import Button from "@/app/_components/Button"
import Link from "next/link"
import { Obras } from "@/app/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "obras",
    description: "obras de sbector"
}

export default function Obra() {
    return (
        <div>
            <Button href="/archivo">archivo</Button>
            <h1>obras Sbector</h1>
            <ul>
                    {Obras.map(({ title, year, slug }) => (
                        <li key={slug}>
                            <Link href={`obra/${slug}`}>{title},{year}</Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
}