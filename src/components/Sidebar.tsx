import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useState } from 'react';

import avatar from '../assets/avatar.webp';
import calenderImg from '../assets/calender.svg';
import downArrowImg from '../assets/downArrow.svg';
import mailImg from '../assets/mail.svg';
import phoneImg from '../assets/phone.svg';

interface SidebarProps {
  name: string;
  profession: string;
  email: string;
  phone: string;
  birthday: string;
}

function Sidebar({ name, profession, email, phone, birthday }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='relative flex flex-col left-0 box-border items-center gap-4 p-10 bg-[#1e1e1e] border border-[#383838] rounded-xl lg:min-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-8rem)] overflow-auto no-scrollbar lg:mb-0 lg:py-16'>
        <div className='flex flex-row w-full max-w-[600px] items-center gap-5 lg:flex-col'>
          <div className='bg-gradient-to-br from-[#404040] to-[#303030] rounded-xl lg:rounded-[30px]'>
            <img
              src={avatar}
              alt='avatar image'
              className='w-20 md:w-[150px]'
            />
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='text-stone-300 text-lg md:text-2xl font-medium lg:text-center'>
              {name}
            </h1>
            <p className='text-stone-100 bg-[#2b2b2b] text-sm px-4 py-2 rounded-lg'>
              {profession}
            </p>
          </div>

          <button
            className='absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#404040] to-[#303030] p-2 text-yellow-400 shadow-md hover:opacity-80 lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='hidden md:block text-xs'>
              {isOpen ? 'Hide Contacts' : 'Show Contacts'}
            </span>
            <img
              className='h-4 w-4 md:hidden'
              src={downArrowImg}
              alt='down arrow image'
            />
          </button>
        </div>

        <div
          className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col w-full h-full max-w-[600px]`}
        >
          <div className='w-full h-[1px] bg-[#383838] my-4 md:mb-8'></div>

          <div className='flex flex-col flex-wrap gap-10'>
            <div className='flex flex-row items-center gap-5'>
              <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
                <div className='absolute inset-px bg-[#212121] rounded-xl' />
                <img className='w-5 h-5 z-10' src={mailImg} alt='mail logo' />
              </div>
              <div className='flex flex-col gap-1 text-sm'>
                <p className='text-stone-400 font-medium'>Email</p>
                <a href={`mailto:${email}`} className='text-stone-100'>
                  {email}
                </a>
              </div>
            </div>

            <div className='flex flex-row items-center gap-5'>
              <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
                <div className='absolute inset-px bg-[#212121] rounded-xl' />
                <img
                  className='w-5 h-5 z-10'
                  src={phoneImg}
                  alt='phone image'
                />
              </div>
              <div className='flex flex-col gap-1 text-sm'>
                <p className='text-stone-400 font-medium'>Phone</p>
                <a href={`tel:${phone}`} className='text-stone-100'>
                  {phone}
                </a>
              </div>
            </div>

            <div className='flex flex-row items-center gap-5'>
              <div className='relative bg-gradient-to-br from-[#404040] to-transparent w-12 h-12 rounded-xl flex items-center justify-center text-yellow-400 shadow-lg'>
                <div className='absolute inset-px bg-[#212121] rounded-xl' />
                <img
                  className='w-5 h-5 z-10'
                  src={calenderImg}
                  alt='calender logo'
                />
              </div>
              <div className='flex flex-col gap-1 text-sm'>
                <p className='text-stone-400 font-medium'>Date Of Birth</p>
                <p className='text-stone-100'>{birthday}</p>
              </div>
            </div>
          </div>

          <div className='w-full h-px bg-[#383838] my-4 md:my-8 lg:opacity-0'></div>

          <ul className='flex h-full justify-start items-center gap-4 pb-1 pl-2 lg:justify-center'>
            <li>
              <a href='#' className='hover:opacity-80' aria-label='github link'>
                <GitHubIcon
                  sx={{
                    color: '#d6d6d6',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:opacity-80'
                aria-label='linkedin link'
              >
                <LinkedInIcon
                  sx={{
                    color: '#d6d6d6',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:opacity-80'
                aria-label='twitter link'
              >
                <XIcon
                  sx={{
                    color: '#d6d6d6',
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
