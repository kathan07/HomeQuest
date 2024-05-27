import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <header className='bg-violet-600 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto  p-3'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
              <span className='text-violet-100'>Real</span>
              <span className='text-violet-950'>Estate</span>
            </h1>
          </Link>
          <form className='bg-violet-200 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-violet-600' />
          </form>
          <ul className='flex gap-4'>
            <Link to='/Home'>
              <li className='hidden sm:inline text-violet-100 hover:underline'>Home</li>
            </Link>
            <Link to='/About'>
              <li className='hidden sm:inline text-violet-100 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
              {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />
              ) : (
                <li className=' text-violet-100 hover:underline'> Sign in</li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </>
  )
}
