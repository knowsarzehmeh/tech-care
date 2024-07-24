import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ sx = '', children }) => {
  return (
    <div className={twMerge('p-5 rounded-[16px] bg-white', sx)}>
        {children}
    </div>
  )
}

export default Card