import { Obra } from "./types"
import { Section } from "./types"
import { Proyecto } from "./types"


export const Obras: Obra[] = [
    {
        title: "chalchiuhtlicue",
        year: "2024",
        description: "fotogrametría de monolito de la diosa chalchiuhtlicue extraída de san miguel coatlinchán.",
        slug: "chalchiuhtlicue",
        imgsrc: "",
        imgalt: "",
        iframesrc: "https://sbector.com/chalchiuhtlicue/"
    },
    {
        title: "parícutin",
        year: "2023",
        description: "fotogrametría de roca volcánica extraída del volcán paricutín.",
        slug: "paricutin",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "captura de pantalla de la experiencia virtual 3d paricutin",
        iframesrc: "https://sbector.com/paricutin/"
    },
    {
        title: "subtle-sync",
        year: "2023",
        description: "webapp y smartphones.",
        slug: "subtle",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "captura de pantalla de la experiencia virtual 3d subtle sync.",
        iframesrc: "https://sbector.com/subtle-sync/"
    },{
        title: "autorretrato",
        year: "2021",
        description: "webapp.",
        slug: "autorretrato",
        imgsrc: "../../obras/autorretrato.jpg",
        imgalt: "captura de pantalla de la experiencia virtual autorretrato.",
        iframesrc: "",
        link:"https://autorretrato.glitch.me/"
    },{
        title: "inconspicuo",
        year: "2018",
        description: "video a color",
        slug: "inconspicuo",
        imgsrc: "../../obras/inconspicuo.jpg",
        imgalt: "Still de video de la obra inconspicuo",
        iframesrc: ""
    },

]

export const Sections: Section[] = [
    {
        label: 'inicio',
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

export const Proyectos: Proyecto[] = [
    {
        title: "shuniata",
        year: "2012",
        description: "Instalación virtual in situ que reflexiona sobre la idea de información y el acceso a la misma.",
        slug: "shuniata",
        imgsrc: "../obras/shuniata.gif",
        imgalt: "fotografía de la instalación virutal shuniata"
    }
]