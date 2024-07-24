export default function TextWrapper({ 
    children, 
    className 
}:{
    children: React.ReactNode,
    className?: any
}) {
    return (
        <div className={`${className}
        px-8
        md:w-[700px] md:mx-auto
        `}>
            {children}
        </div>
    )
}