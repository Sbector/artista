"use client"
import Link from "next/link"
import { Sections } from "../constants"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="
        sticky
        flex
        flex-row
        top-0 
        z-50 
        w-screen 
        h-[35px] 
        bg-black 
        ">
            <div className="
            py-1 px-2">
                <Link href="/" className=" 
                text-gray-200 
                text-lg">sbector |</Link>
            </div>
            <nav className="
            relative
            text-center">
                <ul className="
                text-sm
                flex 
                flex-wrap
                mx-auto 
                py-2 px-4">
                    {Sections.map(({ label, route }) => {
                        const isActive = pathname.startsWith(route)
                        return (
                        <li key={route}
                        className="
                        flex-auto 
                        mx-1">
                            <Link href={route} 
                            className={`${isActive ? 
                                'font-bold text-gray-100 hover:text-gray-400' : 'text-gray-200 hover:text-gray-400'}`}
                            >{label}</Link>
                        </li>
                    )})}
                </ul>
            </nav>
        </header>
    )
}