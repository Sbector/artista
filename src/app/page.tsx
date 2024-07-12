import Button from "./components/Button"
import Link from "next/link"


export default function Home() {
    return (
        <div>
            <h1>sbector</h1>
            <Link href="./about">
                <Button>acerca de</Button>
            </Link>
            <Link href="./archivo">
                <Button>archivo</Button>
            </Link>
            <Link href="./blog">
                <Button>blog</Button>
            </Link>
            <Link href="./contacto">
                <Button>contacto</Button>
            </Link>
        </div>
    )
}