export default function FilterButtons({filterId, filter, idSelected, currentFilter, toggleIdSelected}) {

    // COMPONENTE BASICO PARA LOS BOTONES DE LOS FILTROS DE LA LISTA
    // SE HACE USO DEL CUSTOM HOOK USETOGGLEFILTER
    // SE CREA UNA VARIABLE ACTIVE QUE DARA COMO RESULTADO TRUE OR FALSE SI EL IDSELECTED Y CURRENTFITLER DE NUESTRO HOOK
    // ES IGUAL AL ID Y AL FILTER DEL ARRAY DE BOTONES DE EXTENSIONFILTER 
    // ADEMAS DE EJECUTAR LA FUNCION TOGGLEIDSELECTED PARA CAMBIAR DE FILTROS, EL BOTON CUYA INCIDENCIA DA QUE ACTIVE SEA TRUE
    // TENDRA UN CAMBIO DE ESTILOS CSS PARA REPRESENTAR QUE ESTA ACTIVO

    const active = idSelected === filterId && currentFilter === filter
    
    return (
        <button onClick={() => toggleIdSelected(filterId, filter)}  className={`inactive ${active ? "active" : ""}`}>{filter}</button>
    )
}