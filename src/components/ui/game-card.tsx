import { GameCardProps } from '@/lib/prop_types'
import React from 'react'
import { Card, CardContent, CardTitle } from './card'
import Image from 'next/image'

function GameCard({ game } : GameCardProps) {
  return (
    <Card>
      <CardContent className='m-0'>
        <Image src={game.thumb} alt={game.title} width={100} height={100} />
        <CardTitle>{game.title}</CardTitle>
      </CardContent>
    </Card>
  )
}

export default GameCard