'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { House, Zap, Settings, Blocks, CreditCard, CloudDownload, FileCheck2, LucideMousePointerClick, GitBranch, Database } from 'lucide-react';
import { Separator } from "@/components/ui/separator"

type Props = {}
type IconName = 'House' | 'Zap' | 'Settings' | 'Blocks' | 'CreditCard' | 'CloudDownload' | 'FileCheck2';


const Sidebar = (props: Props) => {
  const [activeIcon, setActiveIcon] = useState<IconName | null>('House');

  // Function to handle icon click and set the active state
  const handleIconClick = (iconName: IconName) => {
    setActiveIcon(iconName);
  };

  // Array of icons with their respective names
  const icons = [
    { name: 'House', component: House, tooltip: 'Home', link:'' },
    { name: 'Zap', component: Zap, tooltip: 'Workflows', link:'' },
    { name: 'Settings', component: Settings, tooltip: 'Settings', link:'' },
    { name: 'Blocks', component: Blocks, tooltip: 'Category', link:'' },
    { name: 'CreditCard', component: CreditCard, tooltip: 'Payment', link:'' },
    { name: 'CloudDownload', component: CloudDownload, tooltip: 'Cloud Download', link:'' },
    { name: 'FileCheck2', component: FileCheck2, tooltip: 'Clipboard', link:'/' },
  ];
  const pathName = usePathname()
  return (
    <nav className='dark:bg-black h-screen flex justify-between items-start gap-12 px-4 py-8 '>
      <div className='flex items-center justify-center flex-col gap-6'>
        <Link className='flex pb-8'
        href='/'>
          <Image
            src='/actionmapLogoLight.svg'
            width={36}
            height={36}
            alt='Action Map Logo'
            className='shadow-sm'
          />
          {/* <p className='px-2 text-xs font-bold'>ActionMap</p> */}
        </Link>
        <TooltipProvider>
        {icons.map(({ name, component: IconComponent, tooltip, link }) => (
          <Link href={link} >          
            <Tooltip key={name}>
              <TooltipTrigger
                onClick={() => handleIconClick(name as IconName)}
                onFocus={() => handleIconClick(name as IconName)}
                className={`rounded-md p-1 cursor-pointer transition-colors ${
                  activeIcon === name
                    ? 'bg-violet-700 dark:bg-violet-700'
                    : 'dark:bg-black dark:hover:bg-violet-950'
                }`}
              >
                <IconComponent
                // fill={activeIcon === name ? '#122137' : "transparent"}
                  size={24}
                  // color="#E3D5FF"
                  strokeWidth={1.5}
                  style={{ color: activeIcon === name ? '#FFF' : '#46566B' }}
                />
              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        ))}
    </TooltipProvider>
    <Separator />
    <div className='flex flex-col items-center h-48 rounded-full border-[1px] py-4 px-2 dark:bg-gray-950 overflow-y-scroll no-scrollbar' >
      <div className='relative dark:bg-gray-800 p-2 rounded-full'>
        <LucideMousePointerClick size={16} color="#E3D5FF" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <div className='relative dark:bg-gray-800 p-2 rounded-full'>
        <GitBranch size={16} color="#E3D5FF" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <div className='relative dark:bg-gray-800 p-2 rounded-full'>
        <Database size={16} color="#E3D5FF" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <div className='relative dark:bg-gray-800 p-2 rounded-full'>
        <GitBranch size={16} color="#E3D5FF" />
      </div>



    </div>

      </div>
    </nav>
  )
}

export default Sidebar
