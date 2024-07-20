import { Obra } from "./types"
import { Section } from "./types"
import { Proyecto } from "./types"


export const Obras: Obra [] = [
    {
        title:"chalchiuhtlicue",
        year: "2024",
        description: "Representación virtual online de una roca volcánica proveniente del volcán Parícutin.",
        slug: "chalchiutlicue",
        imgsrc: "/obras/chalchiuhtlicue.jpg",
        imgalt: "Imagen de la diosa azteca de la lluvia"
    },
    {
        title:"parícutin",
        year: "2023",
        description: "Paricutin, 2023 Fotogrametría Esta representación visual surge de una roca volcánica extraída del Paricutín, un volcán que fue ampliamente retratado y documentado durante su nacimiento por el artista Gerardo Murillo, conocido como 'Dr. Atl'. A través de la técnica de fotogrametría, esta pieza adquiere vida en un espacio virtual independiente de relaciones preestablecidas, donde su presencia adquiere múltiples significados para el ámbito científico, estético y filosófico. La elección de la palabra 'Paricutin' escrita en forma esdrújula preserva la autenticidad de su pronunciación en lengua purépecha, evocando la esencia de su origen. Paricutin se aventura en la convergencia de la geología, la tecnología y la filosofía en el arte contemporáneo. Esta obra, en su esencia virtual, trasciende las barreras físicas y narrativas, invitando a reflexionar sobre la relación entre la naturaleza, la percepción y la creación.",
        slug: "paricutin",
        imgsrc: "/obras/paricutin.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d Paricutin"
    },
    {
        title:"autorretrato",
        year:"2021",
        description: "Aplicación web que utiliza la selfie-cam para texturizar una forma geométrica. acompañada de un texto alusivo al concepto de 'individuo'.",
        slug: "autorretrato",
        imgsrc: "/obras/autorretrato.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d Autorretrato"
    },
    {
        title:"planet",
        year:"2020",
        description: "Cutout form the movie Planet of the apes.",
        slug: "planet",
        imgsrc: "/obras/planet.jpg",
        imgalt: "Still de la pieza de video Planet"
    },{
        title:"complete this work wich i continued",
        year:"2019",
        description: "Declaración y apropiación de obra de arte público.",
        slug: "complete",
        imgsrc: "/obras/complete.jpeg",
        imgalt: "Imagen del mural Complete this work wich i continued"
    },
    {
        title:"inconspicuo",
        year:"2018",
        description: "Declaración y apropiación de obra de arte público.",
        slug: "inconspicuo",
        imgsrc: "/obras/inconspicuo.jpg",
        imgalt: "Imagen de la pieza de video Insconspicuo"
    },
    {
        title:"shuniata",
        year:"2012",
        description: "Instalación virtual in situ que reflexiona sobre la idea de información y el acceso a la misma.",
        slug: "shuniata",
        imgsrc: "/obras/shuniata.jpg",
        imgalt: "Imagen de la intervención virutal al Centro de Recursos informativos (CERI) en el Centro de Universitario de Ciencias Económincas y Administrativas"
    },
    
]

export const Sections: Section [] = [
    {
        label: 'about',
        route: '/about'
    }, {
        label: 'archivo',
        route: '/archivo'
    }, /*{
        label: 'blog',
        route: '/blog'
    },*/ {
        label: 'contacto',
        route: '/contacto'
    },
]

export const Proyectos: Proyecto [] = [
    {
        title: "shuniata",
        year: "2012",
        description: "Instalación virtual in situ que reflexiona sobre la idea de información y el acceso a la misma.",
        slug: "shuniata",
        imgsrc: "../obras/shuniata.gif",
        imgalt: "fotografía de la instalación virutal shuniata"
    }
]