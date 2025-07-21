import ExtensionHeader from "./ExtensionHeader"
import ExtensionFilter from "./ExtensionFilter"
import ExtensionList from "./ExtensionList"

export default function ExtensionUI() {
    return (
        <main className="ui-container-parent">
            <ExtensionHeader />
            <ExtensionFilter />
            <ExtensionList />
        </main>
    )
}