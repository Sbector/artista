export type Props = {
    params: {
        slug: string[]
    }
}

export type Obra = {
    title: string
    year: string
    description: string
    slug: string
    imgsrc: string
    imgalt: string
    videosrc?: string
    iframesrc: string
    appLink?: string
}

export type Proyecto = {
    title: string
    year: string
    description: string
    slug?: string
    imgsrc?: string
    imgalt?: string
}

export type Section = {
        label: string
        route: string
    }