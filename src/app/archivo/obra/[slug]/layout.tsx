import { Props } from "@/app/types";
import { Metadata } from "next"

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `${params.slug}`
    }
}

export default function ObraLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}