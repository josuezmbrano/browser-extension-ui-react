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

  const [isDarkTheme, setIsDarkTheme] = React.useState("light")

  function toggleTheme() {
    setIsDarkTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  React.useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme")
    document.body.classList.add(`${isDarkTheme}-theme`)
  }, [isDarkTheme])

  return (
    <main className="ui-container-parent">
      <ExtensionContext.Provider value={{idSelected, currentFilter, toggleIdSelected, toggleTheme, isDarkTheme}}>
        <ExtensionHeader />
        <ExtensionFilter />
        <ExtensionList />
      </ExtensionContext.Provider>
    </main>
  );
}

export { ExtensionContext };
