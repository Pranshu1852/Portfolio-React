import { Skeleton } from '@mui/material';

function ShimmerSkillBar() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center justify-between'>
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray', marginBottom: '8px' }}
          height={25}
          width={200}
        />
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray', marginBottom: '8px' }}
          height={25}
          width={50}
        />
      </div>
      <div className='w-full h-2 bg-[#383838] rounded-xl'>
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray', marginBottom: '8px' }}
          height={10}
        />
      </div>
    </div>
  );
}

export default ShimmerSkillBar;
