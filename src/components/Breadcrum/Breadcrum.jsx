import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className='flex items-center gap-4 sm:gap-6 md:gap-8 text-gray-600 text-xs sm:text-sm md:text-lg font-semibold capitalize m-4 mx-4 sm:mx-12 md:mx-24 lg:mx-36'>
            <span>HOME</span>
            <i className='bx bx-arrow-back bx-rotate-180'></i>
            <span>SHOP {product.category}</span>
            <i className='bx bx-arrow-back bx-rotate-180'></i>
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
