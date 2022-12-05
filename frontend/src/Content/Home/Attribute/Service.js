import React from 'react';
import { FiCheck } from "react-icons/fi";

const Service = (props) => {
    const {DataService} = props;

    return (
        <div className='w-full mb-36 mx-auto'>
            <div className='w-[80%] mx-auto text-center mb-24 text-gray-600'>
                <div className='text-3xl mb-12 text-[#3b96a1]'>WHY CHOOSE US</div>
                <div className='md:text-md lg:text-xl'>We are committed to giving our customers the best service and solution. Here are some good reasons why you should use our service:</div>
            </div>
            <div className='w-[90%] mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer'>
                {DataService.map((service, index)=>(
                    <div className='mx-2 bg-gradient-to-t from-[#2c818b] to-[#46c2d1] opacity-100 hover:opacity-80 grid text-center px-4 min-h-[10rem]  w-[18rem] text-white rounded-xl'>
                            <div className='grid items-end justify-center mb-4'><FiCheck className='grid items-button text-3xl' /></div>
                            {service.keterangan}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service
