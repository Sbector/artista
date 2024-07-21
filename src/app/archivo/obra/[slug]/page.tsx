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
            <Wrapper className="justify-around sm:flex-row-reverse sm:justify-between">
                <div className="min-h-[calc(100vh/3)] sm:h-[calc(100vh/2)] flex">
                    <Image
                        className="
                        object-cover
                        mx-auto 
                        shadow-md shadow-neutral-800"
                        src={obra.imgsrc}
                        alt={obra.imgalt}
                        width={150}
                        height={100}
                        priority
                    />
                </div>
                <div className="max-h-[calc(100vh/3)] sm:min-h-[calc(100vh/2)] sm:w-1/2 relative">

                    <h1 className="font-medium py-2 text-lg border-b">
                        {obra.title}, <span className="font-light text-emerald-100">{obra.year}</span>
                    </h1>

                    <p className="
                    h-[100px] 
                    overflow-scroll
                    no-scrollbar
                    my-2
                        text-sm
                    ">
                        {obra.description}
                    </p>
                    <Button className="absolute left-0 bottom-[-30px]" href="/archivo/obra">obra</Button>
                </div>

            </Wrapper>

        </div>
    )
}