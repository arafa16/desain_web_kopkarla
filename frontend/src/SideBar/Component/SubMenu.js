import React from 'react'
import { Link } from 'react-router-dom';

const SubMenu = (props) => {
    const {datas, openSub} = props;
    
    return (
        <div className={`absolute mt-6 shadow-xl ${!openSub ? 'hidden' : ''} `}>
            <div className='bg-white py-1'>
                {datas.map((data, index)=>(
                    <Link to={data.link} >
                        <div key={index} className='my-2 py-1 px-2 text-gray-700 hover:text-[#3b96a1] '>
                            {data.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SubMenu
