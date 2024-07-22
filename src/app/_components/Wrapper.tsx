export default function Wrapper({ 
    children, 
    className 
}:{
    children: React.ReactNode,
    className?: any
}) {
    return (
        <div className={`${className}
        flex flex-col
        h-[calc(100vh-97px)]
        py-6
        px-10 snap-start
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        `}>
            {children}
        </div>
    )
}