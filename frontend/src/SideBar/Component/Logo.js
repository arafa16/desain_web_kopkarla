import React from 'react';

const Logo = () => {

    const logo = "Logo.png";

    return (
        <div className='relative w-1/4'>
            <div className='flex items-center my-2'>
                <img className='w-10' src={require(`../../Assets/Images/${logo}`)} />
            </div>
        </div>
    )
}

export default Logo
