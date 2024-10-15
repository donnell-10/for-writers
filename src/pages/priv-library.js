import React from "react";
import Sidebar, { SidebarItem } from "../components/sidebar";
import { BookOpen, HomeIcon, PencilIcon, SwordsIcon, TableOfContents, TerminalIcon } from "lucide-react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import FileCard from "../components/FileCard";


import { db } from "../config/firebase";
import { getDocs, collection, } from "firebase/firestore";
const PrivateLibrary = () => {
    const[projectList, setProjectList] = useState([])

    const projectCollectionRef = collection(db, "projects")
    useEffect(() => {
        const getProjectList = async() => {
            try {
                const data = await getDocs(projectCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(), 
                    id:doc.id})); 
                setProjectList(filteredData);
            } catch (error) {
                console.error(error)
            }
             
        };
        getProjectList()
    }, [projectCollectionRef]);

    const typeOptions = [
        "Project",
        "Document",
        "Outline",
        "Prompt",
        "Challenge",
        "Published",
        "Folder"
    ]

    const authorOptions = [
        "Me",
        "Other"
    ]

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
                <div className="bg-purple-300">
                    <SearchBar/>
                </div>
                <div className="p-3 gap-4 ">
                    <div className="flex justify-between items-center w-11/12">
                        <h1 className=" text-black font-bold text-4xl mb-4">
                            My Library
                        </h1>
                        <Dropdown name={"New"} options={typeOptions}/>
                    </div>
                    <div className="flex gap-3 mb-5">
                       <Dropdown name={"Type"} options={typeOptions}/> 
                       <Dropdown name={"Author"} options={authorOptions}/>
                    </div>
                    <h2 className="font-semibold text-lg text-gray-700">
                        Folders
                    </h2>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-700 mb-3">
                            Projects
                        </h2>

                        {projectList.map((project) => (
                            <FileCard title={project.title} des={project.description}/>
                        ))}
                    </div>


                    
                    
                </div>
                
                

            </div>
            
        </div>
    )
}

export default PrivateLibrary