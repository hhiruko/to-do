import { CollectionStorage } from "../models/CollectionStorage";
import { List as ListModel } from "../models/List";
import { ThemeButton } from "./ThemeButton";
import { List as ListComponent } from "./List"
import { ListChecks } from "lucide-preact";

export function App() {
    const listStorage = new CollectionStorage('to-do');
    const list = new ListModel(listStorage);

    return (
        <>
            <header>
                <h1><ListChecks width={30} height={30} />To-do:</h1>
                <ThemeButton />
            </header>
            <ListComponent list={list} />
        </>
    );
}