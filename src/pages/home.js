import React from "react";
import '../index.css';
import Sidebar, { SidebarItem } from "../components/sidebar";
import { BookOpen, HomeIcon, PencilIcon, SwordsIcon, TableOfContents, TerminalIcon } from "lucide-react";
import HomePageButtons from "../components/homePageButtons";
// import NewsCarousel from "../components/NewsPanel";
// import LastOpenedCard from "../components/LastOpened";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { onAuthStateChanged } from "firebase/auth";
import {useState, useEffect } from "react";
import { auth } from "../config/firebase";


const Home = () => {
  const navigate = useNavigate()
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

  const handleFirstButtonClick = () => {
    if (user) {
      navigate('/private-library');
    } else {
      navigate('/login');
    }
  };

  const handleSecondButtonClick = () => {
    if (user) {
      navigate('/projects');
    } else {
      navigate('/register');
    }
  };

  // const newsArticles = [
  //   {
  //     category: "Writing News",
  //     title: "How to Write Better",
  //     description: "Top tips for improving your writing skills...",
  //     link: "#1",
  //   },
  //   {
  //     category: "Application News",
  //     title: "New App Launched",
  //     description: "Our latest app is now live with exciting features...",
  //     link: "#2",
  //   },
  //   {
  //     category: "Competition News",
  //     title: "Writing Competition 2024",
  //     description: "Join the upcoming competition and showcase your talent...",
  //     link: "#3",
  //   },
  // ];

  // const lastOpenedTest = {
  //   name: "The Culling Games",
  //   type: "Novel"
  // }
  
  
  return(
      <div className="flex w-full">
        <Sidebar>
          <SidebarItem icon={<HomeIcon size={20}/>} text="Home" />
          <SidebarItem icon={<PencilIcon size={20}/>} text="Write"/>
          <SidebarItem icon={<TerminalIcon size={20}/>} text="Prompts"/>
          <SidebarItem icon={<BookOpen size={20}/>} text="Read"/>
          <SidebarItem icon={<SwordsIcon size={20}/>} text="Challenges"/>
          <SidebarItem icon={<TableOfContents size={20}/>} text="Outline"/>
        </Sidebar>
        <div className="w-full">
          {/* <div className="flex justify-center items-center h-28  bg-purple-400">
            <h1 className="text-7xl flex justify-center text-black">
              For Writers
            </h1>
          </div> */}
          <SearchBar/>
          <div className="pl-[50px] my-10">
            <div className="flex gap-[300px]">
              <div className="w-1/3 flex items-center">
                <div>
                    <div className="flex justify-center">
                      <img src="/logo-no-background.svg" alt="logo" className=" w-[310px]  h-30" onClick={() => navigate('/')}/>
                    </div>

                    <div className=" flex gap-4 mt-4 items-center justify-center">
                      <button className="rounded-xl w-[150px] h-[35px] bg-purple-400 text-black font-semibold font-poppins shadow-xl hover:bg-purple-500" onClick={handleFirstButtonClick}>
                        {user? ("Your Library"): ("Sign In")}
                      </button>
                      <button className="rounded-xl w-[150px] h-[35px] bg-black text-white font-poppins font-semibold shadow-xl hover:bg-slate-900" onClick={handleSecondButtonClick}>
                      {user? ("Public Library"): ("Sign Up")}
                      </button>
                    </div>                
                    <div className="w-[500px] relative z-10 bg-purple-400 rounded-3xl mt-10 text-center p-3 text-xl text-black font-poppins font-semibold shadow-xl">
                      For Writers... The Workspace for dreamers ready to put their elaborate ideas to paper. For Authors, for poets, for screenwriters,
                      for bloggers, for pantsers, for planners.

                      <br/>For Writers
                    </div>
                </div>

              </div>
           
                <div className="relative w-full flex md:w-2/5 lg:w-1/4 justify-center mb-32">

                  <div className="relative z-20 mt-40 shadow-2xl">
                    <img src="/login-pic.jpg" alt="home" className="w-[300px] h-auto rounded-3xl"/>
                  </div>                
                  <div className="absolute z-10 -left-[150px] 2xl:-left-20 top-0 w-[200px] h-[200px] border border-black rounded-3xl text-center flex items-center justify-center p-3 font-poppins font-semibold text-2xl text-purple-400 bg-black shadow-2xl">
                    Take Control of Your Writing
                  </div>
                  <div className="absolute z-30 xl:-right-[70px] 2xl:-right-[10px] top-10 w-[150px] h-[150px] rounded-full bg-purple-400 text-black font-poppins flex font-semibold text-xl text-center items-center shadow-xl">
                    3K Pubished Projects
                  </div>
                </div>

              

               
            </div>
          </div>
          {/* <div className="flex items-center justify-between">
            <div className="flex items-start w-full p-5">
              <NewsCarousel newsArticles={newsArticles}/>
            </div>
            <div className="p-5">
              <LastOpenedCard project={lastOpenedTest}/>
            </div>
            
          </div> */}

          
          <HomePageButtons/>
          
          
        </div>
      </div>


   
    )
}

export default Home;     

