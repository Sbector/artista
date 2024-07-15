"use client"
import { Obras } from "../../../constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Props } from "../../../types"
import Button from "@/app/_components/Button"

export default function Obra({ params, }: Props) {
    const pathname = usePathname()
    const obra = {
        title: "",
        year: "",
        description: ""
    }

    Obras.map(({ title, year, description }) => {

        if (pathname.includes(title)) {
            obra.title = title
            obra.year = year
            obra.description = description
        }
    })

    if (params.slug?.length === 1) {

        return (
            <div>
                <Button href="/archivo/obra">volver a obras</Button>
                <h1>{obra.title}</h1>
                <h2>{obra.year}</h2>
                <p>{obra.description}</p>
            </div>
        )
    } else {
        return (
            <div>
                <Button href="/archivo">archivo</Button>
                <h1>obras</h1>
                <ul>
                    {Obras.map(({ title, year }) => (
                        <li key={title}>
                            <Link href={`obra/${title}`}>{title},{year}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}