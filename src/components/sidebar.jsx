import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles.css";

// Sidebar Context
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.log("logout failed", err);
    }
  };

  // Toggle dropdown visibility
  const handleProfileClick = () => {
    if(user == null){
      navigate("/login");
    }else{
      setDropdownVisible(!dropdownVisible);
    }
    
    
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`transition-all ${expanded ? "w-[370px] 2xl:w-[340px]" : "w-[70px]"}`}>
        <aside className="h-screen fixed left-0 bottom-0">
          <nav className="h-full flex flex-col shadow-md bg-purple-300">
            <div className="p-4 pb-2 flex justify-between items-center">
              {/* Logo */}
              <button>
                {expanded ? (
                  <img
                    src="/logo-no-background.svg"
                    alt="logo"
                    className="w-30 h-8"
                    onClick={() => navigate("/")}
                  />
                ) : null}
              </button>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-purple-300 hover:bg-gray-200 border-black border-2"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            {/* Sidebar Content */}
            <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>

            {/* Profile Section */}
            <div className="border-t flex p-3 relative profile-dropdown">
              <button
                onClick={handleProfileClick}
                className="hover:bg-indigo-50 p-1.5 rounded-lg flex-1 w-full text-left text-gray-600 flex items-center font-poppins font-semibold"
              >
                {/* <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                /> */}
                {expanded && <span className="ml-3">{user ? user.displayName : "Log In"}</span>}
              </button>

              {/* <MoreVertical size={20} className="text-gray-600 ml-auto" /> */}

              {/* Dropdown */}
              {user && dropdownVisible && expanded && (
                <div className="absolute left-8 bottom-14 bg-black text-white w-[220px] rounded-md shadow-lg z-50 font-poppins font-semibold  speech-bubble">
                  <ul>
                    <li className="hover:bg-slate-900 p-2 cursor-pointer hover:rounded-md">
                        Profile
                    </li>
                    <li className="hover:bg-slate-900 p-2 cursor-pointer hover:rounded-md"
                    
                      onClick={handleLogout}
                    >
                      Log out {user.displayName || "User"}
                    </li>
                  </ul>
                  <div className="triangle"></div>
                </div>
              )}
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} />}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
