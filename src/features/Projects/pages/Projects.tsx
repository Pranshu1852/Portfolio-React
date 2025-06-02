import { useState } from 'react';
import { Link } from 'react-router-dom';

import projectImg from '../../../assets/image.png';
import type { CategoriesType, Project } from '../../../types/ProjectsType';
import ProjectCard from '../components/ProjectCard';

const categories: CategoriesType[] = [
  'All',
  'Website',
  'Package',
  'Extension',
  'PWA',
];

const projectData: Project[] = [
  {
    title: 'Todo',
    image: projectImg,
    category: 'Website',
  },
  {
    title: 'Todo',
    image: projectImg,
    category: 'Website',
  },
  {
    title: 'Todo',
    image: projectImg,
    category: 'Website',
  },
];

function Projects() {
  const [category, setCategory] = useState<CategoriesType>('All');

  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10'>
      <div className='relative max-w-fit'>
        <h2 className='text-white font-bold text-4xl'>Projects</h2>
        <p className='absolute bottom-[-50%] w-[40%] h-2 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full'></p>
      </div>
      <ul className='w-full flex flex-row flex-wrap gap-5 mt-5'>
        {categories.map((value) => {
          return (
            <li
              className={`${category === value ? 'text-yellow-400' : 'text-slate-200'} font-medium text-lg`}
            >
              <button onClick={() => setCategory(value)}>{value}</button>
            </li>
          );
        })}
      </ul>
      <div className='grid grid-cols-autofill-200 gap-5'>
        {projectData.map((project) => {
          return (
            <Link to='/projects/123'>
              <ProjectCard
                title={project.title}
                image={project.image}
                category={project.category}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
