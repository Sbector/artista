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
        text-sm md:text-base lg:text-xl xl:texl-2xl
        h-[100dvh]
        mt-[-75px]
        pt-[85px]
        pb-[15px]
        px-0 snap-start
        landscape:pt-[95px]
        `}>
            {children}
        </div>
    )
}