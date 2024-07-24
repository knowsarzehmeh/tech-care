import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Heading = ({
    title,
    iconPath,
    sx = ''
}) => {
  return (
    <div className={twMerge('flex items-center justify-between', sx)}>
    <h3 className='font-bold text-[24px]'>{title}</h3>
    { iconPath && <Image src={iconPath} width={18} height={18} />}
</div>
  )
}

export default Heading