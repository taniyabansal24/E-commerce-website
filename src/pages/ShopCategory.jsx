import React from 'react';
import {ShopContext} from '../context/ShopContext';
import 'boxicons/css/boxicons.min.css'; 
import Item from '../components/Item/Item';
import all_product from '../components/assets/all_products';

const ShopCategory = (props) => {
  return (
    <div>
      <div className="relative w-full overflow-hidden shadow-lg">
        <div className="flex justify-center items-center">
          <video src={props.banner} autoPlay loop muted className="rounded-lg object-cover w-5/6 h-80 md:w-3/5 md:h-96 m-7">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex justify-between items-center mx-4 md:mx-10'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='px-4 py-2 rounded-full border border-gray-300'>
          Sort by <i className='bx bx-chevron-down'></i>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-4 md:mx-10 my-10'>
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center my-10'>
      </div>
    </div>
  );
};

export default ShopCategory;
