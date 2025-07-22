export default function ExtensionItem({ logo, name, description, isActive, toggleStatus, removeItem, isDarkTheme }) {

  // RECIBE LAS PROPS; EJECUTA CAMBIOS DE STATUS Y CONDICIONA SEGUN EL VALOR DE ISACTIVE LAS CLASES CSS CORRESPONDIENTES

  function toggleCurrentStatus() {
    toggleStatus(name, !isActive)
  }

  return (
    <div className={`item-container ${isDarkTheme === "light" ? "item-container-light-theme" : ""}`}>
      <div className="top-item-container">
        <div className="top-left-item">
          <img src={logo} alt={name} />
        </div>
        <div className="top-right-item">
          <h3 className={`top-right-item-h3 ${isDarkTheme === "light" ? "h3-light-theme" : ""}`}>{name}</h3>
          <p className={`top-right-item-p ${isDarkTheme === "light" ? "p-light-theme" : ""}`}>{description}</p>
        </div>
      </div>
      <div className="bottom-item-container">
        <button onClick={() => removeItem(name)} className={`remove-button ${isDarkTheme === "light" ? "remove-light-theme" : ""}`}>Remove</button>
          <div onClick={toggleCurrentStatus} className={`switch-track ${isActive ? "on" : "off"}`}>
            <div className={`switch-thumb-off ${isActive ? "thumb-on" : ""}`}></div>
          </div>
      </div>
    </div>
  );
}
