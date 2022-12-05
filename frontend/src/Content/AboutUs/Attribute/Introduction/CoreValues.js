import React from 'react'

const CoreValues = () => {
  return (
    <div>
        <div className='flex justify-center  text-xl py-10'>
            <p className='w-full text-3xl text-[#3b96a1]  text-center font-bold py-2'>KOPKARLA CORE VALUES</p>
        </div>
        <div className='text-justify px-10 leading-8 pb-10'>
            <div className='mb-4'>
            For more than 25 years, we have grown our business and evolving with time.
            </div>
            <div className='mb-4'>
            Our core values – PIPES literally mean pipeline that channeling and connecting points. It is a foundation that connects all Kopkarla stakeholders to achieve mutually beneficial cooperation.
            </div>
            <div className='mb-4'>
            PIPES has led us in managing our business to be in line with Kopkarla vision and mission and facing the dynamic business circumstances.
            </div>
            <div className='mb-4'>
            We are poised to give our customers the best solution. We listen to our customers, explore with them to achieve their objective, and address what they need.
            </div>
            <img src={require('../../../../Assets/Images/AboutUs/core_values.jpg')} />
        </div>
    </div>
  )
}

export default CoreValues
