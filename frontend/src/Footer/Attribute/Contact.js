import React from 'react'
import { FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className='lg:flex lg:justify-between px-5 lg:px-24 py-10 lg:py-24'>
        <div className='w-full lg:w-1/4 lg:flex lg:items-start mb-10 lg:mb-0'>
          <div className='flex justify-end mb-2 lg:mb-0'>
              <FiMapPin className='text-2xl text-[#3b96a1] ' />
          </div>
          <div className='w-full bg-[#3b96a1] mx-2 px-4 py-4 text-white rounded-md shadow-2xl'>
            <div className='mb-4'>HEAD OFFICE</div>
            <div className='text-sm text-justify leading-8 mb-4'>Gedung KOPKARLA 1 Jl. Lebak Bulus Raya No.7 Kel. Lebak Bulus Kec. Cilandak Jakarta Selatan, DKI Jakarta 12440</div>
            <div className='text-white text-sm leading-10 mb-4'>
                Telp.  021 7590 9424<br/>
                <hr/>
                Fax.  021 2920 3466<br/>
                <hr/>
                info  @kopkarla.co.id
                <hr/>
            </div>
          </div>
        </div>
        
        <div className='w-full lg:w-3/4 lg:ml-10 ml-0 lg:flex lg:items-start '>
          <div className='flex justify-end mb-2 lg:mb-0'>
              <FiMail className='text-2xl text-[#3b96a1] ' />
          </div>
          <div className='w-full bg-[#3b96a1] mx-2 px-4 py-4 text-white rounded-md shadow-2xl'>
            {/* <div className='mb-4'>WE ARE ALWAYS READY</div> */}
            <div className='mb-4'>REQUEST A CALL BACK</div>
            <div className='text-sm text-justify leading-8 mb-4'>For further information on our product and services, 
            please contact us at the following address or simply fill in the form below and our representative will 
            respond to you as soon as possible.</div>
            <div>
              <form className=''>
                <div className='grid lg:grid-cols-2 gap-4 content-start mb-4'>
                  <input className='placeholder:italic placeholder:text-gray-400 rounded-md py-2 pl-9 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-teal-600 focus:ring-1 text-sm' placeholder='Name' />
                  <input className='placeholder:italic placeholder:text-gray-400 rounded-md py-2 pl-9 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-teal-600 focus:ring-1 text-sm' placeholder='Phone' />
                  <input className='placeholder:italic placeholder:text-gray-400 rounded-md py-2 pl-9 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-teal-600 focus:ring-1 text-sm' placeholder='Company Name' />
                  <input className='placeholder:italic placeholder:text-gray-400 rounded-md py-2 pl-9 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-teal-600 focus:ring-1 text-sm' placeholder='Email' />
                  
                </div>
                <div className='grid grid-cols-1 gap-4 content-start mb-4'>
                  <textarea className='placeholder:italic placeholder:text-gray-400 rounded-md py-2 pl-9 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-teal-600 focus:ring-1 text-sm' placeholder='Comment or Quetions' />
                </div>
                <button className='rounded-md bg-white text-[#3b96a1] font-bold w-full py-1 hover:bg-sky-100'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
