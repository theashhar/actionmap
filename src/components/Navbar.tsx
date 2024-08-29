import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {MenuIcon} from 'lucide-react'
import { ModeToggle } from './modeToggle'

export default async function Navbar() {
  return (
    <header className='fixed right-0 left-0 top-0 py-2 px-4 bg-black/40 backdrop-blur-xl z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
      <aside className='m-2 flex items-center gap-[2px]'>
        <Image
        src='/actionmapLogoLight.svg'
        width={45}
        height={45}
        alt='Action Map Logo'
        className='shadow-sm'
         />
        <p className='px-2 text-3xl font-bold'>ActionMap</p>
      </aside>

      <nav className='hidden md:block mx-4' >
        <ul className='h-1 flex items-center gap-4 list-none'>
          <li>
            <Link href='#'>Products</Link>
          </li>
          <li>
            <Link href='#'>Pricing</Link>
          </li>
          <li>
            <Link href='#'>Clients</Link>
          </li>
          <li>
            <Link href='#'>Documentation</Link>
          </li>
          <li>
            <Link href='#'>Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
      <ModeToggle />
        <Link
        href='/dashboard'
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? 'Dashboard': 'Get Started'}
          </span>
        </button>
        </Link>
        {/* WIP update user */}
        <MenuIcon className='md:hidden' />
      </aside>

    </header>
  )
}
