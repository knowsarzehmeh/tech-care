import Image from 'next/image'
import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex'>
        <div className='flex items-center gap-2 border-r border-gray-1 pr-3'>
            <Image 
            src='/assets/senior-woman-doctor.png' 
            width={44} height={44} 
            className='rounded-50' 
            />
            <div className='flex flex-col'>
                <p className='font-bold'>Dr. Jose Simmons</p>
                <p className='text-gray-2'>General Practitioner</p>
            </div>
        </div>

        <div className='cursor-pointer flex items-center gap-3 pl-3'>
            <Image 
                src='/assets/settings.svg' 
                width={18} height={20} 
                className='rounded-50' 
            />
            <Image 
                src='/assets/more-vertical.svg' 
                width={4} height={18} 
                className='rounded-50' 
            />
        </div>

    </div>
  )
}

export default UserProfile