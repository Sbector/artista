import Button from "@/app/_components/Button"
import Wrapper from "@/app/_components/Wrapper"
import Image from "next/image"
import { Obras } from "@/app/constants"

export async function generateStaticParams() {
    const obras = await Obras

    return obras.map((obra) => ({
        slug: obra.slug,
    }))
}

export default function ObraPage(props: any) {
    const slug = props.params.slug
    const obra = {
        title: "",
        year: "",
        description: "",
        slug: "",
        imgsrc: "",
        imgalt: "",
    }
    Obras.map(({ title, year, description, slug, imgsrc, imgalt }) => {
        if (props.params.slug.includes(slug)) {
            obra.title = title
            obra.year = year
            obra.description = description
            obra.imgsrc = imgsrc
            obra.imgalt = imgalt
        }
    })
    return (
        <div>
            <Wrapper>
                <h1>{obra.title}, {obra.year}</h1>
                <Image
                    src={obra.imgsrc}
                    alt={obra.imgalt}
                    width={200}
                    height={100}
                    priority
                />
                <div className="
            max-h-52 
            overflow-scroll
            no-scrollbar
            my-2">
                    <p className="
                text-sm
                
                ">{obra.description}</p>
                </div>
                <Button href="/archivo/obra">obra</Button>
            </Wrapper>
        </div>
    )
}