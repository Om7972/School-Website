import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these with your actual image imports
  const gall1 = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500';
  const gall2 = 'https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500';
  const gall3 = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500';
  const gall4 = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500';

  const galleryItems = [
    {
      id: 1,
      image: gall1,
      title: "Symphonics",
      description: "An in-house phonics program for students from Pre-school to Std. V that aims to develop a strong foundation in the English language."
    },
    {
      id: 2,
      image: gall2,
      title: "Remedial Learning",
      description: "As every child learns at their own pace, Narayana Innovation Center provides resources that aid school teachers in providing additional support for students."
    },
    {
      id: 3,
      image: gall3,
      title: "Spell The Beans",
      description: "Narayana Innovation Center introduces the 'Spell the Beans' programme, which incorporates fun & engaging activities into the curriculum to help retain spellings."
    },
    {
      id: 4,
      image: gall4,
      title: "Theatre In Education",
      description: "Taking a step beyond academics, Narayana Innovation Center introduces a Theatre in Education program that integrates interactive theatre practices and drama activities."
    }
  ];

  // For carousel functionality (if needed)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextModalImage = () => {
    if (selectedImage) {
      const currentIdx = galleryItems.findIndex(item => item.id === selectedImage.id);
      const nextIndex = (currentIdx + 1) % galleryItems.length;
      setSelectedImage(galleryItems[nextIndex]);
    }
  };

  const prevModalImage = () => {
    if (selectedImage) {
      const currentIdx = galleryItems.findIndex(item => item.id === selectedImage.id);
      const prevIndex = (currentIdx - 1 + galleryItems.length) % galleryItems.length;
      setSelectedImage(galleryItems[prevIndex]);
    }
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
              A Glimpse into a Student's Journey at Narayana
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our innovative educational programs designed to nurture every child's potential
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            {/* Navigation Arrows - Only needed if using carousel view */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              style={{ display: 'none' }} // Hidden since we're using grid view
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              style={{ display: 'none' }} // Hidden since we're using grid view
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Click to view indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Dots Indicator - Only needed if using carousel view */}
            <div className="flex justify-center mt-8 space-x-2" style={{ display: 'none' }}>
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-purple-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">
                Click on images to view in larger size
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;