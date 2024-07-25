import Link from "next/link"

export default function Button({
    children,
    href,
    className,
    target
}: {
    children: React.ReactNode,
    href: string,
    className?: string,
    target?: string
}) {
    return (
        <Link href={href}
            target={target}
            className={`
            ${className}
            bg-gray-200
            text-gray-500
            shadow-gray-500 
            hover:bg-gray-300 active:shadow-sm shadow-md transition-all 
            rounded-lg px-2 mx-2
            text-md lg:text-md xl:text-xl 2xl:text-2xl
        `}>
            <button>
                {children}
            </button>
        </Link>
    )
}