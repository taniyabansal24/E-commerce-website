import React, { useContext } from 'react';
import start_icon from "../assets/star_icon.png";
import start_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='main-image flex justify-center items-center'>
                <img className='w-72 h-96 rounded-md object-cover mb-8' src={product.image} alt="" />
                </div>
                
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-wrap justify-center'>
                        <img className='small-images w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover cursor-pointer hover:opacity-75 transition duration-300 mb-2.5 mr-4' src={product.image} alt="" />
                        <img className='small-images w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover cursor-pointer hover:opacity-75 transition duration-300 mb-2.5 mr-4' src={product.image} alt="" />
                        <img className='small-images w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover cursor-pointer hover:opacity-75 transition duration-300 mb-2.5 mr-4' src={product.image} alt="" />
                        <img className='small-images w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover cursor-pointer hover:opacity-75 transition duration-300 mb-2.5 mr-4' src={product.image} alt="" />
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
                    <div className='flex items-center mb-2'>
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_dull_icon} alt="" />
                        <p className='ml-2'>125</p>
                    </div>
                    <div className='productdisplay-right-prices flex items-center mb-2'>
                        {/* Price section */}
                        <div className='productdisplay-right-price-old text-gray-500 line-through mr-4'>
                            ₹{product.old_price}
                        </div>
                        <div className='productdisplay-right-price-new text-gray-900 font-bold'>
                            ₹{product.new_price}
                        </div>
                    </div>
                    <div className='text-lg mb-4'>
                        <p className='line-clamp-3'>{product.description}</p>
                    </div>
                    <div className='flex mb-4'>
                        <div className='mr-4'>Select Size:</div>
                        <div className='flex space-x-4'>
                            <div className='border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300 py-1 px-3'>S</div>
                            <div className='border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300 py-1 px-3'>M</div>
                            <div className='border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300 py-1 px-3'>L</div>
                            <div className='border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300 py-1 px-3'>XL</div>
                            <div className='border border-gray-400 rounded-full cursor-pointer hover:bg-gray-200 transition duration-300 py-1 px-3'>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}  className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300'>ADD TO CART</button>
                    <p className='text-sm mt-4'><span className='font-bold'>Category: </span>Women, T-Shirt, Crop Top</p>
                    <p className='text-sm mb-16'><span className='font-bold'>Tags: </span>Women, T-Shirt, Crop Top</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;


