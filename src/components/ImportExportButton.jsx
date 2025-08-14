import { useRef } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { Transfer } from "../models/Transfer"
import { Download} from "lucide-preact";

export const ImportExportButton = forwardRef(({ list }, ref) => {
    const transfer = new Transfer(list.storage);
    const importButtonRef = useRef(null);
    let importJson = null;

    const handleJsonInput = (e) => {
        const file = e.target.files[0];
        if (!file) {
            importJson = null;
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                importJson = JSON.parse(e.target.result);
                importButtonRef.current.removeAttribute('disabled');
            } catch (error) {
                importJson = null;
                alert('Invalid JSON file.');
            }
        };
        reader.readAsText(file);
    };

    const handleImportButton = () => {
        if(importJson === null){
            return;
        }
        transfer.import(importJson);
        location.reload();
    };

    const handleExportButton = () => {
        transfer.export();
    };

    return (
        <>
            <h2>Import/Export Tasks <Download /></h2>
            <p>You can import new tasks in JSON format:</p>
            <div id="import-container">
                <input type="file" id="json-input" accept=".json" onChange={handleJsonInput}/>
                <button id="import-button" disabled ref={importButtonRef} onClick={handleImportButton}>Import</button>
            </div>
            <p>You can export your existing tasks to JSON:</p>
            <button id="export-button" onClick={handleExportButton}>Export</button>
        </>
    );
});