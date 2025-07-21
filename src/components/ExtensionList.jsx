import React from "react";
import extensionData from "./extensionData";
import ExtensionItem from './ExtensionItem'

export default function ExtensionList() {
  return (
    <section className="extension-list-section-container">
      {/* Aca se renderizara cada extensionItem como un subcomponente con map, cada uno tendra su id y sus funciones */}
      {extensionData.map((extension) => {
        return (
          <ExtensionItem
            key={extension.name}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
          />
        );
      })}
    </section>
  );
}
