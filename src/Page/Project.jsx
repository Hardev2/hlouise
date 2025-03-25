import React from 'react';
import projects from '../Data/Project';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Project = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects.find((proj) => proj.id === parseInt(id));

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

  return (
    <div className='w-full h-auto bg-bg-color relative z-10'>
      <div className='px-16 py-32 relative z-10 h-auto bg-bg-color'>
        {/* Breadcrumb Navigation */}
        <div className='text-white text-lg flex gap-2'>
          <Link to='/projects'>
            <h1 className='font-bold border-b border-white'>Projects</h1>
          </Link>
          <h1 className='text-gray-400'>/ {project.name}</h1>
        </div>

        {/* Project Description */}
        <div className='text-gray-400 mt-5 w-full text-justify lg:w-[600px]'>
          <p>{project.subDescription || 'No description available'}</p>
        </div>

        {/* Project Image */}
        {project.src && (
          <div className='mt-5 w-full h-[80vh]'>
            <img
              src={project.src}
              alt={project.alt}
              className='rounded-lg w-full h-full object-cover'
            />
          </div>
        )}

        {/* Project Objective */}
        {project.objective && (
          <div className='mt-5'>
            <p className='text-gray-400 text-justify'>{project.objective}</p>
          </div>
        )}

        {/* Dynamic Sections (Problem, Solution, Results, Conclusion) */}
        <div className='mt-5 flex items-center justify-center flex-col gap-14'>
          {sections.map(
            (section) =>
              section.title &&
              section.description && (
                <div
                  key={section.key}
                  className='flex flex-col lg:flex-row items-start gap-4'>
                  <h1 className='text-white font-bold text-lg w-[200px]'>
                    {section.title}
                  </h1>
                  <p className='text-gray-400 w-full lg:w-[700px] text-justify'>
                    {section.description}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
