import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Mobible({currentUrl, handleToggleMenu}) {
    
  return (
    <div className="flex sm:hidden gap-8">
        <div className="flex border border-solid p-1 py-1.5 rounded-full border-gray-500">
        <Link to="/">
    <button
      className={`mr-1 px-5 py-1.5 rounded-full
        ${currentUrl === '/' ?  'bg-[#9a9c9a]' : 'bg-inherit'}
      text-white hover:bg-gray-400 transition duration-300 relative z-10 text-sm`}
    >
      Home
    </button>
    </Link>
    <Link to="/info">
    <button
      className={`px-6 py-1.5 rounded-full
      ${currentUrl === '/info'?  'bg-[#9a9c9a]' : 'bg-inherit'}
      text-white hover:bg-gray-400 transition duration-300 relative z-10 text-sm`}
    >
      Info
    </button>
    </Link>
    </div>
    <div className='flex items-center sm:hidden'>
            <FaBars size={20} onClick={handleToggleMenu}/>
        </div>
      </div>
  )
}
