'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HorizontalSlider from '../Components/ScrollProject/HorizontalSlider';
import Button from '../Components/UI/Button';
import Footer from '../Components/Footer';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Rose from '../assets/rose.png';

const HomePage = () => {
  const navigate = useNavigate();

  const bioTextRef = useRef(null);
  const aboutWrapperRef = useRef(null);
  const nameRef = useRef(null);
  const heroRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactRef = useRef(null);
  const contactOneRef = useRef(null);
  const subContactOneRef = useRef(null);
  const formRef = useRef(null);
  const formBtnRef = useRef(null);
  const formContactRef = useRef(null);
  const formPagRef = useRef(null);

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

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Name animation
    const nameAnim = gsap.to(nameRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        scrub: 1.9,
      },
    });

    // Split text animation for name
    const splitText = new SplitType(nameRef.current, { type: 'chars' });
    const split = gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 1, ease: 'power2.out' }
    );

    // Bio text animation
    const bioAnim = gsap.to(bioTextRef.current, {
      yPercent: -70,
      scrollTrigger: {
        trigger: aboutWrapperRef.current,
        start: 'top 0',
        scrub: 3,
      },
    });

    // Split bio text animation
    const splitBio = new SplitType(bioTextRef.current, {
      type: 'lines, words',
    });

    const bioSplit = gsap.fromTo(
      splitBio.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: aboutWrapperRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true,
          toggleActions: 'play none none none',
        },
      }
    );

    // Description animation
    const descAnim = gsap.to(descriptionRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top 30%',
        scrub: 1.9,
      },
    });

    // Contact section animations
    const contactOne = gsap.fromTo(
      contactOneRef.current,
      { xPercent: -300, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 150%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    );

    const contactSubOne = gsap.fromTo(
      subContactOneRef.current,
      { xPercent: -300, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 100%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    );

    // Form animations
    const form = gsap.fromTo(
      formRef.current,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formContactRef.current,
          start: 'top 130%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    );

    const formBtn = gsap.fromTo(
      formBtnRef.current,
      { yPercent: 300, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formContactRef.current,
          start: 'top 80%',
          end: 'bottom 70%',
          scrub: true,
        },
      }
    );

    const formPag = gsap.fromTo(
      formPagRef.current,
      { yPercent: 300, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formContactRef.current,
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );

    // Cleanup animations on unmount
    return () => {
      bioAnim.kill();
      nameAnim.kill();
      descAnim.kill();
      contactOne.kill();
      contactSubOne.kill();
      form.kill();
      formBtn.kill();
      formPag.kill();
      split.kill();
      bioSplit.kill();

      // Kill all ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Clean up SplitType instances
      if (splitText && splitText.revert) splitText.revert();
      if (splitBio && splitBio.revert) splitBio.revert();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });
        e.target.reset();

        navigate('/');
      })
      .catch((error) => {
        toast.error('Email sent unsuccessfully!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });
      });
  };

  return (
    <div className='bg-bg-color w-screen min-h-screen z-40'>
      <div
        ref={heroRef}
        className='bg-bg-color text-center flex flex-col items-center justify-center relative py-20 z-40'>
        <h1
          ref={nameRef}
          className='text-white text-[6rem] lg:text-[12rem] font-[800] uppercase'>
          Sacol, <br />
          <span className='font-custom font-thin capitalize'>
            Harvey Louise
          </span>
        </h1>
        <div className='absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference w-[260px] lg:w-[500px]'>
          <img
            src={Rose}
            alt='Rose decoration'
            className='max-w-full animate-spin'
          />
        </div>
        <h2
          ref={descriptionRef}
          className='uppercase text-gray-400 font-[700] lg:text-2xl'>
          <span className='text-white'>Web developer</span> spending{' '}
          <span className='text-white'>less</span> time coding <br /> stuff than
          drinking coffee{' '}
        </h2>
      </div>
      <section
        ref={aboutWrapperRef}
        className='w-[95%] h-[120vh] bg-bg-color flex items-center justify-center z-30 relative'>
        <div className='flex items-center justify-center lg:justify-start text-justify lg:text-left relative top-10 lg:left-6 px-4'>
          <h1
            ref={bioTextRef}
            className='text-left relative lg:right-32 text-gray-400 text-4xl font-[700] tracking-wide lg:text-[4rem] lg:leading-[100px] max-w-[1000px] pl-0'>
            <span className='font-custom text-white'>Hi,</span> My name is{' '}
            <span className='font-custom text-white'>Harvey, </span>I am
            twenty-three years old, a{' '}
            <span className='font-custom text-white'>Web Developer </span>
            based in <span className='font-custom text-white'>Cebu</span>,
            Philippines.
          </h1>
        </div>
      </section>
      <HorizontalSlider />
      <section className='relative z-30 h-[50vh] bg-bg-color'></section>
      <section className='relative pb-7 bg-bg-color z-40'>
        <div
          ref={contactRef}
          className='flex text-left justify-between flex-col px-10 lg:flex-row items-start gap-4'>
          <div className='text-white mt-14 w-full lg:w-[65%]'>
            <h1
              ref={contactOneRef}
              className='text-left text-[5rem] lg:text-[6.5rem] uppercase w-full'>
              Don't be shy,
              <br />
              <span className='font-custom capitalize'>Say Hi!</span>
            </h1>
            <p
              ref={subContactOneRef}
              className='text-gray-400 uppercase text-[1.5rem]'>
              Not yet bilingual but I'm working on it (I Promise)
            </p>
          </div>

          <div
            ref={formContactRef}
            className='text-white w-full mt-14 lg:w-[35%]'>
            <form
              ref={formRef}
              className='flex flex-col gap-4 mt-5 w-full'
              onSubmit={sendEmail}>
              <div className='mt-5'>
                <label className='text-white block' htmlFor='nameFrom'>
                  Name:
                </label>
                <input
                  type='text'
                  name='name_from'
                  id='nameFrom'
                  className='w-full text-white border-[2px] border-solid border-white bg-transparent rounded p-1 outline-none'
                  placeholder='Type here..'
                  required
                />
              </div>
              <div className='mt-5'>
                <label className='text-white block' htmlFor='emailFrom'>
                  Email:
                </label>
                <input
                  type='email'
                  name='email_from'
                  id='emailFrom'
                  className='w-full text-white border-[2px] border-solid border-white bg-transparent rounded p-1 outline-none'
                  placeholder='person@example.com'
                  required
                />
              </div>
              <div className='mt-5'>
                <label className='text-white block' htmlFor='message'>
                  Message:
                </label>
                <textarea
                  name='message'
                  id='message'
                  className='w-full text-white border-[2px] border-solid border-white bg-transparent rounded p-1'
                  required></textarea>
              </div>
              <div ref={formBtnRef} className='relative right-4'>
                <Button
                  title={
                    <>
                      Send me a message <FaPaperPlane className='ml-2' />
                    </>
                  }
                />
              </div>
            </form>

            <div ref={formPagRef} className='mt-8'>
              <h1 className='text-[1.5rem] uppercase font-light'>
                Thank You For Visiting my Portfolio
              </h1>
              <p className='uppercase font-light text-gray-400'>
                Don't hesitate to follow me on my networks (there are some cool
                things)
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
