import Link from "next/link"

export default function Button( {
    children, 
    href,
    className,
    target
} : {
    children:React.ReactNode, 
    href:string,
    className?: string,
    target?: string
}  ) {
    return (
        <Link href={href}
        target={target}
        className={`
        bg-gray-200
        text-gray-500
        shadow-gray-500 
        hover:bg-gray-300 active:shadow-sm shadow-md transition-all 
        rounded-md m-3 px-2
        ${className}`}>
        <button>
            {children}
        </button>
        </Link>
    )
}