"use client"
import { Obras } from "../../../constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Props } from "../../../types"

export default function Obra({ params, }: Props) {
    const pathname = usePathname()

    if (params.slug?.length === 1 ) {
        return (
            <div>
                <Link href="/archivo/obra">volver a obras</Link>
                <h1>{params.slug}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>obras</h1>
                <ul>
                    {Obras.map(({ title, year, descripttion }) => (
                        <li key={title}>
                            <Link href={`obra/${title}`}>{title},{year}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}