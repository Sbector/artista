import Link from "next/link"
import Wrapper from "./_components/Wrapper"
import HomeCard from "./_components/HomeCard"

const links = [{
    label: 'acerca de',
    route: '#about'
}, {
    label: 'proyectos',
    route: '#proyectos'
}, {

    label: 'contacto',
    route: '#contacto'
}]


export default function Home() {
    return (
        
            <HomeCard/>
        
    )
}