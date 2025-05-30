import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getProject } from '../../../services/projectApi';
import type { ProjectData } from '../../../types/ProjectsType';

function ProjectDetail() {
  const [projectDetails, setProjectDetails] = useState<ProjectData>();
  const { id } = useParams();

  async function getProjectDetails() {
    if (!id) {
      return;
    }

    const project = await getProject(id);

    setProjectDetails(project.data);
  }

  useEffect(() => {
    getProjectDetails();
  }, [getProjectDetails]);

  if (!projectDetails) {
    return <h2>Something Went Wrong.</h2>;
  }

  return (
    <div className='flex flex-col gap-10 bg-[#1f1f1f] border-[1px] border-[#383838] min-h-[calc(100vh-8rem)] rounded-xl w-full p-10'>
      <Link
        className='flex flex-row gap-2 items-center text-lg font-semibold text-yellow-400'
        to='/projects'
      >
        <ArrowBackIcon />
        Back
      </Link>
      <div className='flex flex-col gap-4'>
        <h2 className='text-white font-bold text-4xl'>
          {projectDetails.title}
        </h2>
        <p className='bg-[#4e4e4e] text-slate-300 font-medium text-xs py-1 px-2 w-fit rounded-full'>
          {projectDetails.category.title}
        </p>
      </div>
      <img
        className='w-full h-[40vh] rounded-lg'
        src={`${import.meta.env.VITE_STRAPI_URL}${projectDetails.image.url}`}
        alt={projectDetails.title}
        loading='lazy'
      />
      <div className='flex flex-col gap-2'>
        <h2 className='text-slate-200 font-semibold text-2xl'>Description</h2>
        <p className='text-slate-300 text-sm font-medium'>
          {projectDetails.description}
        </p>
      </div>
      <div className='flex flex-row gap-5'>
        <a
          href={projectDetails.githublink}
          className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
        >
          <GitHubIcon /> Github Link
        </a>
        <a
          href={projectDetails.livelink}
          className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
        >
          <VisibilityIcon /> Live Link
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;
