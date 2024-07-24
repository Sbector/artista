
import Nav from "./Nav"

export default function Header() {
    return (
        <header className="
        sticky
        z-40
        top-0 
        w-screen
        md:w-[700px] md:mx-auto
        text-center">
            <Nav/>
        </header>
    )
}