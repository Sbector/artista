
import Nav from "./Nav"

export default function Header() {
    return (
        <header className="
        sticky
        top-0 
        z-50 
        w-screen
        md:w-[700px] md:mx-auto
        text-center">
            <Nav/>
        </header>
    )
}