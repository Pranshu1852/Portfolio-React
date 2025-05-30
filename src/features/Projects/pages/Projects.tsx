import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProjects } from '../../../services/projectApi';
import type { CategoriesType, ProjectData } from '../../../types/ProjectsType';
import ProjectCard from '../components/ProjectCard';

const categories: CategoriesType[] = [
  'All',
  'Website',
  'Package',
  'Extension',
  'PWA',
];

function Projects() {
  const [category, setCategory] = useState<CategoriesType>('All');
  const [projectArray, setProjectArray] = useState<ProjectData[]>([]);

  async function getAllProjects() {
    const projects = await getProjects(category);
    setProjectArray(projects.data);
  }

  useEffect(() => {
    getAllProjects();
  }, [category]);

  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10'>
      <div className='relative max-w-fit'>
        <h2 className='text-white font-bold text-4xl'>Projects</h2>
        <p className='absolute bottom-[-50%] w-[40%] h-2 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full'></p>
      </div>
      <ul className='w-full flex flex-row flex-wrap gap-5 mt-5'>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              className={`${category === value ? 'text-yellow-400' : 'text-slate-200'} font-medium text-lg`}
            >
              <button onClick={() => setCategory(value)}>{value}</button>
            </li>
          );
        })}
      </ul>
      {projectArray.length === 0 ? (
        <h2 className='h-full text-3xl flex items-center font-semibold text-yellow-400'>
          Coming Soon...
        </h2>
      ) : (
        <div className='grid grid-cols-autofill-200 gap-5'>
          {projectArray.map((project, index) => {
            return (
              <Link key={index} to={`/projects/${project.documentId}`}>
                <ProjectCard
                  title={project.title}
                  image={`${import.meta.env.VITE_STRAPI_URL}${project.image.url}`}
                  category={project.category.title}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Projects;
