import { ChevronDown } from "lucide-react"
export default function Dropdown ({name, options}) {
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="bg-purple-300 rounded-md w-[100px] p-1 h-[30px] flex items-center justify-center text-gray-700 font-semibold hover:bg-purple-400">
                {name} 
                <ChevronDown size={18} className="mt-1"/>

            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-44 p-2 shadow">
            {options.map((option, index) => (
                        <li key={index}>
                            <button 
                                className="text-left w-full"
                            >
                                {option}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )

}