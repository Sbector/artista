import Button from "@/app/_components/Button"
import Link from "next/link"
import { Obras } from "@/app/constants"
import { Metadata } from "next"
import TextWrapper from "@/app/_components/TextWrapper"

export const metadata: Metadata = {
    title: "obras",
    description: "obras de sbector"
}

export default function ObrasPage() {
    return (
        <div id="obras">
            <TextWrapper >
                <h1 className="text-xl">obras</h1>
                <div className="relative">
                    <ul className="
                    max-h-[calc(100vh-230px)]
                    sm:h-[calc(100vh*0.4)]
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
                    <Button className="absolute right-0 bottom-[-30px]" href="/archivo">archivo</Button>
                </div>
                
            </TextWrapper>

        </div>
    )
}