import React, { Children } from 'react'
import AboutUs from './Introduction/AboutUs'

const ViewContent = (props) => {
    const {children} = props;
  return (
    <div className='px-32 pt-14 w-full'>
        <div className='w-full '>
            {children}
        </div>
    </div>
  )
}

export default ViewContent
