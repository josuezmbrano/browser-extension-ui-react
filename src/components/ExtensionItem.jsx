export default function ExtensionItem({ logo, name, description, isActive, toggleStatus, removeItem }) {

  // RECIBE LAS PROPS; EJECUTA CAMBIOS DE STATUS Y CONDICIONA SEGUN EL VALOR DE ISACTIVE LAS CLASES CSS CORRESPONDIENTES

  function toggleCurrentStatus() {
    toggleStatus(name, !isActive)
  }

  return (
    <div className="item-container">
      <div className="top-item-container">
        <div className="top-left-item">
          <img src={logo} alt={name} />
        </div>
        <div className="top-right-item">
          <h3 className="top-right-item-h3">{name}</h3>
          <p className="top-right-item-p">{description}</p>
        </div>
      </div>
      <div className="bottom-item-container">
        <button onClick={() => removeItem(name)} className="remove-button">Remove</button>
          <div onClick={toggleCurrentStatus} className={`switch-track ${isActive ? "on" : "off"}`}>
            <div className={`switch-thumb-off ${isActive ? "thumb-on" : ""}`}></div>
          </div>
      </div>
    </div>
  );
}
