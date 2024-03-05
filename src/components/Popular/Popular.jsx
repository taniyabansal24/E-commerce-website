import React from 'react';
import Item from '../Item/Item';
import data_product from '../assets/data';

const Popular = () => {
  return (
    <div className='popular container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-4'>Popular in Women</h1>
      <hr className='my-4' />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
