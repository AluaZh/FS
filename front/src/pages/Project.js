import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitGub/BtnGitHub";
import { test } from "../helpers/projectsList";
import img from "../img/logo.png";

export default function Project () {
    const {id} = useParams();
    const project = test[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    <BtnGitHub link={project.gitHubLink} />
                </div>
            </div>
        </main>
    )
}