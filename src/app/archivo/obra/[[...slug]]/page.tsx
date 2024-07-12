export default function Obra( {
    params,
}: {
    params:{
        slug:string[]
    }
} ) {
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