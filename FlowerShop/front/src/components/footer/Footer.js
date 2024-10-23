import "./style.css"

import vk from "../../img/icons/vk.svg"
import instagram from "../../img/icons/instagram.svg"
import twitter from "../../img/icons/twitter.svg"
import gitHub from "../../img/icons/gitHub.svg"
import linkedIn from "../../img/icons/linkedIn.svg"

export default function Footer () {
    return (
        <footer className="footer">
            <div className="container">
            <div className="footer__wrapper">
                
                <ul className="social">
                <li className="social__item"><a href="#!"><img src={vk} alt="" /></a></li>
                <li className="social__item"><a href="#!"><img src={instagram} alt="" /></a></li>
                <li className="social__item"><a href="#!"><img src={twitter} alt="" /></a></li>
                <li className="social__item"><a href="#!"><img src={gitHub} alt="" /></a></li>
                <li className="social__item"><a href="#!"><img src={linkedIn} alt="" /></a></li>
                </ul>

                <div className="copyright">
                <p>© 2024 frontend-dev.com</p>
                </div>

            </div>
            </div>
        </footer>
    )
}