import React, { useCallback, } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"
//import { useRef } from "react";
import "../styles.css"
import Sidebar, { SidebarItem } from "../components/sidebar";
import {BookOpen, HomeIcon, PencilIcon, SwordsIcon, TableOfContents, TerminalIcon } from "lucide-react";


const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ]

export default function Write() {
    const wrapperRef = useCallback ((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, {theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS} })


    }, [])

        

    return(
        <div className="flex">
            <div className=" sidebar-container">
                <Sidebar>
                    <SidebarItem icon={<HomeIcon size={20}/>} text="Home" />
                    <SidebarItem icon={<PencilIcon size={20}/>} text="Write"/>
                    <SidebarItem icon={<TerminalIcon size={20}/>} text="Prompts"/>
                    <SidebarItem icon={<BookOpen size={20}/>} text="Read"/>
                    <SidebarItem icon={<SwordsIcon size={20}/>} text="Challenges"/>
                    <SidebarItem icon={<TableOfContents size={20}/>} text="Outline"/>
                </Sidebar>      
            </div>

       
        <div className="container" ref={wrapperRef}>
        </div> 
        </div>
        
    )
}