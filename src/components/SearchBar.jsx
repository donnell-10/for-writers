import { Search } from "lucide-react"

export default function SearchBar () {
    return(
        <div className="flex bg-purple-300 h-20 p-3 items-center">
            <label className="input input-bordered flex items-center gap-2 w-[450px] bg-purple-400 h-10 text-gray-700">
                <input type="text" className="grow text-gray-700 placeholder-gray-700" placeholder="Search in Library" />
                <Search size={20}/>
            </label>
        </div>
    )
}

