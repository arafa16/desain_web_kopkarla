import React, { useState, useRef, useEffect } from 'react'
import {ListMenu} from './ListMenu';
import {Link} from "react-router-dom";
import SubMenu from './SubMenu';
import { FiMenu } from "react-icons/fi";
import { BsFlag } from "react-icons/bs";

const Menu = () => {
    const [menus, setMenus] = useState(ListMenu);
    const [openMenu, setOpenMenu] = useState(false);
    const [openFlag, setOpenFlag] = useState(false);

    const handleClickMenu = name => () => {
        setMenus(menus => 
            menus.map( menu => ({
                ...menu,
                active: menu.name === name
            }))
        );
        setOpenFlag(false);
    }

    let menuRef = useRef();

    useEffect(()=>{
        const handleMenu = (event) => {
            if(!menuRef.current.contains(event.target)){
                setMenus(ListMenu);
            }
        }

        document.addEventListener("mousedown", handleMenu);

        return () => {
            document.removeEventListener("mousedown", handleMenu);
        };
    });

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
        setOpenFlag(false);
    }

    const handleLanguage = () => {
        setOpenFlag(!openFlag);
        setOpenMenu(false);
    }

    return (
        <div className='relative w-full flex items-center bg-orange-white'>
            <div>
                <div ref={menuRef} className={`${!openMenu ? 'hidden md:hidden lg:' : ''} absolute z-[3] right-0 lg:right-16 top-16 lg:top-0 bg-white lg:bg-none lg:flex lg:justify-between lg:h-full items-center `} >
                    {menus.map((menu, index)=>(
                        <div key={index}  className='mx-3 text-xs visible d my-4 ' onMouseEnter={handleClickMenu(menu.name)}>
                            <Link className='text-gray-500 cursor-pointer hover:text-[#3b96a1]' to={menu.subs ? '' : menu.link} >{menu.name}</Link> 
                            {menu.subs ? 
                                <SubMenu datas={menu.subs} openSub={menu.active} />
                                : ''
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute z-[3] right-0 flex items-center '>
                <div className='cursor-pointer lg:pb-0 mr-4'>
                    <BsFlag onMouseEnter={()=>setOpenFlag(true)} onClick={()=>handleLanguage()} />
                    <div className={`absolute right-8 bg-white mt-7 text-gray-500 ${!openFlag ? 'hidden' : ''}`}>
                        <div className='my-2 cursor-pointer hover:text-[#3b96a1] px-2'>IND</div>
                        <div className='my-2 cursor-pointer hover:text-[#3b96a1] px-2'>ENG</div>
                    </div>
                </div>
                <div className='visible lg:invisible'>
                    <FiMenu onClick={()=>handleOpenMenu()} />
                </div>
            </div>
        </div>
    )
}

export default Menu;
