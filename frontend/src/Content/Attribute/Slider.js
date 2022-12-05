import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { FiCircle, FiDisc } from "react-icons/fi";

const Slider = (props) => {
  const {images} = props;
  const [current, setCurret] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  let timeOut = null;

  useEffect(()=>{
    timeOut = autoPlay && setTimeout(()=>{
      slideRight();
    }, 5000);
  });

  const slideRight = () => {
    setCurret(current === images.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurret(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className=' mt-1 mb-24 '>
        <div className='relative w-full min-h-[13rem] md:min-h-[30rem] lg:min-h-[45rem]' onMouseEnter={()=>setAutoPlay(false)} onMouseLeave={()=>setAutoPlay(true)}>
          {images.map((image, index)=>(

            <img className={`absolute w-full h-full ${index === current ? " duration-[1000ms]" : "opacity-0 duration-[1000ms]"}`} src={require(`../../Assets/Images/Sliders/${image.image}`)} />

          ))}
          <div className='absolute z-[2] h-full flex items-end justify-end w-full opacity-70 pr-72 pb-16'>
            <div className='flex items-center'>
              <div className='cursor-pointer hover:opacity-80 text-cyan-600' onClick={()=>slideLeft()}><AiOutlineDoubleLeft /></div>
              {images.map(( image , index)=>(
                <FiCircle className={`mx-6 text-xs  ${index==current ? 'text-yellow-600' : 'text-cyan-600'} `} />
              ))}
              <div className='cursor-pointer hover:opacity-80 text-cyan-600' onClick={()=>slideRight()}><AiOutlineDoubleRight /></div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Slider
