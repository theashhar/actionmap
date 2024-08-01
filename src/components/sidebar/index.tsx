'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ChartBarStacked } from 'lucide-react';

type Props = {}

const Sidebar = (props: Props) => {
  const pathName = usePathname()
  return (
    <nav className='dark:bg-black h-screen flex justify-between items-start gap-12 px-4 py-8 '>
      <div className='flex items-center justify-center flex-col gap-8'>
        <Link className='flex'
        href='/'>
          <Image
            src='/actionmapLogoLight.svg'
            width={30}
            height={30}
            alt='Action Map Logo'
            className='shadow-sm'
          />
          {/* <p className='px-2 text-xs font-bold'>ActionMap</p> */}
        </Link>
        <TooltipProvider>
          {/* {menuOptions.map(()=>(
            <>
            </>
          ))} */}
          <>
          <ChartBarStacked size={30} className='bg-slate-500 rounded-md p-1' />

          </>
        </TooltipProvider>
      </div>
    </nav>
  )
}

export default Sidebar
