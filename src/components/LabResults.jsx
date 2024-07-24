import React from 'react'
import Card from './Card'
import Heading from './Heading'
import Image from 'next/image'


const ListItem = ({ scan }) => {
    return (
        <div className='flex py-2 px-3 items-center justify-between'>
            <p>{scan}</p>
            <div className='w-[20px] h-[20px]'>
                <Image src='/assets/download-icon.svg' width={20} height={20} alt='' />
            </div>
        </div>
    )
}

const LabResults = ({patient}) => {
    const { lab_results} = patient || {}
  return (
    <Card sx='max-h-[296px] h-full'>
        <Heading title="Lab Results" />
        <div className='flex flex-col gap-3 py-3'>
            {
                lab_results?.map((result, idx) => <ListItem key={idx} scan={result} />)
            }
        </div>
    </Card>
  )
}

export default LabResults