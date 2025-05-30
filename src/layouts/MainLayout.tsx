import { useErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import useFetch from '../hooks/useFetch';
import { getDetails } from '../services/profileApi';
import type { PersonDetails } from '../types/ProfileType';

function MainLayout() {
  const { data, isLoading, isError } = useFetch<PersonDetails>(async () => {
    return await getDetails();
  }, []);
  const { showBoundary } = useErrorBoundary();

  if (isError) {
    showBoundary('Something Went Wrong.');
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return;
  }

  return (
    <div className='bg-[#121212] min-w-[320px] min-h-screen p-5 lg:py-16 font-montserrat'>
      <div className='m-auto flex flex-col min-h-full lg:flex-row lg:justify-center gap-6'>
        <Sidebar
          name={data.name}
          profession={data.profession}
          email={data.email}
          phone={data.phone}
          birthday={data.birthday}
        />
        <div className='relative lg:min-w-[65%] lg:w-[70%]'>
          <Navbar />
          <div className='overflow-auto bg-[#1f1f1f] border-[1px] border-[#383838] rounded-xl lg:min-h-[calc(100vh-8rem)] lg:max-h-[calc(100vh-8rem)] no-scrollbar'>
            <Outlet context={{ aboutme: data.aboutme }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
