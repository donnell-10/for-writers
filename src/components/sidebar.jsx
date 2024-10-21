import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const SidebarContext = createContext();

export default function Sidebar ({children}) {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(true)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser){
                setUser(currentUser);
            } else {
                setUser(null)
            }
            
        })
        return () => unsubscribe();
    })

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login')
        } catch(err) {
            console.log("logout failed", err)
        }
    }

    return (
        <>
        <div className={` transition-all ${expanded? "w-[370px] 2xl:w-[340px]" : "w-[70px] "}`}>
        <aside className="h-screen fixed left-0 bottom-0">
            <nav className="h-full flex flex-col  shadow-md bg-purple-300 ">
                <div className="p-4 pb-2 flex justify-between items-center ">  
                    <button>
                        {expanded? <img src="/logo-no-background.svg" alt="logo" className=" w-30  h-8" onClick={() => navigate('/')}/> : <></> }
                    </button>
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-purple-300 hover:bg-gray-200 border-black border-2 ">
                        {expanded? <ChevronFirst/> : <ChevronLast/>}
                    </button>
                  
                </div>
                <SidebarContext.Provider value={{expanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            {user ? (
                            <button className="hover:bg-indigo-50 p-1.5 rounded-lg flex-1 h-8 w-48 text-left text-gray-600 font-medium" onClick={handleLogout}>
                               {user.displayName || "User"} 
                            </button>
                            ) : (
                            <button className="hover:bg-indigo-50 p-1.5 rounded-lg flex-1 h-8 w-48 text-left text-gray-600 font-medium"
                            onClick={() => navigate('/login')}>
                                Sign In
                            </button>
                            )}

                        </div>
                        <MoreVertical size={20} className="text-gray-600"/>
                    </div>
                </div>
            </nav>
        </aside>
        </div>
        </>
    )


}    
export function SidebarItem({ icon, text, active, alert }) {
        const { expanded } = useContext(SidebarContext)
        return (
            <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {alert && (
                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>
    
                    </div>
                )}
    
                {!expanded && (
                    <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                        {text}
                    </div>
                )}
            </li>
        )
    }