import Button from "../components/Button"
import Link from "next/link"

export default function Archivo() {
    return (
        <div>
            <h1>archivo</h1>
            <Link href="./archivo/obra">
                <Button>obra</Button>
            </Link>
            <Link href="./archivo/proyectos">
                <Button>proyectos</Button>
            </Link>
        </div>
    )
}