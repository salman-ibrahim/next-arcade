import { Game, Games } from "./types"

export type HomeProps = {
    games: Games
}

export type CategoryBoxProps = {
    category: string
    children: React.ReactNode
}

export type GamesCarouselProps = {
    games: Games
}

export type GameCardProps = {
    game: Game
}