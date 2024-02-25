import { useRef } from 'react';
import { FaBars, FaDraftingCompass } from 'react-icons/fa';

function Header() {
  const navEle = useRef<HTMLElement | null>(null);

  const handleToggle = () => navEle.current?.classList.toggle('hidden');

  return (
    <header className='flex items-center justify-between flex-wrap bg-red-800 py-4 w-full'>
      <div className='flex-shrink-0 ml-6'>
        <a href='#' className='flex gap-2 items-center'>
          <FaDraftingCompass size={30} className='text-yellow-500' />
          <span className='ml-1 text-2xl text-white-200 font-semibold'>
            Company Title
          </span>
        </a>
      </div>

      <button
        aria-label='navigation-options'
        id='nav-toggle'
        onClick={handleToggle}
        className='md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-blue-200 hover:border-blue-200'
      >
        <FaBars size={30} />
      </button>

      <nav
        ref={navEle}
        className={`pl-6 w-full hidden md:w-auto md:block`}
        id='nav-content'
      >
        <ul className='md:flex'>
          <li className='mr-6 p-1'>
            <a href='#' className='text-white hover:text-yellow-200'>
              Home
            </a>
          </li>
          <li className='mr-6 p-1'>
            <a href='#' className='text-white hover:text-yellow-200'>
              Team
            </a>
          </li>
          <li className='mr-6 p-1'>
            <a href='#' className='text-white hover:text-yellow-200'>
              Services
            </a>
          </li>
          <li className='mr-6 p-1'>
            <a href='#' className='text-white hover:text-yellow-100'>
              Projects
            </a>
          </li>
          <li className='mr-6 p-1'>
            <a href='#' className='text-white hover:text-yellow-200'>
              About
            </a>
          </li>
          <li className='mr-6 p-1 md:border-b-2'>
            <a href='#' className='text-white hover:text-yellow-200'>
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
