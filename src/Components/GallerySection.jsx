import React, { useState } from 'react';
import { Expand, ArrowLeft, ArrowRight } from 'lucide-react';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const galleryImages = [
    {
      src: "team.webp",
      alt: "Team Strategy Session",
      description: "Collaborative strategy planning with executive team"
    },
    {
      src: "analysis2.webp",
      alt: "Data Analysis Workshop",
      description: "In-depth data visualization and insights presentation"
    },
    {
      src: "DrErick2.webp",
      alt: "Leadership Training",
      description: "Interactive leadership development seminar"
    },
    {
      src: "TeamWork.webp",
      alt: "Youth Consultation",
      description: "Building the youth"
    },
    {
      src: "OmuyaAi.webp",
      alt: "AI Conference",
      description: "Attending Artificial Inteligence Conference"
    },
    {
      src: "programming.webp",
      alt: "Technology Innovation",
      description: "Programming "
    },
    {
      src: "OmuyaSelfie.webp",
      alt: "Team Meeting",
      description: "Planning on Organization Strategy "
    },
    {
      src: "https://images.pexels.com/photos/6120166/pexels-photo-6120166.jpeg?auto=compress&cs=tinysrgb&w=300",
      alt: "Business Metrics Review",
      description: "Performance optimization meeting"
    },
    {
      src: "OmuyaNew.webp",
      alt: "Technology Innovation",
      description: "Artificial intelligence Conference at Nairobi "
    },
  ];

  const openImageModal = (image) => {
    setCurrentImage(image);
  };

  const closeImageModal = () => {
    setCurrentImage(null);
  };

  const navigateImage = (direction) => {
    if (!currentImage) return;
    const currentIndex = galleryImages.findIndex(img => img === currentImage);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImage(galleryImages[newIndex]);
  };

  return (
    <section className="pb-16 bg-white">
      <div className="w-full mx-auto ">
      <div className="text-center mb-12 h-[140px] md:h-[200px] bg-gray-300 pt-7"style={{
    backgroundImage: "url('https://bobgroganconsulting.com/wp-content/themes/smallville/assets/images/bg-pattern.png')",
  }}>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Our Work in Action</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Glimpse into our collaborative approach and transformative consulting engagements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImageModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Expand className="text-white w-12 h-12" />
              </div>
            </div>
          ))}
        </div>

        {currentImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={closeImageModal}
          >
            <div 
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-white/50 rounded-full p-2 hover:bg-white/75 transition"
                onClick={() => navigateImage('prev')}
              >
                <ArrowLeft className="w-8 h-8 text-gray-800" />
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-white/50 rounded-full p-2 hover:bg-white/75 transition"
                onClick={() => navigateImage('next')}
              >
                <ArrowRight className="w-8 h-8 text-gray-800" />
              </button>
              
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{currentImage.alt}</h3>
                <p className="text-sm">{currentImage.description}</p>
              </div>
              
              <button 
                className="absolute top-4 right-4 text-white bg-red-500/50 hover:bg-red-500/75 rounded-full p-2"
                onClick={closeImageModal}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;