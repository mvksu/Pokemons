import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"

const DarkModeToggle = () => {
    const [darkmode, setDarmode] = useState(true)

    return <div className="box" onClick={() => {
        document.body.classList.toggle('dark-theme')
        setDarmode(!darkmode)
    }}>
        {darkmode ? <FaSun /> : <FaMoon />}
    </div>
}




export default DarkModeToggle;