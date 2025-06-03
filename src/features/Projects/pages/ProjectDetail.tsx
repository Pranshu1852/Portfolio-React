import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Skeleton } from '@mui/material';
import { useErrorBoundary } from 'react-error-boundary';
import { Link, useParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { getProject } from '../../../services/projectApi';
import type { ProjectData } from '../../../types/ProjectsType';

function ProjectDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch<ProjectData>(async () => {
    if (!id) {
      return;
    }
    return await getProject(id);
  }, [id]);
  const { showBoundary } = useErrorBoundary();

  if (isError) {
    showBoundary('Something Went Wrong.');
  }

  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10'>
      <Link
        className='flex flex-row gap-2 items-center text-lg font-semibold text-yellow-400'
        to='/projects'
      >
        <ArrowBackIcon />
        Back
      </Link>
      <div className='flex flex-col gap-4'>
        {isLoading ? (
          <>
            <Skeleton
              variant='rounded'
              sx={{ backgroundColor: 'gray' }}
              height={50}
              width={150}
            />
            <Skeleton
              variant='rounded'
              sx={{ backgroundColor: 'gray' }}
              height={30}
              width={100}
            />
          </>
        ) : (
          <>
            <h2 className='text-white font-bold text-4xl'>
              {data && data.title}
            </h2>
            <p className='bg-[#4e4e4e] text-slate-300 font-medium text-xs py-1 px-2 w-fit rounded-full'>
              {data ? data.category.title : 'Title not exist.'}
            </p>
          </>
        )}
      </div>
      {isLoading ? (
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray', height: '40vh' }}
        />
      ) : (
        <img
          className='w-full h-[40vh] rounded-lg'
          src={`${data ? data.image.url : 'https://www.wavonline.com/a/img/no_image_available.jpeg'}`}
          alt={`${data ? data.title : 'Image not exist.'}`}
          loading='lazy'
        />
      )}

      <div className='flex flex-col gap-2'>
        <h2 className='text-slate-200 font-semibold text-2xl'>Description</h2>
        {isLoading ? (
          <Skeleton
            variant='rounded'
            sx={{ backgroundColor: 'gray' }}
            height={50}
          />
        ) : (
          <p className='text-slate-300 text-sm font-medium'>
            {data ? data.description : 'Description not exist.'}
          </p>
        )}
      </div>
      <div className='flex flex-row gap-5'>
        {isLoading ? (
          <>
            <Skeleton
              variant='rounded'
              sx={{ backgroundColor: 'gray' }}
              height={50}
              width={150}
            />
            <Skeleton
              variant='rounded'
              sx={{ backgroundColor: 'gray' }}
              height={50}
              width={150}
            />
          </>
        ) : (
          <>
            <a
              href={data ? data.githublink : '#'}
              className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
            >
              <GitHubIcon /> Github Link
            </a>
            <a
              href={data ? data.livelink : '#'}
              className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
            >
              <VisibilityIcon /> Live Link
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
