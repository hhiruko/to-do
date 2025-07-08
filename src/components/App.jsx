import { CollectionStorage } from "../models/CollectionStorage";
import { List as ListModel } from "../models/List";
import { ThemeButton } from "./ThemeButton";
import { List as ListComponent } from "./List"
import { ListChecks } from "lucide-preact";
import { Stats } from "./Stats";

export function App() {
    const listStorage = new CollectionStorage('to-do');
    const list = new ListModel(listStorage);

    return (
        <>
            <header>
                <h1><ListChecks width={30} height={30} />To-do:</h1>
                <div id="header-right-container">
                    <Stats list={list} />
                    <ThemeButton />
                </div>
            </header>
            <ListComponent list={list} />
        </>
    );
}