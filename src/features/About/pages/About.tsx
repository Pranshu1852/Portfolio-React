import bookImg from '../../../assets/book.svg';
import briefCaseImg from '../../../assets/briefCase.svg';
import SkillBar from '../components/SkillBar';
import TimeLine from '../components/TimeLine';

const educationData = [
  {
    title: 'Grade X',
    organization: 'Nutan Vidhya Vihar Higher Secondary School',
    period: '2018 - 2019',
  },
  {
    title: 'Grade XII',
    organization: 'The National High School',
    period: '2020 - 2021',
  },
  {
    title: 'B.E. in Information And Communication Technology',
    organization: 'Adani Institude of Infrastructure Engineering',
    period: '2021 - 2025',
  },
];

const experienceData = [
  {
    title: 'React Trainee',
    organization: 'Simform Solutions',
    period: '2025 - Present',
  },
];

const skillsData = [
  {
    name: 'git / github',
    percentage: 90,
  },
  {
    name: 'HTML / CSS',
    percentage: 95,
  },
  {
    name: 'JavaScipt / TypeScript',
    percentage: 80,
  },
  {
    name: 'React',
    percentage: 65,
  },
];

function About() {
  return (
    <div className='flex flex-col gap-10 w-full pb-24 md:pb-10 p-10 '>
      <div className='relative max-w-fit'>
        <h2 className='text-white font-bold text-4xl'>About Me</h2>
        <p className='absolute bottom-[-50%] w-[40%] h-2 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-full'></p>
      </div>
      <p className='text-slate-200 text-lg'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ab
        rem quam incidunt excepturi quibusdam animi ex doloremque nobis magnam,
        aperiam blanditiis veniam tenetur libero earum architecto corporis.
        Facere, dolor? Nisi ratione perspiciatis, in nesciunt dicta dolore
        reiciendis repudiandae. Excepturi ipsa esse voluptatibus doloribus
        sequi?
      </p>
      <div>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
            <div className='absolute inset-px bg-[#212121] rounded-xl' />
            <img className='w-5 h-5 z-10' src={bookImg} />
          </div>
          <h3 className='text-2xl font-semibold text-white'>Education</h3>
        </div>
        <div className='ml-11'>
          {educationData.map((item, index) => (
            <TimeLine
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
      <div>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
            <div className='absolute inset-px bg-[#212121] rounded-xl' />
            <img className='w-5 h-5 z-10' src={briefCaseImg} />
          </div>
          <h3 className='text-2xl font-semibold text-white'>Experience</h3>
        </div>
        <div className='ml-11'>
          {experienceData.map((item, index) => (
            <TimeLine
              key={index}
              title={item.title}
              organization={item.organization}
              period={item.period}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <h3 className='text-2xl font-semibold text-white'>My skills</h3>
        <div className='relative bg-gradient-to-br from-[#404040] to-transparent p-6 rounded-2xl shadow-lg'>
          <div className='absolute inset-px bg-[#212121] rounded-2xl' />
          <div className='flex flex-col gap-5 relative'>
            {skillsData.map((item, index) => (
              <SkillBar
                key={index}
                name={item.name}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
