import Link from "next/link"


export default function SocialPill({ children, href }:{children:React.ReactNode, href: any}) {
    return (
            <Link href={href} target="_blank" className="rounded-full text-sm border border-gray-50 bg-zinc-800 flex justify-center items-center gap-x-1 py-1 px-2
            md:gap-x-2 md:py-2 md:px-3 md:text-lg
            hover:border-emerald-100 hover:text-emerald-100 transition-all">
                {children}
            </Link>
    )
}