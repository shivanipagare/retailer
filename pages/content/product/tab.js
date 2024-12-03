import React from 'react'
import { Tabs } from 'antd';
import Link from 'next/link';
import Addproduct from './addproduct';
import Product from './product';
import Sidebar from '@/pages/component/sidebar';
const tab = () => {
    const onChange = (key) => {
        console.log(key);
      };

    const items = [
        {
            key: '1',
            label: <h5>View</h5>,
            children: <Product/>,
          },
        {
          key: '2',
          label: <h5>Add</h5>,
          children: <Addproduct/>,
        },
        
       
      ];

  return (
    <>
    <Sidebar>
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    </Sidebar>
    </>
  )
}

export default tab
