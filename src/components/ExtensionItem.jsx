export default function ExtensionItem({ logo, name, description, isActive }) {
    console.log(logo)

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
        <button className="remove-button">Remove</button>
        <label class="switch-container">
          <input type="checkbox" class="switch-checkbox-hidden" />
          <div class="switch-track">
            <div class="switch-thumb"></div>
          </div>
        </label>
      </div>
    </div>
  );
}
