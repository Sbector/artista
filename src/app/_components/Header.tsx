import Link from "next/link"

const links = [{
    label: 'about',
    route: '../about'
}, {
    label: 'archivo',
    route: '../archivo'
}, {
    label: 'blog',
    route: '../blog'
}, {
    label: 'contacto',
    route: '../contacto'
}]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-screen h-[100px] bg-white dark:bg-black text-center">
            <div className="py-3">
                <Link href="../" className="text-gray-800 dark:text-gray-200 text-3xl">sbector</Link>
            </div>
            <nav className="relative mx-4">
                <ul className="flex flex-wrap bg-gray-200 rounded-lg max-w-md mx-auto px-4">
                    {links.map(({ label, route }) => (
                        <li key={route} className="flex-auto mx-1">
                            <Link href={route} className="text-gray-500 hover:text-gray-900">{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}