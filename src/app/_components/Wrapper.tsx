export default function Wrapper({ 
    children, 
    className 
}:{
    children: React.ReactNode,
    className?: any
}) {
    return (
        <div className={`flex flex-col
        min-h-[calc(100vh-93px)] max-w-full
        py-6
        px-10 snap-start
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        ${className}`}>
            {children}
        </div>
    )
}