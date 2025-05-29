import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'About', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className='fixed bottom-0 left-0 w-full bg-[#2b2b2b] bg-opacity-75 backdrop-blur-md border border-[#383838] rounded-t-xl z-20 lg:absolute lg:bottom-auto lg:left-auto lg:top-0 lg:right-0 lg:max-w-fit lg:rounded-none lg:rounded-bl-xl lg:rounded-tr-xl lg:py-0 lg:px-5'>
      <ul className='flex flex-row justify-center items-center gap-8 py-5 px-10'>
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return `${isActive ? 'text-yellow-400' : 'text-slate-100'} text-lg font-medium`;
              }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
