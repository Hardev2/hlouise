import React, { useRef, useEffect } from 'react';
import Rose from '../assets/rose.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HorizontalSlider from '../Components/ScrollProject/HorizontalSlider';

const HomePage = () => {
  const bioTextRef = useRef(null);
  const aboutWrapperRef = useRef(null);
  const nameRef = useRef(null);
  const heroRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bioAnim = gsap.to(bioTextRef.current, {
      yPercent: -70,
      scrollTrigger: {
        trigger: aboutWrapperRef.current,
        start: 'top 0',
        scrub: 3,
      },
    });

    const nameAnim = gsap.to(nameRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        scrub: 1.9,
      },
    });

    const descAnim = gsap.to(descriptionRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 30%',
        scrub: 1.9,
      },
    });

    // Cleanup function
    return () => {
      bioAnim.kill();
      nameAnim.kill();
      descAnim.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='bg-bg-color w-full min-h-screen '>
      <div
        ref={heroRef}
        className='text-center flex flex-col items-center justify-center relative py-20'>
        <h1
          ref={nameRef}
          className='text-white text-[6rem] lg:text-[12rem] font-[800] uppercase'>
          Sacol <br />
          <span className='font-custom font-thin capitalize'>
            Harvey Louise
          </span>
        </h1>
        <div className='absolute top-[20%] lg:top-[15%] left-1/2 transform -translate-x-1/2 mix-blend-difference animate-spin w-[350px] lg:w-[500px]'>
          <img
            src={Rose || '/placeholder.svg'}
            alt='Rose decoration'
            className='max-w-full'
          />
        </div>
        <h2
          ref={descriptionRef}
          className='uppercase text-gray font-[700] lg:text-2xl'>
          <span className='text-white'>We developer</span> spending{' '}
          <span className='text-white'>less</span> time coding <br /> stuff than
          drinking coffee{' '}
        </h2>
      </div>
      <section
        ref={aboutWrapperRef}
        className='w-[95%] h-[120vh] bg-bg-color flex items-center justify-center '>
        <div className='flex items-center  justify-center lg:justify-start text-justify lg:text-left relative top-10 lg:left-6 px-4'>
          <h1
            ref={bioTextRef}
            className='text-gray text-4xl font-[700] tracking-wide lg:text-[4rem] lg:leading-[100px] w-[70%]'>
            <span className='font-custom text-white'>Hi,</span> My name is{' '}
            <span className='font-custom text-white'>Harvey, </span>I am
            twenty-three years old, a{' '}
            <span className='font-custom text-white'>Front-end Developer </span>
            based in <span className='font-custom text-white'>Cebu</span>,
            Philippines.
          </h1>
        </div>
      </section>
      <HorizontalSlider />
      <section className='h-screen'></section>
    </div>
  );
};

export default HomePage;
