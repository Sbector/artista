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
            <Wrapper className="">
                <h1 className="text-xl">obras</h1>
                <div>
                    <ul className="
                        max-h-[calc(100vh-230px)]
                    overflow-scroll
                    no-scrollbar
                    my-2">
                        {Obras.map(({ title, year, slug }) => (
                            <li key={slug} className="py-2 text-sm border-b">
                                <Link href={`obra/${slug}`}>
                                    <span>{title},{year}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button className="absolute bottom-[40px]" href="/archivo">archivo</Button>
            </Wrapper>

        </div>
    )
}