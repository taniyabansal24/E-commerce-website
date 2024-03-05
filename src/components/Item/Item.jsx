import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg m-4 relative transform hover:scale-110 transition-transform duration-300'>
      <Link to={`/product/${props.id}`}>
        <img 
          onClick={() => window.scrollTo(0, 0)} 
          className='w-full h-56 object-cover'
          src={props.image}
          alt={props.name} 
        />
      </Link>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.name}</div>
        <p className='text-gray-700 text-base'>
          New Price: ₹{props.new_price}
        </p>
        <p className='text-gray-700 text-base'>
          Old Price: ₹{props.old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
