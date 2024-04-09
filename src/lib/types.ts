export type Game = {
    id: string,
    title: string,
    description: string,
    instructions: string,
    url: string,
    category: string,
    tags: string,
    thumb: string,
    width: string,
    height: string,
    mobile_ready?: boolean
}

export type Games = Game[]