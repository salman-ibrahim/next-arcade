import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
function Header() {
  return (
    <div className='w-full relative h-20 mb-10'>
        <div className='flex justify-between md:px-10 px-5 items-center gap-2 fixed left-0 right-0 top-0 h-20 bg-slate-200 dark:bg-slate-900 z-50'>
            <Link href={'/'} className='flex gap-2'>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                />
                <p className='text-3xl font-bold'>Gamearina</p>
            </Link>

            <ModeToggle/>
        </div>
    </div>
  )
}

export default Header