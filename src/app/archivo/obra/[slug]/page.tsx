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
            <Wrapper className="relative  
            grid grid-rows-7 gap-2
            landscape:grid-cols-5 landscape:grid-rows-1">
                <div className="
                row-span-5 
                landscape:col-span-3 landscape:pr-4
                ">
                    <iframe
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="300"
                        height="400"
                        src="https://sbector.com/paricutin/">
                    </iframe>
                </div>
                <div className="
                flex flex-col landscape:justify-end
                row-span-2 
                landscape:col-span-2">
                    <h1 className="font-medium text-lg">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    max-h-[50%] landscape:max-h-[75%]
                    overflow-scroll
                    no-scrollbar
                    my-2
                    text-sm
                    ">
                        {obra.description}
                    </p>

                </div>
                <Button className="absolute right-8 bottom-4" href="/archivo/obra">obra</Button>
            </Wrapper>

        </div>
    )
}