import { Skeleton } from '@mui/material';

function ShimmerProjectCard() {
  return (
    <div className='flex flex-col gap-3 p-3 rounded-xl border-[1px] border-[#383838] bg-[#2b2b2b] shadow-lg'>
      <Skeleton
        variant='rounded'
        sx={{ backgroundColor: 'gray' }}
        height={120}
      />
      <div className='flex flex-col gap-2'>
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray' }}
          height={20}
          width={100}
        />
        <p className='bg-[#4e4e4e] text-slate-300 font-medium text-xs py-1 px-2 w-fit rounded-full'>
          <Skeleton
            variant='rounded'
            sx={{ backgroundColor: 'gray' }}
            height={20}
            width={50}
          />
        </p>
      </div>
    </div>
  );
}

export default ShimmerProjectCard;
