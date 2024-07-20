import Button from "@/app/_components/Button"
import Link from "next/link"
import { Obras } from "@/app/constants"
import { Metadata } from "next"
import Wrapper from "@/app/_components/Wrapper"

export const metadata: Metadata = {
    title: "obras",
    description: "obras de sbector"
}

export default function ObrasPage() {
    return (
        <div id="obras">
            <Wrapper>
                <div>
                    <h1 className="text-xl text-center pb-8">obras Sbector</h1>
                    <ul>
                        {Obras.map(({ title, year, slug }) => (
                            <li key={slug} className="py-2">
                                <Link href={`obra/${slug}`}>
                                <span>{title},{year}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="
            absolute bottom-20
            ">
                    <Button href="/archivo">archivo</Button>
                </div>
            </Wrapper>
        </div>
    )
}