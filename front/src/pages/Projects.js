import Project from "../components/project/Project"
import { test } from "../helpers/projectsList"


export default function Projects () {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Test</h2>
                <ul className="projects">
                    
                    {test.map((project, index) => {
                        return (
                            <Project 
                                key={index} 
                                title={project.title}  
                                img={project.img}
                                index={index}
                            />
                        )
                    })}


                </ul>
            </div>
        </main>
    )
}