import { useState } from "preact/hooks";
import { Plus } from "lucide-preact";

export function List({list}) {
    const [items, setItems] = useState(list.get());

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

    return (
        <>
            <div id="add-to-do-container">
                <input type="text" id="add-to-do-input" placeholder="To do..."/>
                <button onClick={addItem}><Plus /></button>
            </div>

            <ul className="to-do-list">
                {Object.entries(items).sort(([a], [b]) => Number(b) - Number(a)).map(([key, item]) => (
                    <li>
                        <input type="checkbox" id={key}/>
                        <label htmlFor={key}>{item.text}</label>
                    </li>
                ))}
            </ul>
        </>
    );
}