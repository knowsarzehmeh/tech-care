import React from 'react'
import Card from './Card'
import Image from 'next/image'
import { format} from 'date-fns'


const ProfileDetail = ({ title, description, icon }) => {
    return (
        <div className='flex gap-2'>
            <div className='w-[42px] h-[42px] rounded-full bg-gray-3'>
                <Image src={icon} width={42} height={42} />
            </div>

            <div className='flex flex-col'>
                <p className='text-[14px]'>{title}</p>
                <p className='text-[14px] font-bold'>{description}</p>
            </div>
        </div>
    )
}

const PatientProfile = ({patient}) => {
    const { 
        name , 
        gender, 
        age, 
        profile_picture, 
        date_of_birth, 
        emergency_contact, 
        insurance_type,
        phone_number
        } = patient || {}

  return (
    <Card>
        <div className='flex flex-col items-center justify-center gap-3 py-5'>
            <div className='w-[200px] h-[200px] rounded-full'>
                     <Image src={profile_picture} width={200} height={200} alt={name} />
            </div>

            <h3 className='text-[24px] font-bold'>{name}</h3>
        </div>

        <div className='py-4 flex flex-col gap-4'>
            <ProfileDetail 
             icon='/assets/BirthIcon.svg' 
             title='Date Of Birth' 
             description={format(date_of_birth, 'LLLL d, yyyy' )} 
            />
            <ProfileDetail 
             icon='/assets/FemaleIcon.svg' 
             title='Gender' 
             description={gender} 
            />
            <ProfileDetail 
             icon='/assets/PhoneIcon.svg' 
             title='Contact Info' 
             description={phone_number} 
            />
            <ProfileDetail 
             icon='/assets/PhoneIcon.svg' 
             title='Emergency Contacts' 
             description={emergency_contact} 
            />
            <ProfileDetail 
             icon='/assets/InsuranceIcon.svg' 
             title='Insurance Provider' 
             description={insurance_type} 
            />
        </div>

        <div className='flex items-center justify-center my-5'>
                <button className='bg-cyan-5 rounded-full px-10 py-3 font-bold'>
                    Show All Information
                </button>
        </div>
    </Card>
  )
}

export default PatientProfile