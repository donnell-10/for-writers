import { useNavigate } from "react-router-dom";

const HomePageButtons =  () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between p-6">
            <button className="w-[275px] h-[275px]  border-4 bg-purple-300 hover:bg-purple-400" style={{borderRadius:'70px'}}>
                <h1 className="text-[50px] text-black">Prompts</h1>
                <p className="text-[12px] p-2 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            </button>
            <button className="w-[275px] h-[275px] border-4 bg-purple-400 hover:bg-purple-500" style={{borderRadius:'70px'}}
            onClick={() => navigate('/write')} >
                <h1 className="text-[50px] text-black">Write</h1>
                <p className="text-[12px] p-2 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            </button>
            <button className="w-[275px] h-[275px] border-4 bg-purple-300 hover:bg-purple-400" style={{borderRadius:'70px'}}>
                <h1 className="text-[50px] text-black">Read</h1>
                <p className="text-[12px] p-2 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            </button>
        </div>
    )
}

export default HomePageButtons;