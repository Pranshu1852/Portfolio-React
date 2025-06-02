import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

import projectImg from '../../../assets/image.png';

function ProjectDetail() {
  return (
    <div className='flex flex-col gap-10 bg-[#1f1f1f] border-[1px] border-[#383838] rounded-xl w-full p-10 min-h-full'>
      <Link
        className='flex flex-row gap-2 items-center text-lg font-semibold text-yellow-400'
        to='/projects'
      >
        <ArrowBackIcon />
        Back
      </Link>
      <div className='flex flex-col gap-4'>
        <h2 className='text-white font-bold text-4xl'>Project Title</h2>
        <p className='bg-[#4e4e4e] text-slate-300 font-medium text-xs py-1 px-2 w-fit rounded-full'>
          {'category'}
        </p>
      </div>
      <img
        className='w-full h-[35vh] rounded-lg'
        src={projectImg}
        alt='project image'
      />
      <div className='flex flex-col gap-2'>
        <h2 className='text-slate-200 font-semibold text-2xl'>Description</h2>
        <p className='text-slate-300 text-sm font-medium'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          cumque alias recusandae! Consequuntur, aliquam eius assumenda fugiat
          sapiente aspernatur sunt placeat ut molestias totam unde illo
          dignissimos quam. Impedit, amet? Voluptatem, distinctio repellat
          exercitationem explicabo fugit, suscipit nostrum culpa quasi vitae
          illum, quibusdam repellendus ratione aliquam autem? Quibusdam
          voluptatibus nesciunt mollitia animi tenetur autem, explicabo
          perferendis ad dolor esse debitis? Animi temporibus at dicta dolorem
          necessitatibus, totam reprehenderit exercitationem dignissimos
          voluptatum! Quas culpa ipsum natus necessitatibus voluptatibus minus
          eveniet eligendi ipsam modi tenetur? Cum dolor unde amet, expedita
          quod fugiat. Harum dolor aperiam fugit, consequatur unde dolorum
          libero atque nostrum modi aliquid molestias quos minima error ad
          incidunt iusto rem accusantium non enim et. Porro et sequi quas
          doloremque vero!
        </p>
      </div>
      <div className='flex flex-row gap-5'>
        <a
          href='#'
          className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
        >
          <GitHubIcon /> Github Link
        </a>
        <a
          href='#'
          className='flex flex-row items-center gap-2 text-yellow-400 font-semibold text-sm border border-[#383838] bg-[#2b2b2b] py-3 px-4 rounded-xl'
        >
          <VisibilityIcon /> Live Link
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;
