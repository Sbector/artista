'use client'
import Link from "next/link"
import Button from "@/app/_components/Button"
import { usePathname } from "next/navigation"
import { Props } from "@/app/types"
import { Obras } from "@/app/constants"

export default function ObraPage({
    params,
}: Props
) {
    const pathname = usePathname()
    const obra = {
        title: "",
        year: "",
        description: ""
    }

    Obras.map(({ title, year, description, slug }) => {

        if (pathname.includes(slug)) {
            obra.title = title
            obra.year = year
            obra.description = description
        }
    })

    return (
        <div>
            <Button href="/archivo/obra">volver a obras</Button>
            <h1>{obra.title},{obra.year}</h1>
            <p>{obra.description}</p>
        </div>
    )
}