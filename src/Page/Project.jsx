import React from 'react';
import projects from '../Data/Project';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Project = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find((proj) => proj.id === parseInt(id));

  const techStyle =
    'bg-zinc-800 py-1 px-2 w-auto rounded-full border-[1px] border-solid border-zinc-800 cursor-pointer hover:animate-hoverBounce hover:shadow-[0px_5px_0px_#ffffff] hover:border-white  duration-300';

  // Handle case where project is not found
  if (!project) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-bg-color text-white'>
        <h1 className='text-2xl'>Project not found</h1>
      </div>
    );
  }

  // Sections to display dynamically (Problem, Solution, Results, Conclusion)
  const sections = [
    {
      key: 'Problem',
      title: project.Problem?.title,
      description: project.Problem?.description,
    },
    {
      key: 'Solution',
      title: project.Solution?.title,
      description: project.Solution?.description,
    },
    {
      key: 'Results',
      title: project.Results?.title,
      description: project.Results?.description,
    },
    {
      key: 'Conclusion',
      title: project.Conclusion?.title,
      description: project.Conclusion?.description,
    },
  ];

  const containerVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className='w-full h-auto bg-bg-color relative z-10'>
      <div className='px-16 py-32 relative z-10 h-auto bg-bg-color'>
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='text-white text-lg flex gap-2'>
          <Link to='/projects'>
            <h1 className='font-bold border-b border-white'>Projects</h1>
          </Link>
          <h1 className='text-gray-400'>/ {project.name}</h1>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className='text-gray-400 mt-5 w-full text-justify lg:w-[600px]'>
          <p>{project.subDescription || 'No description available'}</p>
        </motion.div>

        {/* Project Image */}
        {project.src && (
          <div className='mt-5 w-full h-[60vh] lg:h[80vh]'>
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.75 }}
              src={project.src}
              alt={project.alt}
              className='rounded-lg w-full h-full object-cover'
            />
          </div>
        )}

        {/* Project Objective */}
        {project.objective && (
          <div className='mt-5'>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.75 }}
              viewport={{ once: true }}
              className='text-gray-400 text-justify'>
              {project.objective}
            </motion.p>
          </div>
        )}

        {/* Dynamic Sections (Problem, Solution, Results, Conclusion) */}

        <motion.div
          variants={containerVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='mt-5 flex items-center justify-center flex-col gap-14'>
          {sections.map(
            (section) =>
              section.title &&
              section.description && (
                <motion.div
                  variants={itemVariants}
                  key={section.key}
                  className='flex flex-col lg:flex-row items-start gap-4'>
                  <h1 className='text-white font-bold text-lg w-[200px]'>
                    {section.title}
                  </h1>
                  <p className='text-gray-400 w-full lg:w-[700px] text-justify'>
                    {section.description}
                  </p>
                </motion.div>
              )
          )}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          viewport={{ once: true }}
          className='text-gray-400 mt-5 flex items-center justify-center gap-3 flex-wrap'>
          <p className={techStyle}>{project.tech.tech1}</p>
          <p className={techStyle}> {project.tech.tech2}</p>
          <p className={techStyle}> {project.tech.tech3}</p>
          <p className={techStyle}> {project.tech.tech4}</p>
          <p className={techStyle}> {project.tech.tech5}</p>
          <p className={techStyle}> {project.tech.tech6}</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
