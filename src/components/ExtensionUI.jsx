import React from "react";
import ExtensionHeader from "./ExtensionHeader";
import ExtensionFilter from "./ExtensionFilter";
import ExtensionList from "./ExtensionList";
import useToggleFilter from "../hooks/useToggleFilter";

// COMPONENTE PADRE QUE RENDERIZA TODOS LOS SUBCOMPONENTES DE NUESTRA APP
// SE CREA UN CONTEXT QUE TOMARA COMO VALOR LOS RESULTADOS QUE GUARDA NUESTRO HOOK USETOGGLEFILTER
// Y LOS ENVIARA A EXTENSION FILTER Y EXTENSIONLIST DE ESTA FORMA SE LOGRA QUE HAYA UNA SOLA SOURCE OF TRUTH
// ADEMAS DE QUE SE LOGRA EL FLUJO DE DATOS DE PADRE A HIJO


const ExtensionContext = React.createContext();

export default function ExtensionUI() {
  const [idSelected, currentFilter, toggleIdSelected] = useToggleFilter();

  return (
    <main className="ui-container-parent">
      <ExtensionHeader />
      <ExtensionContext.Provider value={{idSelected, currentFilter, toggleIdSelected}}>
        <ExtensionFilter />
        <ExtensionList />
      </ExtensionContext.Provider>
    </main>
  );
}

export { ExtensionContext };
