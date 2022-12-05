import React from 'react'

const News = () => {
  return (
    <div className='w-full bg-[#ecf9fa] pb-24 px-10 lg:px-20'>
        <div className='text-2xl lg:mb-24 mb-10 text-[#3b96a1] text-center pt-20 lg:text-4xl'>NEWS & EVENT</div>
        <div className='w-full h-full mb-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='w-full  bg-white px-0 py-5 rounded-xl shadow-2xl'>
                    <div className='bg-[#3b96a1] h-[10rem] md:h-[17rem] lg:h-[17rem] flex justify-center items-center'>
                        <img className='w-full h-[95%] hover:h-full cursor-pointer ' src={require(`../../../Assets/Images/telecome.jpg`)} />
                    </div>
                    <div className='px-6'>
                        <div className='text-xl mt-4 text-[#3b96a1]'>JUDUL ARTIKEL</div>
                        <div className='text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum soluta aperiam quod dolor ab quibusdam cum excepturi dolorum! Rerum sequi adipisci incidunt officiis tenetur tempora provident, quo esse velit?</div>
                        <button className='bg-[#3b96a1] text-white mt-4 py-1 px-4 rounded-full'>Read More...</button>
                    </div>
                </div>
                <div className='w-full  bg-white px-0 py-5 rounded-xl shadow-2xl'>
                    <div className='bg-[#3b96a1] h-[10rem] md:h-[17rem] lg:h-[17rem] flex justify-center items-center'>
                        <img className='w-full h-[95%] hover:h-full cursor-pointer ' src={require(`../../../Assets/Images/telecome.jpg`)} />
                    </div>
                    <div className='px-6'>
                        <div className='text-xl mt-4 text-[#3b96a1]'>JUDUL ARTIKEL</div>
                        <div className='text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum soluta aperiam quod dolor ab quibusdam cum excepturi dolorum! Rerum sequi adipisci incidunt officiis tenetur tempora provident, quo esse velit?</div>
                        <button className='bg-[#3b96a1] text-white mt-4 py-1 px-4 rounded-full'>Read More...</button>
                    </div>
                </div>
                <div className='w-full  bg-white px-0 py-5 rounded-xl shadow-2xl'>
                    <div className='bg-[#3b96a1] h-[10rem] md:h-[17rem] lg:h-[17rem] flex justify-center items-center'>
                        <img className='w-full h-[95%] hover:h-full cursor-pointer ' src={require(`../../../Assets/Images/telecome.jpg`)} />
                    </div>
                    <div className='px-6'>
                        <div className='text-xl mt-4 text-[#3b96a1]'>JUDUL ARTIKEL</div>
                        <div className='text-justify mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum soluta aperiam quod dolor ab quibusdam cum excepturi dolorum! Rerum sequi adipisci incidunt officiis tenetur tempora provident, quo esse velit?</div>
                        <button className='bg-[#3b96a1] text-white mt-4 py-1 px-4 rounded-full'>Read More...</button>
                    </div>
                </div>
            </div>
        </div>  
        <div className='text-[#3b96a1] underline text-xl cursor-pointer hover:text-[#4ec8d7] text-center md:text-end lg:text-end '>Show More</div>
    </div>
  )
}

export default News
