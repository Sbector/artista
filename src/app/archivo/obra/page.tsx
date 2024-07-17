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
        <>
            <div>
                <h1 className="text-xl text-center pb-8">obras Sbector</h1>
                <ul>
                    {Obras.map(({ title, year, slug }) => (
                        <li key={slug} className="py-2">
                            <Link href={`obra/${slug}`}>{title},{year}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="
            absolute bottom-20
            ">
                <Button href="/archivo">archivo</Button>
            </div>
        </>
    )
}