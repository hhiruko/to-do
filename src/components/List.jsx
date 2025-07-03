import { useState } from "preact/hooks";
import { Plus} from "lucide-preact";

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

    const checkItem = (key) => {
        list.check(key);
        setItems(list.get());
    }

    return (
        <>
            <div id="add-to-do-container">
                <input type="text" id="add-to-do-input" placeholder="To do..."/>
                <button onClick={addItem}><Plus /></button>
            </div>

            <ul class="to-do-list">
                {Object.entries(items).sort(([a], [b]) => Number(b) - Number(a)).map(([key, item]) => (
                    <li>
                        <input type="checkbox" id={key} onChange={() => checkItem(key)} checked={item.status}/>
                        <label for={key}>{item.text}</label>
                    </li>
                ))}
            </ul>
        </>
    );
}