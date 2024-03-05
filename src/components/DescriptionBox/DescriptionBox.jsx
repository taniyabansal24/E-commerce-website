import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='descriptionbox bg-white rounded-lg shadow-md p-6'>
        <div className='descriptionbox-navigator flex mb-4'>
          <div className='descriptionbox-nav-box flex-1 text-center py-2 border-r border-gray-400 cursor-pointer'>
            Description
          </div>
          <div className='description-nav-box flex-1 text-center py-2 cursor-pointer'>
            Reviews (122)
          </div>
        </div>
        <div className='descriptionbox-description'>
          <p className='text-base text-gray-700'>
            UrbanNest is a vibrant and contemporary online clothing store that caters to fashion-forward individuals seeking trendy and chic apparel. Inspired by urban culture and the bustling energy of city life, UrbanNest offers a curated collection of clothing and accessories designed to elevate your style.
          </p>
          <p className='text-base text-gray-700 mt-5'>
            At UrbanNest, we pride ourselves on staying ahead of the fashion curve, constantly refreshing our inventory with the latest trends and timeless classics. Whether you're looking for casual streetwear, sophisticated work attire, or statement pieces for a night out, UrbanNest has something for every occasion and personal taste.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
