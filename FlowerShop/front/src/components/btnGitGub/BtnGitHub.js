import "./style.css"

import gitHubBlack from "./gitHub-dark.svg"

export default function BtnGitHub ({link}) {
    return (
        <a href={link} target="_blank" className="btn-outline">
            <img src={gitHubBlack} alt="" />
            GitHub repo
        </a>
    )
}