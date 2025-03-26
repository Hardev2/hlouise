'use client';
import { useRef, useEffect } from 'react';
import ZoomParallax from '../Components/ZoomParallax/ZoomParallax';
import Lenis from '@studio-freight/lenis';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { SiTailwindcss } from 'react-icons/si';
import {
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import { Square, X, Minus } from 'lucide-react';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const aboutContentRefs = useRef([]);
  const textRef = useRef(null);
  const techWrapperRef = useRef(null);
  const techStackRef = useRef([]);
  const expWrapperRef = useRef(null);
  const experienceRef = useRef(null);
  const expTitleRef = useRef(null);

  // Smooth Scrolling Effect
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup lenis when component unmounts
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Filter out null elements
    const elements = aboutContentRefs.current.filter((el) => el);
    const tech = techStackRef.current.filter((tech) => tech);

    // Animation for about content
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Animation for text
    const text = gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1 }
    );

    // Animation for experience title
    const expTitle = gsap.fromTo(
      expTitleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: expWrapperRef.current,
          start: 'top 130%',
          end: 'bottom 100%',
          scrub: true,
        },
      }
    );

    // Animation for experience content
    const experience = gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: expWrapperRef.current,
          start: 'top 130%',
          end: 'bottom 100%',
          scrub: true,
        },
      }
    );

    // Animation for tech stack
    if (tech.length > 0) {
      gsap.fromTo(
        tech,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: techWrapperRef.current,
            start: 'top 110%',
            end: 'bottom 120%',
            scrub: 5,
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Cleanup animations on unmount
    return () => {
      if (elements.length > 0) {
        gsap.killTweensOf(elements);
      }
      if (tech.length > 0) {
        gsap.killTweensOf(tech);
      }
      text.kill();
      expTitle.kill();
      experience.kill();

      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleDownload = () => {
    const fileUrl = '/Files/Resume.pdf'; // File inside public/files/
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Sacol, Harvey louise.pdf'; // Rename file if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={aboutRef} className='bg-bg-color w-screen py-20'>
      <div className='relative z-10 h-auto lg:h-screen pb-10 bg-bg-color mt-10 text-white text-center lg:text-left px-16'>
        <h1 ref={textRef} className='text-3xl font-bold'>
          About me
        </h1>
        <div className='mt-5 flex items-center justify-center flex-col gap-10 lg:flex-row lg:items-start'>
          <div
            ref={(el) => (aboutContentRefs.current[0] = el)}
            className='w-full lg:w-[30%] flex items-center justify-center mt-8 lg:mt-0'>
            <img
              className='w-[min(50vw,270px)] h-[min(50vw,270px)] object-cover rounded-full aspect-square'
              src='/images/profile.jpg'
              alt='Profile'
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
            <div className='mt-5'>
              <button className='text-30-percent' onClick={handleDownload}>
                Resume
              </button>
            </div>
          </div>
          <div
            ref={(el) => (aboutContentRefs.current[2] = el)}
            className='flex w-full lg:w-[30%] gap-6 lg:gap-16 flex-col items-center justify-center lg:flex-row lg:items-start'>
            <div className=''>
              <h3 className='text-[1.1rem]'>Socials</h3>
              <div className='flex gap-3 mt-5 lg:flex-col'>
                <NavLink
                  to='#'
                  className='text-gray-400 hover:text-white duration-300'>
                  Facebook
                </NavLink>
                <NavLink
                  to='#'
                  className='text-gray-400 hover:text-white duration-300'>
                  Instagram
                </NavLink>
                <NavLink
                  to='#'
                  className='text-gray-400 hover:text-white duration-300'>
                  LinkedIn
                </NavLink>
                <NavLink
                  to='#'
                  className='text-gray-400 hover:text-white duration-300'>
                  Github
                </NavLink>
              </div>
            </div>
            <div className='mt-5 lg:mt-0'>
              <h3 className='text-[1.1rem]'>Contact</h3>
              <div className='flex items-center justify-start gap-3 text-gray-400 mt-5 lg:flex-col lg:items-start'>
                <p>harveysacol@gmail.com</p>
                <p>090639975499</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={expWrapperRef}
        className='relative z-10 w-full h-auto lg:h-[80vh] bg-bg-color px-16 pt-24 lg:pt-0 pb-32 lg:pb-0'>
        <div className='flex items-center lg:items-start flex-col lg:flex-row lg:gap-[19rem]'>
          <h1 ref={expTitleRef} className='text-white mb-5 font-bold'>
            Experience
          </h1>
          <div ref={experienceRef}>
            <h1 className='text-white font-thin text-xl mb-3 text-justify lg:text-left'>
              On-the-Job Training (OJT){' '}
              <span className='border-b-2 border-30-percent'>
                Full-Stack Developer
              </span>
            </h1>
            <h3 className='text-white font-thin mb-3'>
              Management Information and Computer Services | July 2024 -
              December 2024
            </h3>
            <div className='text-gray-400'>
              <ul className='list-disc leading-7 text-justify lg:text-left'>
                <li>
                  Developed and maintained web-based systems for internal use.
                </li>
                <li>
                  Designed and implemented front-end and back-end
                  functionalities using PHP, JavaScript, MySQL, and CSS.
                </li>
                <li>
                  Successfully built:
                  <div className='relative left-4'>
                    <ul className='list-decimal leading-7'>
                      <li>
                        Project Management System - Streamlined task tracking
                        and project assignments.
                      </li>
                      <li>
                        Annual Investment Program - Automated investment
                        planning and budgeting.
                      </li>
                      <li>
                        Certificate & ID Maker - Created a tool for generating
                        digital and printed certificates/IDs.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  Collaborated with the team to analyze system requirements and
                  improve overall UI/UX and database performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={techWrapperRef}
        className='relative z-10 w-full h-auto min-h-screen bg-bg-color px-16 py-16 '>
        <div className='flex items-center justify-between border-[1px] border-solid border-zinc-700 p-2 rounded-t-lg'>
          <h1 className='text-white font-bold '>Tech</h1>
          <div className='text-gray-400 flex items-center justify-center gap-2'>
            <Minus size={15} />
            <Square size={15} />
            <X size={18} />
          </div>
        </div>
        <div className='flex items-center justify-center flex-wrap gap-x-8 gap-y-3 lg:gap-x-0 lg:gap-y-14 border-[1px] border-solid border-zinc-700 rounded-b-lg'>
          {[
            {
              icon: <FaHtml5 className='text-gray-400 text-2xl' />,
              name: 'HTML',
            },
            {
              icon: <FaCss3 className='text-gray-400 text-2xl' />,
              name: 'CSS',
            },
            {
              name: 'GSAP',
            },
            {
              icon: <FaJs className='text-gray-400 text-2xl' />,
              name: 'JavaScript',
            },
            {
              icon: <FaReact className='text-gray-400 text-3xl' />,
              name: 'React',
            },
            {
              icon: <FaPhp className='text-gray-400 text-3xl' />,
              name: 'PHP',
            },
            {
              icon: <FaDatabase className='text-gray-400 text-2xl' />,
              name: 'Mysql',
            },
            {
              icon: <SiTailwindcss className='text-gray-400 text-3xl' />,
              name: 'Tailwind',
              textColor: 'text-gray-400',
            },
            {
              icon: <FaGithub />,
              name: 'Github',
            },
          ].map((tech, index) => (
            <div
              key={index}
              ref={(el) => (techStackRef.current[index] = el)}
              className='flex items-center justify-center flex-1 flex-shrink-0 basis-[100px] lg:flex-1 lg:flex-shrink-0 lg:basis-[300px]'>
              <div
                className={`${
                  tech.textColor || 'text-gray-400'
                } flex flex-wrap items-center justify-center gap-1 w-[100px] h-[50px] rounded-full  transition-all duration-300 cursor-pointer`}>
                {tech.icon}
                <h1 className='font-bold text-1xl'>{tech.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative z-10 bg-bg-color w-full h-[100vh] px-16 pt-60 lg:pt-0 pb-24 text-justify lg:text-left'>
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='text-gray-400 text-2xl w-full lg:w-[50%] font-bold'>
          In case you don't want to read through the boring stuff, I treat the
          following sections as something like a personal library.
        </motion.h1>
      </div>
      <div className='relative z-10'>
        <div className='w-full bg-bg-color px-16 pt-8'>
          <h1 className='text-white text-3xl font-bold pb-5 text-center lg:text-left'>
            Photos
          </h1>
        </div>
        <ZoomParallax />
      </div>
      <section className='h-[50vh] bg-bg-color relative z-10'></section>
      <section className='bg-bg-color relative z-10 h-auto px-16 pb-14'>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='flex items-start justify-center gap-4 flex-col lg:flex-row'>
          <div className='w-full lg:w-[50%]'>
            <h1 className='text-white mb-5 text-2xl font-bold'>Music</h1>
            <div className='flex gap-2 flex-col lg:flex-row'>
              <div className='w-full lg:w-[300px]'>
                <div className='bg-[#222222] w-full h-[300px] flex items-center justify-center'>
                  <img
                    className='w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] rounded-full object-cover aspect-square'
                    src='/images/music-1.jpg'
                    alt='Daniel Caesar - Superpowers'
                  />
                </div>
                <h1 className='text-white my-3'>Daniel Caesar - Superpowers</h1>
              </div>

              <div className='w-full lg:w-[300px]'>
                <div className='bg-[#222222] w-full h-[300px] flex items-center justify-center'>
                  <img
                    className='w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] rounded-full object-cover aspect-square'
                    src='/images/music-2.jpg'
                    alt='Drake - Rich Baby Daddy'
                  />
                </div>
                <h1 className='text-white my-3'>Drake - Rich Baby Daddy</h1>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[50%] h-auto'>
            <h1 className='text-white mb-5 text-2xl font-bold'>Movies</h1>
            <div className='flex gap-6 lg:gap-2 flex-col lg:flex-row w-full h-auto'>
              <div className='w-full pb-8 lg:pb-0 h-[300px] lg:w-[300px]'>
                <img
                  className='w-full h-full lg:w-[300px] object-cover'
                  src='/images/movie-1.jpg'
                  alt='The Notebook'
                />
                <div className='my-3 flex items-center justify-between'>
                  <h1 className='text-white'>The Notebook</h1>
                  <button className='text-white bg-red-700 px-6 py-[1px] rounded-full hover:animate-hoverBounce border-[1px] border-solid border-white hover:bg-white hover:text-black hover:shadow-[0px_5px_0px_#FF0000] hover:border-[#FF0000] transition-all duration-300'>
                    Netflix
                  </button>
                </div>
              </div>
              <div className='w-full h-[300px] lg:w-[300px]'>
                <img
                  className='w-full h-full lg:w-[300px] object-cover'
                  src='/images/movie-2.jpg'
                  alt='John Wick'
                />
                <div className='my-3 flex items-center justify-between'>
                  <h1 className='text-white'>John Wick</h1>
                  <button className='text-white bg-black px-6 py-[1px] rounded-full hover:animate-hoverBounce border-[1px] border-solid border-white hover:bg-white hover:text-black hover:shadow-[0px_5px_0px_#FFF] hover:border-white transition-all duration-300'>
                    Apple Tv
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
