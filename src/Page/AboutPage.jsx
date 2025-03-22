import React, { useRef } from 'react';
import ZoomParallax from '../Components/ZoomParallax/ZoomParallax';
import { useEffect, useState } from 'react';
import Loader from '../Components/Loader';
import Lenis from '@studio-freight/lenis';
import Footer from '../Components/Footer';
import profileImg from '../../public/images/profile.jpg';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const aboutRef = useRef(null);
  const aboutContentRefs = useRef([]);
  const textRef = useRef(null);

  // Smooth Scrolling Effect
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  // Remove additional delay after loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // GSAP Animation - Run as soon as loading is false
  useEffect(() => {
    if (!loading) {
      gsap.registerPlugin(ScrollTrigger);
      const elements = aboutContentRefs.current.filter((el) => el);

      if (elements.length > 0) {
        gsap.from(elements, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      const text = gsap.from(textRef.current, {
        opacity: 0,
        duration: 1,
        x: -30,
      });

      return () => {
        gsap.killTweensOf(elements);
        text.kill();
      };
    }
  }, [loading]);

  if (loading) return <Loader />;
  return (
    <div ref={aboutRef} className='bg-bg-color w-screen py-20'>
      <div className='relative z-10 h-auto lg:h-screen pb-10 bg-bg-color mt-10 text-white text-center lg:text-left px-16'>
        <h1 ref={textRef} className='text-3xl font-bold'>
          About me
        </h1>
        <div className='mt-5 flex items-center justify-center flex-col gap-10  lg:flex-row lg:items-start'>
          <div
            ref={(el) => (aboutContentRefs.current[0] = el)}
            className='w-full lg:w-[30%] flex items-center justify-center mt-8 lg:mt-0'>
            <img
              className='w-[270px] h-[270px] object-cover rounded-full '
              src={profileImg}
              alt=''
            />
          </div>
          <div
            ref={(el) => (aboutContentRefs.current[1] = el)}
            className='w-full lg:w-[40%]'>
            <h2 className='text-[1.5rem] font-bold'>A few words about me</h2>
            <p className='text-gray-400 text-justify mt-5'>
              Web developer with 2 years of experience, I am passionate about
              creating modern and interactive sites. Always accompanied by a
              good coffee, (obviously) , I put my creativity and my know-how at
              the service of your projects.
            </p>
            <p className='text-gray-400 text-justify mt-5'>
              A strong team player with a track record reliability and
              collaboration, I continually improve my skills through
              professional development activities and stay current on the latest
              design approaches and technologies.
            </p>
          </div>
          <div
            ref={(el) => (aboutContentRefs.current[2] = el)}
            className='flex w-[30%] gap-6 lg:gap-16 flex-col items-center justify-center lg:flex-row lg:items-start'>
            <div className=''>
              <h3 className='text-[1.1rem]'>Socials</h3>
              <div className='text-gray-400 flex gap-3 mt-5 lg:flex-col'>
                <NavLink>Facebook</NavLink>
                <NavLink>Instagram</NavLink>
                <NavLink>LinkedIn</NavLink>
                <NavLink>Github</NavLink>
              </div>
            </div>
            <div className='mt-5'>
              <h3 className='text-[1.1rem]'>Contact</h3>
              <div className='flex items-center justify-start gap-3 text-gray-400 mt-5 lg:flex-col lg:items-start'>
                <p>harveysacol@gmail.com</p>
                <p>090639975499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-10'>
        <ZoomParallax />
      </div>
      <section className='h-screen'></section>
      <Footer />
    </div>
  );
};

export default AboutPage;
