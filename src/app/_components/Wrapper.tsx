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
        mt-[-75px]
        pt-[85px]
        pb-[15px]
        px-10 snap-start
        landscape:pt-[95px]
        landscape:pb-[25px]
        `}>
            {children}
        </div>
    )
}