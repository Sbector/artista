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
        iframesrc: ""
    }
    const haveiframe = false

    Obras.map(({ title, year, description, slug, imgsrc, imgalt, iframesrc }) => {
        if (props.params.slug.includes(slug)) {
            obra.title = title
            obra.year = year
            obra.description = description
            obra.imgsrc = imgsrc
            obra.imgalt = imgalt
            obra.iframesrc = iframesrc
        }
    })
    return (

        <div>
            <Wrapper className="sm:flex-row-reverse sm:justify-between">
                <div className="
                sm:w-1/2 p-2">
                    <Image
                        className="
                        object-cover
                        h-1/3
                        my-7 mx-auto 
                        shadow-md shadow-neutral-800"
                        src={obra.imgsrc}
                        alt={obra.imgalt}
                        width={150}
                        height={100}
                        priority
                    />
                </div>
                <div className="sm:w-1/2">

                    <h1 className="font-medium py-2 text-lg border-b">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    max-h-36 
                    overflow-scroll
                    no-scrollbar
                    my-2
                        text-sm
                    ">
                        {obra.description}
                    </p>

                </div>
                <Button className="absolute bottom-[40px]" href="/archivo/obra">obra</Button>
            </Wrapper>
            
        </div>
    )
}