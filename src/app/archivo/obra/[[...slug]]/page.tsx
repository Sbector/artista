"use client"
import { Obras } from "../../../constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Props } from "../../../types"

export default function Obra({ params, }: Props) {
    const pathname = usePathname()

    if (params.slug?.length === 1) {
        Obras.map(({ title, year, description }) => {
        })

        return (
            <div>
                <Link href="/archivo/obra">volver a obras</Link>
                {Obras.map(({ title, year, description }) => {
                    console.log(pathname)
                    if (pathname.includes(title)) {
                        return (
                            <>
                                <h1>{title}</h1>
                                <h2>{year}</h2>
                                <p>{description}</p>
                            </>
                        )
                    }

                })
                }


            </div>
        )
    } else {
        return (
            <div>
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