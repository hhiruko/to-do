import { useEffect, useState, useRef } from "preact/hooks";

export function Stats({list}) {
    const [items, setItems] = useState(list.get());
    const [isPercentage, setIsPercentage] = useState(false);

    useEffect(() => {
        const unsubscribe = list.subscribe(() => {
            setItems(list.get());
        });
        return () => unsubscribe();
    }, [list]);

    const getStats = () => {
        const checked = Object.entries(items).reduce((acc, [_, item]) => acc + (item.status === true ? 1 : 0), 0);
        const total = Object.keys(items).length;

        if (total === 0) {
            return '';
        }

        if(isPercentage) {
            return Math.round((checked / total) * 100) + '%';
        }

        return checked + '/' + total;
    };

    const toggleStats = () => {
        setIsPercentage(!isPercentage);
    };
    
    return (
        <button id="stats-button" onClick={toggleStats}>{getStats()}</button>
    );
}