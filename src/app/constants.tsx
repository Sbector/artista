import { Obra } from "./types"
import { Section } from "./types"
import { Proyecto } from "./types"


export const Obras: Obra[] = [
    {
        title: "chalchiuhtlicue",
        year: "2024",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur mi libero taciti tortor etiam luctus auctor luctus conubia. Nunc efficitur mauris nostra nulla tempor fringilla elementum. Magna ultrices eleifend ultrices nulla cras ultricies. Ut sapien finibus sapien, sagittis turpis lectus magnis potenti. Aliquam inceptos fusce posuere facilisis ultricies augue. Curabitur accumsan dignissim netus, elit consectetur nostra ultricies ultrices. Mattis etiam dictum mauris eu donec platea aenean sapien. Nam litora ligula facilisi nisi pretium fusce consequat mus sollicitudin.",
        slug: "chalchiuhtlicue",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d subtle syn",
        iframesrc: "https://sbector.com/chalchiuhtlicue/"
    },
    {
        title: "parícutin",
        year: "2023",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur mi libero taciti tortor etiam luctus auctor luctus conubia. Nunc efficitur mauris nostra nulla tempor fringilla elementum. Magna ultrices eleifend ultrices nulla cras ultricies. Ut sapien finibus sapien, sagittis turpis lectus magnis potenti. Aliquam inceptos fusce posuere facilisis ultricies augue. Curabitur accumsan dignissim netus, elit consectetur nostra ultricies ultrices. Mattis etiam dictum mauris eu donec platea aenean sapien. Nam litora ligula facilisi nisi pretium fusce consequat mus sollicitudin.",
        slug: "paricutin",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d Paricutin",
        iframesrc: "https://sbector.com/paricutin/"
    },
    {
        title: "subtle-sync",
        year: "2023",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur mi libero taciti tortor etiam luctus auctor luctus conubia. Nunc efficitur mauris nostra nulla tempor fringilla elementum. Magna ultrices eleifend ultrices nulla cras ultricies. Ut sapien finibus sapien, sagittis turpis lectus magnis potenti. Aliquam inceptos fusce posuere facilisis ultricies augue. Curabitur accumsan dignissim netus, elit consectetur nostra ultricies ultrices. Mattis etiam dictum mauris eu donec platea aenean sapien. Nam litora ligula facilisi nisi pretium fusce consequat mus sollicitudin.",
        slug: "subtle",
        imgsrc: "../../obras/paricutin.jpg",
        imgalt: "Captura de pantalla de la experiencia virtual 3d subtle syn",
        iframesrc: "https://sbector.com/subtle-sync/"
    },{
        title: "inconspicuo",
        year: "2018",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur mi libero taciti tortor etiam luctus auctor luctus conubia. Nunc efficitur mauris nostra nulla tempor fringilla elementum. Magna ultrices eleifend ultrices nulla cras ultricies. Ut sapien finibus sapien, sagittis turpis lectus magnis potenti. Aliquam inceptos fusce posuere facilisis ultricies augue. Curabitur accumsan dignissim netus, elit consectetur nostra ultricies ultrices. Mattis etiam dictum mauris eu donec platea aenean sapien. Nam litora ligula facilisi nisi pretium fusce consequat mus sollicitudin.",
        slug: "inconspicuo",
        imgsrc: "../../obras/inconspicuo.jpg",
        imgalt: "Still de video de la obra inconspicuo",
        iframesrc: ""
    },

]

export const Sections: Section[] = [
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