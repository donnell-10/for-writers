import React from "react";
import '../index.css';
import Sidebar, { SidebarItem } from "../components/sidebar";
import { BookOpen, HomeIcon, PencilIcon, SwordsIcon, TableOfContents, TerminalIcon } from "lucide-react";
import HomePageButtons from "../components/homePageButtons";


const Home = () => {
    return(
      <div className="flex w-screen">
        <Sidebar>
          <SidebarItem icon={<HomeIcon size={20}/>} text="Home" />
          <SidebarItem icon={<PencilIcon size={20}/>} text="Write"/>
          <SidebarItem icon={<TerminalIcon size={20}/>} text="Prompts"/>
          <SidebarItem icon={<BookOpen size={20}/>} text="Read"/>
          <SidebarItem icon={<SwordsIcon size={20}/>} text="Challenges"/>
          <SidebarItem icon={<TableOfContents size={20}/>} text="Outline"/>
        </Sidebar>
        <div className="w-screen">
          {/* <div className="flex justify-center items-center h-28  bg-purple-400">
            <h1 className="text-7xl flex justify-center text-black">
              For Writers
            </h1>
            
          </div> */}
          <HomePageButtons/>
          
        </div>
      </div>
      // <div style={{background:'white', height:'100%'}}>
      //   <div style={{display:'flex', justifyContent:'center',  backgroundColor:'rgba(99,10,76,0.3)',}}>
      //       <h1 classname='font-ZCOOL QingKe HuangYou' style={{fontSize:'72px', color:'black', opacity:'100%'}}>
      //         FOR WRITERS
      //       </h1>
      //   </div>
      //   <div>
      //     <div style={{height:'360px', width:'360px', background:'rgba(99,10,76,0.15)', borderRadius:'60px',display:'grid', alignItems:'end'}}>
      //       <div className="mt-5" style={{display:'flex', justifyContent:'center',}}>
      //         <h1 style={{fontSize:'64px', color:"black", transform:'rotate(25deg)' }}>Prompts</h1>
      //       </div>
      //       <div className="flex, mb-10 text-center text-black">
      //         <p className="text-[12px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      //       </div>
      //     </div>
      //   </div>

      // </div>



/* // <div style={{display:'flex', justifyContent:'space-between'}}>
        //     <div>

        //     </div>
        //     <h1 className="header">For Writers</h1>
        //     <div style={{padding:'10px'}}>
        //         <button className="bg-indigo-600 btn" >Sign In</button>
        //     </div>
        // </div> */

   
    )
}

export default Home;     

