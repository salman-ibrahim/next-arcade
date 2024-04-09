import React from 'react'
import { Card, CardContent, CardTitle } from './card'
import { CategoryBoxProps } from '../../lib/prop_types'
import { Separator } from './separator'

function CategoryBox({ category, children} : CategoryBoxProps) {
  return (
    <Card className='p-4 w-full mx-2'>
      <CardTitle>{category}</CardTitle>
      <Separator className='my-4 max-w-sm' />
        <CardContent
        className='py-5'
        >
            {children}
        </CardContent>
    </Card>
  )
}

export default CategoryBox