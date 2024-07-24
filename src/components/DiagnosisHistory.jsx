'use client'

import React, { useState } from 'react'
import Card from './Card'
import Heading from './Heading'
import Image from 'next/image'
import DiagnosticChart from './DiagnosticChart'
import { format, formatDate, parse } from 'date-fns'


const DiagnosisMeasurment = ({
    icon,
    vitalSign,
    measurements,
    status,
    color
}) => {
  return ( <Card sx={color}>
        <div className='bg-white rounded-full w-[96px] h-[96px] flex items-center justify-center'>
            <Image src={icon} width={96} height={96} />
        </div>
      <p className='mt-4'>Respiratory Rate</p>
      <h3 className='font-bold  text-[30px]'>{measurements}</h3>
      <p className='text-[14px]'>{status}</p>
    </Card>
  )
}

const DiagnosisHistory = ({ patient }) => {

  const {diagnosis_history } = patient || {}

  // from the ui we display data only for the last 6 months controlled by the dropdown
  const NUMBER_OF_MONTHS = 6
  const sliced_diagnosis_history = diagnosis_history?.slice(0, NUMBER_OF_MONTHS)

  const systolicData = sliced_diagnosis_history?.map((dh,idx) => dh?.blood_pressure?.systolic?.value || 0)
  const diastolicData = sliced_diagnosis_history?.map((dh,idx) => dh?.blood_pressure?.diastolic?.value || 0)

  const labels = sliced_diagnosis_history?.map((dh,idx) => {
      const parsedMonthYear = parse(`${dh?.month} ${dh?.year}`, 'MMMM yyyy', new Date())
      const formattedDate = format(parsedMonthYear, 'MMM, yyyy')
      return formattedDate || '';
  })


  const mostRecentDiagnosisData = sliced_diagnosis_history?.[0]
  const [selectedDiagnosisData, setSelectedDiagnosisData] = useState(mostRecentDiagnosisData)

  const getDiagnosisData = (date) => {
    const selectedDate = parse(date?.trim(),'MMM, yyyy', new Date())
    const monthName = format(selectedDate, 'MMMM')
    const year = format(selectedDate, 'yyyy')
    return sliced_diagnosis_history?.find(dh => dh?.month === monthName && dh?.year)
  }

  const handleSelectedDiagnosisData = (data) => {
        const selectedData =  getDiagnosisData(data?.label)
        setSelectedDiagnosisData(selectedData)
  }


  console.log(selectedDiagnosisData, 'DDWEKew')

  return (
    <Card sx='h-full'>
        <Heading  title='Diagnosis History' sx='mb-10' />
          <DiagnosticChart 
           labels={labels} 
           diastolicData={diastolicData} 
           systolicData={systolicData} 
           selectedDiagnosisData={selectedDiagnosisData}
           handleSelectedDiagnosisData={handleSelectedDiagnosisData}
          />

          <div className='grid grid-cols-3 gap-5 my-5'>
              <DiagnosisMeasurment
                icon='/assets/respiratory-rate.svg'
                vitalSign='Respiratory Rate'
                measurements={`${selectedDiagnosisData?.respiratory_rate?.value} bpm`}
                status={selectedDiagnosisData?.respiratory_rate?.levels}
                color='bg-blue-1'
              />

              <DiagnosisMeasurment
                icon='/assets/temperature.svg'
                vitalSign='Temperature'
                measurements={`${selectedDiagnosisData?.temperature?.value}°F`}
                status={selectedDiagnosisData?.temperature?.levels}
                color='bg-pink-1'
              />
    
              <DiagnosisMeasurment
                icon='/assets/heart-bpm.svg'
                vitalSign='Heart Rate'
                measurements={`${selectedDiagnosisData?.heart_rate?.value} bpm`}
                status={selectedDiagnosisData?.heart_rate?.levels}
                color='bg-pink-2'
              />
          </div>
    </Card>
  )
}

export default DiagnosisHistory