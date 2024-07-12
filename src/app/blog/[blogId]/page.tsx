export default function Blog( {
    params,
} : {
    params: { blogId: string }
} ) {
    return (
        <div>
            <h1>{params.blogId}</h1>
        </div>
    )
}