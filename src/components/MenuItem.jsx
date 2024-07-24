'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const MenuItem = ({
    path = '#',
    iconSource = '/assets/home.svg',
    itemName = 'MenuItem',
    isActive,
    width = 15,
}) => {
  return (
    <Link href={path}>
    <li className={twMerge('flex gap-2 font-bold px-4 py-3', isActive && 'bg-cyan-5 rounded-[41px]')}>
        <Image  src={iconSource} width={width} height={17}/>
        <p>{itemName}</p>
    </li>
    </Link>
  )
}

export default MenuItem