import React from 'react'
import Card from './Card'
import Heading from './Heading'



const ListHeader = () => {
    return (
        <>
        <div className='bg-gray-3 font-bold py-4 pl-3 rounded-l-full'>
            Problem/Diagnosis
        </div>
        <div className='bg-gray-3 font-bold col-span-2 py-4 px-10'>
            Description
        </div>
        <div className='bg-gray-3 font-bold py-4 rounded-r-full'>
            Status
        </div>
        </>
    )
}


const ListItem = ({ diagnosis}) => {
    const { name, description, status } = diagnosis || {}
    
    return (
        <>
        <div className='border-b border-b-gray-1 py-4 pl-3'>
            {name}
        </div>
        <div className= 'border-b border-b-gray-1 col-span-2 py-4 px-10'>
            {description}
        </div>
        <div className='border-b border-b-gray-1 py-4'>
            {status}
        </div>
        </>
    )
}

const DiagnosticList = ({ diagnosticList }) => {
  return (
    <Card sx='max-h-[349px] h-full overflow-y-hidden'>
        <Heading title='Diagnostic List'/>

        <div className='grid grid-cols-4 pt-6'>
            <ListHeader />
        </div>
        <div className='grid grid-cols-4 pb-6 w-full h-full overflow-y-scroll' style={{ maxHeight: 'calc(349px - 8rem)' }}>
            {
                diagnosticList?.map((diagnosis, idx) => 
                <ListItem key={idx} diagnosis={diagnosis} 
                />
                )
            }
        </div>

    </Card>
  )
}

export default DiagnosticList