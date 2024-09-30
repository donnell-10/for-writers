/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

//import { Auth } from "../components/auth";
import { db } from "../config/firebase";
import { getDocs, collection, } from "firebase/firestore";
const Projects = () => {
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
    }, []);


    return(
        <div>
            {projectList.map((project) => (
                <div>
                    <h1>
                        {project.title}
                    </h1>
                    <h2>
                        {project.type}
                    </h2>
                    <p>
                        {project.description}
                    </p>
                </div>
            ))}
                

           
        </div>
    )



}

export default Projects;