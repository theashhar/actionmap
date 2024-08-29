import React from 'react'  
type Props = {}

const Connections = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 border-b relative overflow-hidden overscroll-none'>
      <div className='text-4xl z-[10] p-6 bg-background/50 backdrop-blur-xl flex items-center border-t rounded-3xl '>
      Connections
      </div>
    </div>
  )
}

export default Connections