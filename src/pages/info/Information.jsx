import Left from "./Left";
import Left2 from "./Left2";
import Left3 from "./Left3";
import Right from "./Right";
import Right2 from "./Right2";
import {motion} from 'framer-motion';


export default function Information() {
  return (
    <div className="w-full flex items-center bg-inherit text-white flex-col">
        <motion.div 
        initial={{ y: 100, opacity: 0 }}  // Start below and invisible
        animate={{ y: 0, opacity: 1 }}   // Move up and fade in
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 10 }}
        className="hidden w-[72%] p-5 sm:flex h-full mb-10">
            <Left/>
            <Right/>
        </motion.div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}  // Start below and invisible
        animate={{ y: 0, opacity: 1 }}   // Move up and fade in
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 10 }}
        className="w-[72%] p-5 hidden sm:flex h-full mb-10">
            <Left2/>
            <Right2/>
        </motion.div>

        {/** Mobile Section */}
        <motion.div 
        initial={{ y: 100, opacity: 0 }}  // Start below and invisible
        animate={{ y: 0, opacity: 1 }}   // Move up and fade in
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 10 }}className="block sm:hidden">
            <Left3/>
        </motion.div>
    </div>
  )
}
