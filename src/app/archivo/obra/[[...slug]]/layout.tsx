export default function ObraLayout({
    params, children
}: {
    params: {
        slug: string[]
    },
    children: React.ReactNode
}) {
    if (params.slug?.length === 1) {
        return (
            <>
                {children}
                <h2>featured</h2>
                <div className="
                bg-red-600
                h-[100px]
                w-[100px]
                "></div>
            </>
        )
    }
    return (
        <>
            {children}
        </>
    )

}