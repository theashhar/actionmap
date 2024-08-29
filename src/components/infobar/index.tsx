import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Link from 'next/link'
import Image from 'next/image'
import { Book, Headset, Search } from 'lucide-react'
import { Input } from '../ui/input'
  
type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className='dark:bg-black flex flex-row justify-end p-4 gap-8'>
        <span className='flex items-center rounded-full bg-muted px-4 '>
            <Search />
            <Input 
            placeholder='Quick Search'
            //fix actoive type box ui
            className='bg-transparent border-none'/>
        </span>
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger><Headset /></TooltipTrigger>
            <TooltipContent>
            <p>Contact Support</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger><Book /></TooltipTrigger>
            <TooltipContent>
            <p>Guide</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
    </div>
  )
}

export default InfoBar