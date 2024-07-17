import Button from "@/app/_components/Button"
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
    }
    Obras.map(({ title, year, description, slug }) => {
        if (props.params.slug.includes(slug)) {
            obra.title = title
            obra.year = year
            obra.description = description
        }
    })
    return (
        <div>
            
            <h1>{obra.title}, {obra.year}</h1>
            <div className="h-[200px] w-[200px] bg-black"></div>
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
        </div>
    )
}