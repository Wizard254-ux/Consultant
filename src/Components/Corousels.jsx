import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  // Sample images - replace with your actual image paths
  const images = [
    'https://bobgroganconsulting.com/wp-content/uploads/2024/03/close-up-business-team-analyzing-income-charts-graphs-with-modern-laptop-computer-business-analysis-strategy-concept.webp',
    'https://images.pexels.com/photos/4098374/pexels-photo-4098374.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next image with circular rotation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Handle previous image with circular rotation
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding effect
  useEffect(() => {
    const slideInterval = setInterval(nextImage, 10000); // 10 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[380px] overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        //   width: `${images.length * 100}%`
        }}
      >
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-full h-full flex-shrink-0 relative"
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover "
            />
            
            {/* Overlay Gradient for Better Textadability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>
             <div class="text-overlay absolute w-[40%] md:w-[25%] h-36 items-center flex justify-start py-9">
      <span id="text">Innovate <br/>Empower<br/> Succeed.</span>
    </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevImage} 
        className="absolute top-1/2 left-4 -translate-y-1/2 
        bg-white/20 hover:bg-white/40 text-white p-3 rounded-full 
        transition-all duration-300 z-50"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextImage} 
        className="absolute top-1/2 right-4 -translate-y-1/2 
        bg-white/20 hover:bg-white/40 text-white p-3 rounded-full 
        transition-all duration-300 z-50"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-50">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125 w-5' 
                : 'bg-white/50 scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;