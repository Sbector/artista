import { Obra } from "./types"
import { Section } from "./types"
import { Proyecto } from "./types"


export const Obras: Obra [] = [
   
    {
        title:"parícutin",
        year: "2023",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur mi libero taciti tortor etiam luctus auctor luctus conubia. Nunc efficitur mauris nostra nulla tempor fringilla elementum. Magna ultrices eleifend ultrices nulla cras ultricies. Ut sapien finibus sapien, sagittis turpis lectus magnis potenti. Aliquam inceptos fusce posuere facilisis ultricies augue. Curabitur accumsan dignissim netus, elit consectetur nostra ultricies ultrices. Mattis etiam dictum mauris eu donec platea aenean sapien. Nam litora ligula facilisi nisi pretium fusce consequat mus sollicitudin.",
        slug: "paricutin",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d Paricutin",
        iframesrc: "https://sbector.com/paricutin/"
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