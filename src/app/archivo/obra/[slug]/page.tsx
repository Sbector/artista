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
            obra.slug = slug
            obra.imgsrc = imgsrc
            obra.imgalt = imgalt
            obra.iframesrc = iframesrc
        }
    })
    return (

        <div>
            <Wrapper className="relative
            px-0  
            grid grid-rows-9 gap-2
            landscape:grid-cols-6 landscape:grid-rows-1">
                <div className="
                row-span-6 
                landscape:col-span-3 landscape:pr-4
                ">
                    <iframe
                        id={obra.slug}
                        title={obra.title}
                        src={obra.iframesrc}
                        className="top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <div className="
                px-8
                flex flex-col landscape:justify-end
                row-span-3 
                landscape:col-span-3 landscape:pr-3">
                    <h1 className="font-medium text-lg">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    max-h-[60%] landscape:max-h-[75%]
                    overflow-scroll
                    no-scrollbar
                    my-2
                    text-sm
                    ">
                        {obra.description}
                    </p>
                    <Button className="absolute right-8 bottom-4" href="/archivo/obra">obra</Button>
                </div>
                
            </Wrapper>

        </div>
    )
}