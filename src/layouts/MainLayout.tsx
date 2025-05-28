import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function MainLayout() {
  return (
    <div className='bg-[#121212] min-w-[320px] min-h-screen p-5 lg:px-16 lg:py-16 font-montserrat'>
      <div className='max-w-[1200px] m-auto flex flex-col lg:flex-row lg:justify-center gap-6'>
        <Sidebar />
        <div className='relative lg:min-w-[75%] lg:w-[75%]'>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
