import React from 'react'

// HOOK QUE PERMITE IDENTIFICAR EL FILTRO ACTIVO EN BASE A UN ID Y UN STATUS
// AL VERIFICAR SI EL ID COINCIDE CON EL ID DEL FILTRO, CAMBIA EL ESTADO DEL FILTRO ACTIVO

export default function useToggleFilter() {

    const [idSelected, setIdSelected] = React.useState(1)
    const [currentFilter, setCurrentFilter] = React.useState("All")

    function toggleIdSelected(identification, status) {
        if (identification !== idSelected) {
            setIdSelected(identification)
            setCurrentFilter(status)
        }
    }

    return [idSelected, currentFilter, toggleIdSelected]

}