import { Obra } from "./types"
import { Section } from "./types"


export const Obras: Obra [] = [
    {
        title:"paricutin",
        year: "2023",
        description: "representación virtual online de una roca volcánica proveniente del volcán Parícutin."
    },
    {
        title:"planet",
        year:"2020",
        description: "Cutout form the movie Planet of the apes"
    },
    {
        title:"inconspicuo",
        year:"2018",
        description: "Declaración y apropiación de obra de arte público."
    },{
        title:"angelina",
        year:"2024",
        description: "mi novia =)."
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