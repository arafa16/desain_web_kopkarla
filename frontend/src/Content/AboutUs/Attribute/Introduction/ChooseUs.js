import React from 'react'

const ChooseUs = () => {
  return (
    <div>
        <div className='flex justify-center  text-xl py-10'>
            <p className='w-full text-3xl text-[#3b96a1]  text-center font-bold py-2'>KENAPA MEMILIH KAMI</p>
        </div>
        <div className='text-justify px-10 leading-8 pb-10'>
            <div className='text-center'>
                <div className='mb-4'>
                Kopkarla berorientasi pada pemberian solusi dan pelayanan terbaik.
                </div>
                <div className='mb-4'>
                Berikut adalah beberapa alasan yang tepat untuk memilih layanan kami:
                </div>
            </div>
            
            <div className='mb-4'>
                <img src={require('../../../../Assets/Images/AboutUs/choose_us.jpg')} />
            </div>
            
        </div>
    </div>
  )
}

export default ChooseUs
