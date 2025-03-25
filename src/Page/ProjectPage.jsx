import React from 'react';
import projects from '../Data/Project';
import { FaFolder } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Loader from '../Components/Loader';
import { useState, useEffect } from 'react';
import Footer from '../Components/Footer';

const ProjectPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />;

  return (
    <div className='w-full h-auto relative z-10 bg-bg-color'>
      <div className='px-16 py-32 relative h-auto z-10 bg-bg-color'>
        <h1 className='text-white text-3xl font-bold'>Project</h1>
        <div className='mt-6'>
          {projects.slice(1).map((project) => (
            <Link to={`/project/${project.id}`}>
              <div className='project_card flex items-center justify-between mt-4 border-b-[1px] border-solid border-gray-700 p-2 hover:bg-gray-700 duration-300'>
                <div
                  key={project.id}
                  className='text-white flex items-center gap-2 '>
                  <FaFolder />
                  <h1>{project.name}</h1>
                </div>
                <div className='text-white flex items-center cursor-pointer'>
                  <h1 className='open border-b-[1px] border-solid border-black'>
                    Open
                  </h1>
                  <FaChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='mt-24 rounded-lg border-[1px] border-solid border-zinc-600 '>
          <h1 className='text-white text-xl font-bold bg-zinc-600 p-2 rounded-t-lg'>
            README.md
          </h1>
          <div className='h-[150px] flex items-center justify-start'>
            <p className='text-gray-400 p-2 w-[600px] text-lg'>
              Projects are long-term projects that I've worked on. They're
              usually larger in scope and take a longer time to complete.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
