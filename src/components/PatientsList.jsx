import Image from 'next/image'
import React from 'react'
import Card from './Card'
import Heading from './Heading'
import { twMerge } from 'tailwind-merge'



const Patient = ({patient}) => {

    const { name , gender, age, profile_picture } = patient || {}

    const isActive = patient?.name?.toLowerCase() === 'jessica taylor'

    return (
        <div className={twMerge('flex items-center justify-between py-2 px-5', isActive && 'bg-cyan-1')}>
            <div className='flex gap-3'>
                <div className='w-[48px] h-[48px] rounded-full'>
                     <Image src={profile_picture} width={48} height={48} alt='' />
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-bold text-[14px]'>{name}</h3>
                    <p className='text-gray-2 text-[14px]'>{gender}, {age}</p>
                </div>
            </div>

            <div className='cursor-pointer'>
                <Image src='/assets/more-horizontal.svg' width={18} height={4} />
            </div>
        </div>
    )
}

const PatientsList = ({ patients }) => {

  return (
    <Card sx='max-h-[1054px] h-full overflow-y-hidden p-0'>
        <Heading title='Patients' iconPath='/assets/search.svg' sx='p-5' />
        <div className='w-full h-full flex flex-col gap-8 overflow-y-auto '>
            {
                patients?.map(
                    (patient, idx) => 
                <Patient patient={patient} key={idx} />
                )
            }
        </div>
    </Card>
  )
}

export default PatientsList