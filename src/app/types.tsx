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
}

export type Section = {
        label: string
        route: string
    }