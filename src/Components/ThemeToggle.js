import { useContext } from "react";
import { ThemeContext } from "./Context/Theme";

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        (theme === 'light' ? setTheme('dark') : setTheme('light'))
        console.log(theme, 'after')
    }
    return (
        <div className="toggle">
            <button onClick={handleClick}>{theme}</button>
        </div>
    )
}

export default ThemeToggle