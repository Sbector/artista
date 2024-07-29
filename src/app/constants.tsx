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
        imgsrc: "",
        imgalt: "",
        iframesrc: "https://sbector.com/subtle-sync/",
        appLink: "https://sbector.com/subtle-sync/"
    },
    {
        title: "autorretrato",
        year: "2021",
        description: "webapp.",
        slug: "autorretrato",
        imgsrc: "../../obras/selfie.jpg",
        imgalt: "captura de pantalla de la experiencia virtual autorretrato.",
        iframesrc: "",
        appLink:"https://autorretrato.glitch.me/"
    },
    {
        title: "planet",
        year: "2020",
        description: "video digital monocanal a color, 2:37 min (obra realizada en el colectivo DDO).",
        slug: "planet",
        imgsrc: "../../obras/planet.jpg",
        imgalt: "Still de video de la obra planet",
        iframesrc: "",
        appLink:""
    },
    {
        title: "esteganografías",
        year: "2020",
        description: "aplicación e imagenes digitales, medidas variables (obra realizada en el colectivo DDO).",
        slug: "esteganografia",
        imgsrc: "../../obras/esteganografia.jpg",
        imgalt: "imagen recodificada",
        iframesrc: "",
        appLink:""
    },
    /* {
        title: "contingencia no.3",
        year: "2020",
        description: "colage digital, medidas variables.",
        slug: "contingencia3",
        imgsrc: "../../obras/contingencia3.jpg",
        imgalt: "colage digital de escena apocaliptica",
        iframesrc: "",
        appLink:""
    }, */
    {
        title: "inconspicuo",
        year: "2020",
        description: "circuito eléctrico modificado",
        slug: "inconspicuo2020",
        imgsrc: "../../obras/inconspicuo2020.jpg",
        imgalt: "fotografía de la obra incosnpucuo en rayón 376",
        iframesrc: "",
        appLink:""
    },
    {
        title: "complete this work wich I continued",
        year: "2019",
        description: "rotulo/mural.",
        slug: "complete",
        imgsrc: "../../obras/complete.jpeg",
        imgalt: "fotografía de la obra complete this work wich I continued en espacio cabeza",
        iframesrc: "",
        appLink:""
    },
    {
        title: "inconspicuo",
        year: "2018",
        description: "video digital monocanal a color, 4:22 min",
        slug: "inconspicuo2018",
        imgsrc: "../../obras/inconspicuo2018.mp4",
        imgalt: "still de video de la obra inconspicuo en el paraninfo de la universidad de guadalajara",
        videosrc: "../../obras/inconspicuo2018.mp4",
        iframesrc: ""
    },

]

export const Sections: Section[] = [
    {
        label: 'inicio',
        route: '/about'
    }, {
        label: 'archivo',
        route: '/archivo/obra'
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