import React from 'react'

const ProjectPortFolio = () => {
  return (
    <div className='w-full mx-auto mb-24'>
      <div className=' w-full min-h-[30rem] px-5 lg:px-20  lg:pt-10'>
        <div className='md:flex md:justify-between lg:flex lg:justify-between mb-10'>
          <div className='text-[#3b96a1] text-lg mb-4  lg:mb-0'>PROJECT PORTFOLIO</div>
          <div className='text-[#3b96a1] flex justify-start md:justify-end lg:justify-end'>
            <div className='lg:mx-3'>All</div>
            <div className='mx-3'>Vsat</div>
            <div className='mx-3'>Hytera</div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
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
    </div>
  )
}

export default ProjectPortFolio;
