"use client"
import Link from "next/link"
import { Sections } from "../constants"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="
        sticky
        top-0 
        z-50 
        w-screen 
        h-[80px] 
        bg-black 
        text-center">
            <div className="
            py-2">
                <Link href="/" className=" 
                text-gray-200 
                text-2xl">sbector</Link>
            </div>
            <nav className="
            relative 
            mx-4">
                <ul className="
                flex 
                flex-wrap 
                bg-gray-200 
                rounded-lg 
                max-w-md 
                mx-auto 
                px-4">
                    {Sections.map(({ label, route }) => {
                        const isActive = pathname.startsWith(route)
                        return (
                        <li key={route}
                        className="
                        flex-auto 
                        mx-1">
                            <Link href={route} 
                            className={`${isActive ? 
                                'font-bold text-gray-600 hover:text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            >{label}</Link>
                        </li>
                    )})}
                </ul>
            </nav>
        </header>
    )
}