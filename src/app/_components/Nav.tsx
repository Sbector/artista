"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sections } from "../constants"

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="
            relative 
            mx-4
            py-1">
                <div className="
            pt-1">
                    <Link href="/" className="
                font-light
                text-gray-200 
                text-2xl">sbector</Link>
                </div>
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
                                        'font-bold underline text-gray-700 hover:text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
                                    <span>
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
    )
}