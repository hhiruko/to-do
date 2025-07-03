import { useState } from "preact/hooks";
import { Plus, Pencil, PencilOff, Trash } from "lucide-preact";

export function List({list}) {
    const [items, setItems] = useState(list.get());

    const toggleVisibilityById = (id) => {
        const element = document.getElementById(id);
        const display = getComputedStyle(element).display;
        element.style.display = display === 'block' ? 'none' : (display === 'none' ? 'block' : display);
    };

    const toggleMode = (key) => {
        const elements = ['-input', '-label', '-edit-button', '-edit-input', '-save-button', '-delete-button'];
        for(const element of elements) {
            toggleVisibilityById(key + element);
        }
    };

    const addItem = () => {
        const input = document.getElementById('add-to-do-input');
        const text = input.value;
        if(text.length <= 0){
            return;
        }
        list.add(text);
        setItems(list.get());
        input.value = '';
    }

    const checkItem = (key) => {
        list.check(key);
        setItems(list.get());
    }

    const editItem = (key) => {
        toggleMode(key);
    }

    const saveItem = (key) => {
        const input = document.getElementById(key + '-edit-input');
        const text = input.value;
        if(text.length > 0){
            list.edit(key, text);
        }
        toggleMode(key);
        setItems(list.get());
    }

    const deleteItem = (key) => {
        toggleMode(key);
        list.delete(key);
        setItems(list.get());
    }

    return (
        <>
            <div id="add-to-do-container">
                <input type="text" id="add-to-do-input" placeholder="To do..."/>
                <button onClick={addItem}><Plus /></button>
            </div>

            <ul class="to-do-list">
                {Object.entries(items).sort(([a], [b]) => Number(b) - Number(a)).sort(([_, a], [__, b]) => Number(a.status) - Number(b.status)).map(([key, item]) => (
                    <li>
                        <input type="checkbox" id={key + '-input'} onChange={() => checkItem(key)} checked={item.status}/>
                        <label for={key + '-input'} id={key + '-label'}>{item.text}</label>

                        <input type="text" value={item.text} id={key + '-edit-input'} class="edit-input"/>

                        <button id={key + '-edit-button'} onClick={() => editItem(key)}><Pencil width={16} height={16} /></button>
                        <button id={key + '-save-button'} class="save-button" onClick={() => saveItem(key)}><PencilOff width={16} height={16} /></button>
                        <button id={key + '-delete-button'} class="delete-button" onClick={() => deleteItem(key)}><Trash width={16} height={16} /></button>
                    </li>
                ))}
            </ul>
        </>
    );
}