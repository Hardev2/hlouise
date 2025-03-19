'use client';

import { useEffect, useRef } from 'react';
import pic1 from '../../assets/image/pic1.png';
import pic2 from '../../assets/image/pic2.png';
import pic3 from '../../assets/image/pic3.png';
import pic4 from '../../assets/image/proj3.jpg';
import pic5 from '../../assets/image/proj4.jpg';
import pic6 from '../../assets/image/arrow.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Link } from 'react-router-dom';

function HorizontalSlider() {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    // Get the width of the slider
    const sliderWidth = slider.scrollWidth;
    const containerWidth = container.offsetWidth;

    // Create the horizontal scrolling animation
    gsap.to(slider, {
      x: () => -(sliderWidth - containerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${sliderWidth - containerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Array of image data
  const images = [
    {
      id: 1,
      alt: 'Image 1',
      src: pic6,
      description: 'Best Projects',
    },
    {
      id: 2,
      alt: 'Image 2',
      src: pic2,
    },
    {
      id: 3,
      alt: 'Image 3',
      src: pic1,
    },
    {
      id: 4,
      alt: 'Image 4',
      src: pic3,
    },
    {
      id: 5,
      alt: 'Image 5',
      src: pic4,
    },
    {
      id: 6,
      alt: 'Image 6',
      src: pic5,
    },
  ];

  return (
    <div className='relative z-20 min-h-screen bg-bg-color'>
      {/* Slider container */}
      <div ref={containerRef} className='h-screen w-full overflow-hidden'>
        <div ref={sliderRef} className='flex items-center h-full'>
          {images.map((image, index) => (
            <Link key={image.id}>
              <div className='min-w-[100vw] md:min-w-[50vw] h-[70vh] p-4 flex items-center justify-center'>
                <div className='relative w-full h-full rounded overflow-hidden shadow-xl'>
                  <div className='flex items-center justify-start h-full'>
                    {image.description && ( // Only display if description exists
                      <h1 className='relative left-20 text-white font-custom text-[3rem]'>
                        {image.description}
                      </h1>
                    )}
                    <img
                      src={image.src || '/placeholder.svg'}
                      alt={image.alt}
                      className={`object-cover h-full ${
                        index === 0 ? 'w-[0]' : 'w-full'
                      } lg:w-full`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalSlider;
