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
            <Wrapper className="relative grid grid-rows-2 landscape:flex landscape:flex-row-reverse">
                <div className="landscape:min-w-[50%] landscape:pl-2">
                    <Image
                        className="
                        object-cover
                        mx-auto
                        w-full
                        h-full 
                        shadow-md shadow-neutral-800"
                        src={obra.imgsrc}
                        alt={obra.imgalt}
                        width={150}
                        height={100}
                        priority
                    />
                </div>
                <div className="pr-2">

                    <h1 className="font-medium pt-2 text-lg">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    max-h-[65%] landscape:max-h-[70%]
                    overflow-scroll
                    no-scrollbar
                    my-2
                    
                    text-sm
                    ">
                        {obra.description}
                    </p>
                    
                </div>
                <Button className="absolute left-8 bottom-4" href="/archivo/obra">obra</Button>
            </Wrapper>

        </div>
    )
}