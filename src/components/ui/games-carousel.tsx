import { GamesCarouselProps } from '../../lib/prop_types'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel'
import { Game } from '../../lib/types'
import GameCard from './game-card'

function GamesCarousel({ games } : GamesCarouselProps) {
    return (
        <Carousel
            className='w-full'
            opts={{
                align:'start'
            }}
        >
            <CarouselContent>
                {
                    games.map((game: Game) => (
                        <CarouselItem className='md:basis-1/2 lg:basis-1/5' key={game.id}>
                            <GameCard game={game} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default GamesCarousel