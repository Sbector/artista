import { Obras } from "@/app/constants";
import ObraPageClient from "@/app/_components/ObraPageClient"

export async function generateStaticParams() {
    const obras = await Obras;

    return obras.map((obra) => ({
        slug: obra.slug,
    }));
}

export default function ObraPage({ params }: { params: { slug: string } }) {
    const obra = Obras.find(({ slug }) => slug === params.slug) || {
        title: "",
        year: "",
        description: "",
        slug: "",
        imgsrc: "",
        imgalt: "",
        iframesrc: "",
        videosrc: "",
        appLink: ""
    };

    return <ObraPageClient obra={obra} />;
}
