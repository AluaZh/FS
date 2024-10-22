import { useEffect, useRef } from "react"
import {UseLocalStorage} from "../../utils/useLocalStorage"
import "./style.css"
import sun from "./sun.svg"
import moon from "./moon.svg"


export default function BtnDarkMode () {
    const [darkMode, setDarkMode] = UseLocalStorage("darkMode", "light")

    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === "dark") {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => currentValue === "light" ? "dark" : "light")
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Night mode" className="dark-mode-btn__icon" />
        </button>
    )
}