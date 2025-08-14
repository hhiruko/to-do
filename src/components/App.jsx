import { CollectionStorage } from "../models/CollectionStorage";
import { List as ListModel } from "../models/List";
import { ThemeButton } from "./ThemeButton";
import { List as ListComponent } from "./List"
import { ListChecks, Settings2 } from "lucide-preact";
import { Stats } from "./Stats";
import { DeleteCheckedButton } from "./DeleteCheckedButton";
import { ImportExportButton } from "./ImportExportButton";

export function App() {
    const listStorage = new CollectionStorage('to-do');
    const list = new ListModel(listStorage);

    const handleSettings = () => {
        const settingsContainer = document.querySelector('.system-actions-container');
        if (!settingsContainer) {
            return;
        }

        if(settingsContainer.style.display === 'block') {
            settingsContainer.style.display = 'none';
        } else {
            settingsContainer.style.display = 'block';
        }
    };

    return (
        <>
            <header>
                <h1><ListChecks width={30} height={30} />To-do:</h1>
                <div id="header-right-container">
                    <Stats list={list} />
                    <ThemeButton />
                    <Settings2 onClick={handleSettings} />
                </div>
            </header>
            <div className="system-actions-container">
                <ImportExportButton list={list} />
                <DeleteCheckedButton list={list} />
            </div>
            <ListComponent list={list} />
        </>
    );
}