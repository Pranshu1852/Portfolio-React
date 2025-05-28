interface TimeLineProps {
  title: string;
  period: string;
  organization: string;
  isLast: boolean;
}

function TimeLine({ title, organization, period, isLast }: TimeLineProps) {
  return (
    <div className='relative pl-5 pb-10 last:pb-0'>
      <div className='absolute left-[-23.4px] z-10 top-[10px] w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-[0_0_0_4px_#383838]' />
      <div
        className={`absolute left-[-20px] top-[-25px] w-[1px] ${isLast ? 'h-[calc(100%-50px)]' : 'h-[calc(100%+25px)]'} bg-[#383838]`}
      />
      <h2 className='text-slate-200 text-lg font-medium mb-2'>{title}</h2>
      <p className='text-slate-100 text-xs font-medium w-fit mb-2 bg-[#2b2b2b] py-2 px-4 rounded-full'>
        {organization}
      </p>
      <p className='text-yellow-500 text-sm mb-2'>{period}</p>
    </div>
  );
}

export default TimeLine;
