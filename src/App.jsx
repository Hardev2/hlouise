import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import ProjectPage from './Page/ProjectPage';
import Project from './Page/Project';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/project/:id' element={<Project />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
