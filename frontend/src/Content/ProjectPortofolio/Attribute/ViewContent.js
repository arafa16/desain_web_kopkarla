import React from 'react'

const ViewContent = () => {
  return (
    <div className='mx-32 my-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
          <div className='w-full bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
          <div className='w-full  bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
          <div className='w-full bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
          <div className='w-full bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
          <div className='w-full  bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
          <div className='w-full bg-[#3b96a1] h-auto lg:min-h-[20rem] py-2 lg:py-0 mb-4 lg:mb-0 flex justify-center items-center'>
            <img className='w-full h-[95%] hover:h-full cursor-pointer' src={require(`../../../Assets/Images/telecome.jpg`)} />
          </div>
        </div>
    </div>
  )
}

export default ViewContent
