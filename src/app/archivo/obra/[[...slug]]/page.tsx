import { Metadata } from "next"

export const generateMetadata = ( {params} : Props): Metadata => {
    if(params.slug?.length === 1){
        return {
            title:`${params.slug}`
        }
    } else {
        return {
            title:"obras"
        }
    }
    
}

type Props = {
    params: {
        slug:string[]
    }
}

export default function Obra( {params,}: Props ) {
    if (params.slug?.length === 2){
        return (
            <div>
            <h1>{params.slug[0]}: {params.slug[1]}</h1>
        </div>
        )
    } else if (params.slug?.length === 1) {
        return (
            <div>
                <h1>{params.slug[0]}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>obra</h1>
        </div>
    )
}