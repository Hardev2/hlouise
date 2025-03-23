'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Project from '../../Data/Project';
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

  return (
    <div className='relative z-20 min-h-screen bg-bg-color'>
      {/* Slider container */}
      <div ref={containerRef} className='h-screen w-full overflow-hidden'>
        <div ref={sliderRef} className='flex items-center h-full'>
          {Project.map((image, index) => (
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
