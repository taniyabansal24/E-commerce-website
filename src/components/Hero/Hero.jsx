import React from 'react'
import poster from '../assets/poster.jpg';

const Hero = () => {
  return (
    <div>
      <div className="relative bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
        <img src={poster} alt="Hero Image" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Josefin Sans, sans-serif' }}>Welcome to our UrbanNest</h1>
                <p className="text-lg md:text-xl mb-8" style={{ fontFamily: 'Kode Mono, monospace' }}>Discover our latest collection of high-quality products</p>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 inline-block">Shop Now</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
