import LogoHeader from '../assets/logo.svg'
import LightModeIcon from '../assets/icon-sun.svg'

export default function ExtensionHeader() {
  return (
    <header className="extension-header-header-container">
      <div>
        <img src={LogoHeader} alt="Logo-logoName svg"/>
      </div>
      <div>
        <button className="theme-button">
            <img className="theme-button-img" src={LightModeIcon}/>
        </button>
      </div>
    </header>
  );
}
