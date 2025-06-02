import { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { getProjects } from '../../../services/projectApi';
import type { CategoriesType, ProjectData } from '../../../types/ProjectsType';
import ProjectCard from '../components/ProjectCard';
import ShimmerProjectCard from '../components/ShimmerProjectCard';

const categories: CategoriesType[] = [
  'All',
  'Website',
  'Package',
  'Extension',
  'PWA',
];

function Projects() {
  const [category, setCategory] = useState<CategoriesType>('All');
  const { data, isError, isLoading } = useFetch<ProjectData[]>(async () => {
    return await getProjects(category);
  }, [category]);
  const { showBoundary } = useErrorBoundary();

  if (isError) {
    showBoundary('Something Went Wrong.');
  }

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
      {isLoading ? (
        <div className='grid grid-cols-autofill-200 gap-5'>
          {[1, 2, 3, 4].map(() => {
            return <ShimmerProjectCard />;
          })}
        </div>
      ) : data && data.length === 0 ? (
        <h2 className='h-full text-3xl flex items-center font-semibold text-yellow-400'>
          Coming Soon...
        </h2>
      ) : (
        <div className='grid grid-cols-autofill-200 gap-5'>
          {data &&
            data.map((project, index) => {
              return (
                <Link key={index} to={`/projects/${project.documentId}`}>
                  <ProjectCard
                    title={project.title}
                    image={`${project.image.url}`}
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
