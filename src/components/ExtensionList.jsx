import React from "react";
import extensionData from "./extensionData";
import ExtensionItem from "./ExtensionItem";
import { ExtensionContext } from "./ExtensionUI";

// EXTENSION LIST TOMA EL VALOR DEL CURRENT FILTER DE NUESTRO CONTEXT PARA QUE PODAMOS VALIDAR O FILTRAR LO QUE RENDERIZARA LA LISTA
// SE INICIALIZA NUESTRA DATA, SE FILTRA Y SE MAPEA Y SE ENVIAN LAS PROPS NECESARIOS A EXTENSION ITEM PARA QUE EJECUTE LAS FUNCIONABILIDADES
// CORRESPONDIENTES

export default function ExtensionList() {
  const [extension, setExtension] = React.useState(extensionData);
  const { currentFilter } = React.useContext(ExtensionContext);

  function toggleStatus(name, newStatus) {
    setExtension((extension) => {
      return extension.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            isActive: newStatus,
          };
        }
        return item;
      });
    });
  }

  const filteredExtensions = extension.filter((ext) => {
    if (currentFilter === "All") {
      return true;
    } else if (currentFilter === "Active" && ext.isActive) {
      return true;
    } else if (currentFilter === "Inactive" && !ext.isActive) {
      return true;
    }
  });

  function removeItem(name) {
    setExtension(prevExt => prevExt.filter(ext => ext.name !== name))
  }

  return (
    <section className="extension-list-section-container">
      {filteredExtensions.map((ext) => {
        return (
          <ExtensionItem
            key={ext.name}
            logo={ext.logo}
            name={ext.name}
            description={ext.description}
            isActive={ext.isActive}
            toggleStatus={toggleStatus}
            removeItem={removeItem}
          />
        );
      })}
    </section>
  );
}

