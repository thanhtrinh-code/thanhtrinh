import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function ProjectCard({url, pic, title, description, color, hoverColor}) {
  const navigate = useNavigate();
  return (
    <div className='group sm:w-[76%] h-96 sm:h-[92%] border border-solid border-[#f0f1f27d] rounded-3xl p-2'>
          <div className={`w-full h-full border border-solid border-[#f0f1f235] rounded-3xl hover:border-white 
          ${color}
          sm:bg-[#5455565a]
          hover:bg-gradient-to-bl ${hoverColor} flex flex-col`}
          >
            
            <div className='flex justify-between items-center mb-4 px-10 pt-4 gap-6 sm:gap-0'>
                <div>
                <h2 className='text-2xl font-semibold text-white'>{title}</h2>
                <p className='text-sm sm:text-base font-thin  text-gray-200'>{description}</p>
                </div>
                <div className='flex items-center text-white group-hover:translate-x-3'>
                  <FaArrowRightLong size={24}/>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-end pb-2'>
            <div className="w-5/6 h-full bg-cover bg-center rounded-xl" style={{
                backgroundImage: `url('/${pic}')`}}>
            </div>
            </div>
          </div>
        </div>
  )
}
