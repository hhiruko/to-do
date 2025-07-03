import { CollectionStorage } from "../models/CollectionStorage";
import { List as ListModel } from "../models/List";
import { ThemeButton } from "./ThemeButton";
import { List as ListComponent } from "./List"

export function App() {
    const listStorage = new CollectionStorage('to-do');
    const list = new ListModel(listStorage);

    return (
        <>
            <ThemeButton />
            <ListComponent list={list} />
        </>
    );
}