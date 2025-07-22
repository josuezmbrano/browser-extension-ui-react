import React from "react"
import FilterButtons from "./FilterButtons";
import {ExtensionContext} from "./ExtensionUI"

// SE HACE USO DEL CONTEXT PARA PODER EJECUTAR LA LOGICA QUE SELECCIONA QUE FILTRO ESTA ACTIVO USANDO
// ID SELECTED, CURRENT FILTER, TOGGLEIDSELECTED

export default function ExtensionFilter() {
  
  const {idSelected, currentFilter, toggleIdSelected} = React.useContext(ExtensionContext)

  const filterButtons = [
    { current: "All", id: 1 },
    { current: "Active", id: 2 },
    { current: "Inactive", id: 3 },
  ];

  return (
    <section className="extension-filter-section-container">
      <div>
        <h2 className="extension-filter-h2">Extensions List</h2>
      </div>
      <div className="extension-filter-button-container">
        {filterButtons.map((filter) => {
          return (
            <FilterButtons
              idSelected={idSelected}
              currentFilter={currentFilter}
              toggleIdSelected={toggleIdSelected}
              key={filter.id}
              filter={filter.current}
              filterId={filter.id}
            />
          );
        })}
      </div>
    </section>
  );
}
