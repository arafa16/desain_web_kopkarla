import React from 'react'

const Product = () => {
  return (
    <div className='relative px-8 lg:px-20 mb-36'>
        <div className='w-full lg:flex lg:justify-between items-center mb-36'>
            <div className='bg-[#3b96a1] w-full lg:w-1/2 lg:h-[30rem] flex justify-end mb-4'>
                <img className='w-[98%] h-full' src={require(`../../../Assets/Images/telecome.jpg`)} />
            </div>
            <div className='w-full lg:w-1/2 lg:pl-10'>
                <div className='text-xl md:text-2xl lg:text-3xl text-[#3b96a1] opacity-100 hover:opacity-70 cursor-pointer mb-10'>TELECOM NETWORK INSTALLATION & MAINTENANCE SERVICE</div>
                <div className='text-sm md:text-lg lg:text-xl mb-10 text-gray-500 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe unde sequi repellendus, ipsum nihil facilis architecto eum est. Quis aspernatur suscipit deleniti aliquid perspiciatis hic tempore cupiditate, mollitia quas.
                    {/* <div className='my-4'># FIBER OPTIC NETWORK INSTALATION</div>
                    <div className='my-4'># VSAT NETWORK INSTALATION</div>
                    <div className='my-4'># WIRELESS NETWORK INSTALLATION</div> */}
                </div>
                <button className='bg-[#3b96a1] opacity-100 hover:opacity-70 text-white px-6 py-2 rounded-xl'>View Information</button>
            </div>
        </div>
        <div className='w-full flex flex-col-reverse lg:flex-row lg:justify-between items-center mb-36'>
            <div className='w-full lg:w-1/2 lg:pr-10'>
                <div className='text-xl md:text-2xl lg:text-3xl text-[#3b96a1] opacity-100 hover:opacity-70 cursor-pointer mb-10'>TELECOM PRODUCT SOLUTION</div>
                <div className='text-sm md:text-lg lg:text-xl mb-10 text-gray-500 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi saepe unde sequi repellendus, ipsum nihil facilis architecto eum est. Quis aspernatur suscipit deleniti aliquid perspiciatis hic tempore cupiditate, mollitia quas.
                    {/* <div className='my-4'>MOBILE RADIO (HANDY TALKY)  # </div>
                    <div className='my-4'>POWER SYSTEM PROTECTION #</div>
                    <div className='my-4'>KABEL FIBER OPTIC & AKSESORIS #</div> */}
                </div>
                <button className='bg-[#3b96a1] opacity-100 hover:opacity-70 text-white px-6 py-2 rounded-xl'>View Information</button>
            </div>
            <div className='bg-[#3b96a1] w-full lg:w-1/2 lg:h-[30rem] flex justify-start mb-4'>
                <img className='w-[98%] h-full' src={require(`../../../Assets/Images/hytera.jpg`)} />
            </div>
        </div>
    </div>
  )
}

export default Product;
