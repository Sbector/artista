import { Obra } from "./types"
import { Section } from "./types"
import { Proyecto } from "./types"


export const Obras: Obra[] = [
    {
        title: "representación 3d",
        year: "2023",
        description: "este es un ejemplo de integración de archivos 3d. puedes editar el archivo 'constants.tsx' para editar la información y los orígenes de tus representaciones. esta representación usa un iframe para insetar una escena 3d generada con threejs.",
        slug: "3d",
        imgsrc: "",
        imgalt: "",
        iframesrc: "https://sbector.com/paricutin/",
        appLink:""
    },
    {
        title: "representación 2d",
        year: "2019",
        description: "ejemplo de representación con imagen estática. puedes llevar tus archivos a la carpeta 'public/obras' y agregar el nombre de tu archivo en la sección imgsrc del objeto dentro del archivo 'constants.tsx'",
        slug: "complete",
        imgsrc: "../../obras/complete.jpeg",
        imgalt: "fotografía de la obra complete this work wich I continued en espacio cabeza",
        iframesrc: "",
        appLink:""
    },
    {
        title: "video",
        year: "2018",
        description: "ejemplo de representación con video.",
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