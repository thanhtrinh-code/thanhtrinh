import Left from "./Left";
import Right from "./Right";


export default function Information() {
  return (
    <div className="w-full flex items-center bg-inherit text-white flex-col">
        <div className="w-[72%] p-5 flex h-full mb-10">
            <Left/>
            <Right/>
        </div>
        <div className="w-[72%] p-5 flex h-full mb-10">
            <Left/>
            <Right/>
        </div>
        <div className="w-[72%] p-5 flex h-full mb-10">
            <Left/>
            <Right/>
        </div>
    </div>
  )
}
