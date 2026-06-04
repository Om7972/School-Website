import React, { useState, useEffect } from 'react';

import microbialCycleImg from '../assets/microbial-cycle-rangoli.png';
import scoutGuideImg from '../assets/scout-guide-group.png';
import ganeshImg from '../assets/ganesh-chaturthi-celebration.png';
import classroomImg from '../assets/classroom-students-writing.png';
import awarenessMarchImg from '../assets/narayana-kids-awareness-march.png';
import fieldTripImg from '../assets/field-trip-vednandini.png';
import backpackImg from '../assets/backpack-distribution-washim.png';
import celebrationImg from '../assets/school-celebration-rose.png';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: microbialCycleImg,
      title: 'Science Exhibition — Microbial Cycle',
      description:
        'Students showcase creative science learning through a vibrant rangoli depicting the microbial cycle at our school exhibition.',
      layout: 'tall',
    },
    {
      id: 2,
      image: scoutGuideImg,
      title: 'Scouts & Guides',
      description:
        'Our scouts and guides stand proudly with faculty, building discipline, leadership, and service-minded values.',
      layout: 'wide',
    },
    {
      id: 3,
      image: ganeshImg,
      title: 'Ganesh Chaturthi Celebration',
      description:
        'Students participate in cultural festivities with devotion, creativity, and respect for tradition.',
      layout: 'tall',
    },
    {
      id: 4,
      image: classroomImg,
      title: 'Focused Classroom Learning',
      description:
        'A calm, engaging classroom where students apply themselves to reading, writing, and collaborative study.',
      layout: 'standard',
    },
    {
      id: 5,
      image: awarenessMarchImg,
      title: 'Community Awareness March',
      description:
        'Narayana\'s Kids students spread messages on water conservation and civic responsibility across Washim.',
      layout: 'tall',
    },
    {
      id: 6,
      image: fieldTripImg,
      title: 'Educational Field Trip',
      description:
        'Students and teachers explore beyond the classroom at Vednandini Agri Food Court — learning through experience.',
      layout: 'wide',
    },
    {
      id: 7,
      image: backpackImg,
      title: 'Backpack Distribution',
      description:
        'Teachers and students celebrate the distribution of new school backpacks, supporting every child\'s learning journey.',
      layout: 'wide',
    },
    {
      id: 8,
      image: celebrationImg,
      title: 'School Celebrations',
      description:
        'Festive moments that strengthen the bond between teachers, students, and our school community.',
      layout: 'standard',
    },
  ];

  const imageContainerClass = (layout) => {
    switch (layout) {
      case 'tall':
        return 'relative h-64 sm:h-72 overflow-hidden';
      case 'wide':
        return 'relative h-52 sm:h-56 overflow-hidden';
      default:
        return 'relative h-48 overflow-hidden';
    }
  };

  const imageClass = (layout) => {
    const base =
      'w-full h-full transition-transform duration-300 group-hover:scale-110';
    if (layout === 'tall') return `${base} object-cover object-center`;
    if (layout === 'wide') return `${base} object-cover object-[center_30%]`;
    return `${base} object-cover object-center`;
  };

  const gridItemClass = (layout) => {
    if (layout === 'wide') return 'md:col-span-2';
    return '';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length
    );
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
      const currentIdx = galleryItems.findIndex((item) => item.id === selectedImage.id);
      const nextIndex = (currentIdx + 1) % galleryItems.length;
      setSelectedImage(galleryItems[nextIndex]);
    }
  };

  const prevModalImage = () => {
    if (selectedImage) {
      const currentIdx = galleryItems.findIndex((item) => item.id === selectedImage.id);
      const prevIndex =
        (currentIdx - 1 + galleryItems.length) % galleryItems.length;
      setSelectedImage(galleryItems[prevIndex]);
    }
  };

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
              A Glimpse into a Student&apos;s Journey at Narayana
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real moments from our classrooms, exhibitions, celebrations, and community activities in Washim
            </p>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              style={{ display: 'none' }}
              type="button"
              aria-hidden
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              style={{ display: 'none' }}
              type="button"
              aria-hidden
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100 ${gridItemClass(item.layout)}`}
                  onClick={() => openModal(item)}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(item)}
                  role="button"
                  tabIndex={0}
                >
                  <div className={imageContainerClass(item.layout)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={imageClass(item.layout)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              type="button"
              aria-label="Close"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              type="button"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
              type="button"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className={`relative overflow-hidden bg-slate-900 ${
                selectedImage.layout === 'tall'
                  ? 'h-[min(70vh,600px)]'
                  : 'h-96 md:h-[min(55vh,480px)]'
              }`}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className={`w-full h-full ${
                  selectedImage.layout === 'wide'
                    ? 'object-contain'
                    : 'object-contain'
                }`}
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">{selectedImage.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
