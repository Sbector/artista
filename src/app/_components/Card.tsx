import Image from "next/image"
import { Proyecto } from "../types"

export default function Card( {title, year, imgsrc, imgalt}: Proyecto ) {
    return (
        <div>
            <Image
            src={imgsrc? imgsrc : ""}
            alt={imgalt? imgalt : ""}
            width={200}
            height={100}
            priority
            />
            <span>{title}, {year}</span>
        </div>
    )
}