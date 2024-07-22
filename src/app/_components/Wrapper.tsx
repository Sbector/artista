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
        justify-center
        h-screen
        mt-[-97px]
        pt-[110px]
        pb-[15px]
        px-10 snap-start
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        `}>
            {children}
        </div>
    )
}