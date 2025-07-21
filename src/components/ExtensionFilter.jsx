export default function ExtensionFilter() {
    return (
        <section className="extension-filter-section-container">
            <div>
                <h2 className="extension-filter-h2">Extensions List</h2>
            </div>
            <div className="extension-filter-button-container">
                {/* Esto se puede hacer en un componente aparte y usar customHooks para sus IDS */}
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
            </div>
        </section>
    )
}