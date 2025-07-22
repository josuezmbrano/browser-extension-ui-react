import React from "react"
import LogoHeader from '../assets/logo.svg'
import LightModeIcon from '../assets/icon-sun.svg'
import DarkModeIcon from '../assets/icon-moon.svg'
import { ExtensionContext } from "./ExtensionUI";


export default function ExtensionHeader() {
  const {isDarkTheme, toggleTheme} = React.useContext(ExtensionContext)

  return (
    <header className={`extension-header-header-container ${isDarkTheme === "light" ? "header-container-light-theme" : "" }`}>
      <div>
        <img src={LogoHeader} alt="Logo-logoName svg"/>
      </div>
      <div>
        <button onClick={toggleTheme} className={`theme-button-dark ${isDarkTheme === "light" ? "theme-button-light" : "" } `}>
            <img className="theme-button-img" src={isDarkTheme === "light" ? DarkModeIcon : LightModeIcon }/>
        </button>
      </div>
    </header>
  );
}
