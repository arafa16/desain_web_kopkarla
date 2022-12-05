import React from 'react'
import { DownloadMenus } from './Attribute/DownloadFile/DownloadMenus';
import Header from '../Attribute/Header'

const DownloadFile = () => {
  const title = "DOWNLOAD FILE";
  return (
    <div>
      <Header menus={ DownloadMenus } title={title} />
      <div className='mx-32 my-20 flex justify-center'>
        <div>
          <img src={require('../../Assets/Images/AboutUs/buku.png')} />
          <div className='flex justify-center my-10'>
            <button className='bg-teal-600 hover:bg-teal-500 px-10 py-1 rounded-full text-white '>Download</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadFile;
