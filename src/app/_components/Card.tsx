import Image from "next/image"
import { Obra } from "../types"

export default function Card( {title, year, imgsrc, imgalt}: Obra ) {
    return (
        <div>
            <Image
            src={imgsrc? imgsrc : ""}
            alt={imgalt? imgalt : ""}
            width={400}
            height={400}
            priority
            />
            <span>{title}, {year}</span>
        </div>
    )
}