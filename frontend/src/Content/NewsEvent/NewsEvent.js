import React from 'react'
import Header from '../Attribute/Header';
import { NewsMenus } from './Attribute/NewsMenus';
import ViewContent from './Attribute/ViewContent';

const NewsEvent = () => {
    const title = "NEWS & EVENT";
  return (
    <div>
        <Header menus={NewsMenus}  title={title}  />
        <ViewContent />
    </div>
  )
}

export default NewsEvent;
