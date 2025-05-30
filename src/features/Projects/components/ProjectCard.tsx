import type { CategoriesType } from '../../../types/ProjectsType';

interface ProjectCardProps {
  image: string;
  title: string;
  category: CategoriesType;
}

function ProjectCard({ image, title, category }: ProjectCardProps) {
  return (
    <div className='flex flex-col gap-3 p-3 rounded-xl border-[1px] border-[#383838] bg-[#2b2b2b] shadow-lg'>
      <img className='rounded-xl h-28' src={image} alt={title} loading='lazy' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-slate-200 text-xl font-medium'>{title}</h2>
        <p className='bg-[#4e4e4e] text-slate-300 font-medium text-xs py-1 px-2 w-fit rounded-full'>
          {category}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
