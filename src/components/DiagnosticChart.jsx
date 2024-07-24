'use client'

import React from 'react'
import Card from './Card'
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const fullConfig = resolveConfig(tailwindConfig)


const LEVELS_ICON = {
    ['Lower than Average']: '/assets/ArrowDown.svg',
    ['Higher than Average']: '/assets/ArrowUp.svg',
    Normal: '',
}


const BloodPressureData = ({ label, value, levels, sx }) => {

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
                <div className={ twMerge('w-[14px] h-[14px] rounded-full', sx)} />
                <p className='font-semibold text-[14px]'>{label}</p>
            </div>
            <h3 className='font-bold text-[22px]'>{value}</h3>
            <div className='flex items-center gap-2'>
                <Image src={LEVELS_ICON[levels]} width={10} height={5} />
                <p className='text-[14px]'>{levels}</p>
            </div>
        </div>
    )
}

const DiagnosticChart = ({ 
    labels, 
    systolicData, 
    diastolicData, 
    selectedDiagnosisData, 
    handleSelectedDiagnosisData
 }) => {

    const colors = fullConfig.theme.colors

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: colors.purple[2],
            backgroundColor: colors.purple[1],
            yAxisID: 'y',
            tension: '0.4',
            pointRadius: 6,
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: colors.purple[4],
            backgroundColor: colors.purple[3],
            yAxisID: 'y',
            tension: '0.4',
            pointRadius: 6,
            legend: false
          }
        ]
      };


      const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const element = elements[0];
                const datasetIndex = element.datasetIndex;
                const index = element.index;
                const dataset = data.datasets[datasetIndex];
                const value = dataset.data[index];
                const label = data.labels[index];

                console.log(`Clicked on ${dataset.label} at ${label}: ${value}`);
                // Handle the data as needed
                handleSelectedDiagnosisData({ dataSet: dataset.label, label})
            }
        },
      }


  const { blood_pressure: { diastolic, systolic } = {} } = selectedDiagnosisData || {}

  return (
    <Card sx='bg-pink-3 max-h-[298px] h-full py-4'>
        <div className='flex gap-5 h-full'>
            <div className='flex flex-col flex-1 h-full'>
                <div className='flex items-center justify-between pb-5'>
                    <h3 className='font-bold text-[18px]'>Blood Pressure</h3>
                    <button className='flex items-center gap-3'>
                        <p className='text-[14px]'>Last 6 months</p>
                        <Image src="/assets/expand-more.svg" width={10} height={6} />
                    </button>
                </div>
                <Line data={data} options={options} />
            </div>

            <div className='w-40 flex flex-col gap-5'>
                <BloodPressureData label='Systolic' value={systolic?.value} levels={systolic?.levels} sx='bg-purple-1' />
                <hr className='bg-gray-4' />
                <BloodPressureData label='Disatolic' value={diastolic?.value} levels={diastolic?.levels} sx='bg-purple-3' />
             </div>

        </div>
    </Card>
  )
}

export default DiagnosticChart