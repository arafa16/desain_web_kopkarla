import React from 'react';
import { ListMenu } from '../../SideBar/Component/ListMenu';
const MenuFooter = () => {
  return (
    <div>
        <div className='w-full  bg-[#ecf9fa] shadow-2xl'>
            <div className='grid md:grid-cols-4 lg:grid-cols-4 gap-4 px-10 lg:px-20 py-20'>
                {ListMenu.map((menu, index)=>(
                    <div><p className='font-bold text-[#3b96a1] mb-8 cursor-pointer'>{menu.name}</p>
                    {menu.subs ? 
                        menu.subs.map((sub, index)=>(
                                <div key={index} className='lg:my-3 my-4 hidde py-2 text-[#3b96a1] text-sm'><p className='cursor-pointer'>{sub.name}</p> <hr/></div>
                        ))
                        :
                        ''
                    }
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MenuFooter
