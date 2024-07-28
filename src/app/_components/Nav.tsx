"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sections } from "../constants"

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className="
            mx-4
            py-1">
                <div className="
            py-1 pr-4">
                    <Link href="/" className="
                font-light
                text-emerald-100 
                text-2xl">sbector</Link>
                </div>
                <ul className="
                flex
                justify-around
                bg-gray-200 
                rounded-lg   
                px-4">
                    {Sections.map(({ label, route }) => {
                        const isActive = pathname.startsWith(route)
                        return (
                            <li key={route}
                                className="
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