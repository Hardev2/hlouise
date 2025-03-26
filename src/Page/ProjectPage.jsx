import React from 'react';
import projects from '../Data/Project';
import { FaFolder } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Loader from '../Components/Loader';
import { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectPage = () => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.05,
        when: 'afterChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='w-full h-auto relative z-10 bg-bg-color'>
      <div className='px-16 py-32 relative h-auto z-10 bg-bg-color'>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='text-white text-3xl font-bold'>
          Projects
        </motion.h1>

        <motion.div
          variants={containerVariant}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='mt-6'>
          {projects.slice(1).map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <motion.div
                variants={itemVariants}
                className='project_card flex items-center justify-between mt-4 border-b-[1px] border-solid border-gray-700 p-2 hover:bg-gray-700 duration-300'>
                <div className='text-white flex items-center gap-2 '>
                  <FaFolder />
                  <h1>{project.name}</h1>
                </div>
                <div className='text-white flex items-center cursor-pointer'>
                  <h1 className='open border-b-[1px] border-solid border-black'>
                    Open
                  </h1>
                  <FaChevronRight />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.9 }}
          className='mt-24 rounded-lg border-[1px] border-solid border-zinc-600 '>
          <h1 className='text-white text-xl font-bold bg-zinc-600 p-2 rounded-t-lg'>
            README.md
          </h1>
          <div className='h-[150px] flex items-center justify-start'>
            <p className='text-gray-400 p-2 w-[600px] text-lg'>
              Projects are long-term projects that I've worked on. They're
              usually larger in scope and take a longer time to complete.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
