import { Skeleton } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

import bookImg from '../../../assets/book.svg';
import briefCaseImg from '../../../assets/briefCase.svg';
import type { PersonDetails } from '../../../types/ProfileType';
import ShimmerSkillBar from '../components/ShimmerSkillBar';
import ShimmerTimeLine from '../components/ShimmerTimeLine';
import SkillBar from '../components/SkillBar';
import TimeLine from '../components/TimeLine';

function About() {
  const { isLoading, personDetail } = useOutletContext<{
    isLoading: boolean;
    personDetail: PersonDetails;
  }>();

  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10 '>
      <div className='relative max-w-fit'>
        <h2 className='text-white font-bold text-4xl'>About Me</h2>
        <p className='absolute bottom-[-50%] w-[40%] h-2 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full'></p>
      </div>
      {isLoading ? (
        <Skeleton
          variant='rounded'
          sx={{ backgroundColor: 'gray' }}
          color='#a3a3a3'
          height={140}
        />
      ) : (
        <p className='text-slate-200 text-lg'>
          {personDetail ? personDetail.aboutme : 'About me not exist.'}
        </p>
      )}

      <div>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
            <div className='absolute inset-px bg-[#212121] rounded-xl' />
            <img className='w-5 h-5 z-10' src={bookImg} alt='book logo' />
          </div>
          <h3 className='text-2xl font-semibold text-white'>Education</h3>
        </div>
        <div className='ml-11'>
          {isLoading ? (
            [1, 2, 3].map((_, ind) => {
              return <ShimmerTimeLine key={ind} isLast={ind === 2} />;
            })
          ) : personDetail ? (
            personDetail.education.map((item, index) => (
              <TimeLine
                key={index}
                title={item.title}
                organization={item.organization}
                period={item.period}
                isLast={index === personDetail.education.length - 1}
              />
            ))
          ) : (
            <p className='text-2xl font-medium text-yellow-400'>
              No education details.
            </p>
          )}
        </div>
      </div>
      <div>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
            <div className='absolute inset-px bg-[#212121] rounded-xl' />
            <img
              className='w-5 h-5 z-10'
              src={briefCaseImg}
              alt='brief case logo'
            />
          </div>
          <h3 className='text-2xl font-semibold text-white'>Experience</h3>
        </div>
        <div className='ml-11'>
          {isLoading ? (
            [1, 2, 3].map((_, ind) => {
              return <ShimmerTimeLine key={ind} isLast={ind === 2} />;
            })
          ) : personDetail ? (
            personDetail.experience.map((item, index) => (
              <TimeLine
                key={index}
                title={item.title}
                organization={item.organization}
                period={item.period}
                isLast={index === personDetail.experience.length - 1}
              />
            ))
          ) : (
            <p className='text-2xl font-medium text-yellow-400'>
              No experience details.
            </p>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl font-semibold text-white'>My skills</h3>
        <div className='relative bg-gradient-to-br from-[#404040] to-transparent p-6 rounded-2xl shadow-lg'>
          <div className='absolute inset-px bg-[#212121] rounded-2xl' />
          <div className='flex flex-col gap-5 relative'>
            {isLoading ? (
              [1, 2, 3, 4].map((_, ind) => {
                return <ShimmerSkillBar key={ind} />;
              })
            ) : personDetail ? (
              personDetail.skill.map((item, index) => (
                <SkillBar
                  key={index}
                  name={item.name}
                  percentage={item.percentage}
                />
              ))
            ) : (
              <p className='text-2xl font-medium text-yellow-400'>
                No skills details.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
