import React from "react";
import Sidebar, {SidebarItem} from "../components/sidebar";
import { BookOpen, HomeIcon, PencilIcon, SwordsIcon, TableOfContents, TerminalIcon } from "lucide-react";

const ProfilePage = () => {
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
                <div className="p-5">
                    <h1 className="font-poppins text-8xl text-black">My Profile</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;