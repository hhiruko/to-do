import { useRef } from 'preact/hooks';
import { Trash2 } from "lucide-preact";

export function DeleteCheckedButton({list}) {
    const deleteCheckedDialogRef = useRef(null);
    const deleteAllDialogRef = useRef(null);

    const handleDeleteCheckedButton = () => {
        const checked = Object.entries(list.get()).filter(([_, v]) => v.status).flatMap(([k, _]) => k);
        checked.forEach(key => {
            list.delete(key);
        });
    }

    const handleDeleteAllButton = () => {
        list.clear();
    }

    const handleDeleteCheckedDialogTriggerButton = () => {
        deleteCheckedDialogRef.current.showModal();
    };

    const handleDeleteAllDialogTriggerButton = () => {
        deleteAllDialogRef.current.showModal();
    };

    return (
        <>
            <h2>Delete Tasks <Trash2 /></h2>
            <div id="delete-container">
                <p>You can delete all your checked tasks. This process is irreversible. You can also delete all tasks.</p>
                <div className='delete-buttons-container'>
                    <button id="delete-checked-dialog-trigger-button" onClick={handleDeleteCheckedDialogTriggerButton}>Delete Checked</button>
                    <button id="delete-all-dialog-trigger-button" onClick={handleDeleteAllDialogTriggerButton}>Delete All</button>
                </div>
            </div>
            <dialog id="delete-checked-dialog" ref={deleteCheckedDialogRef} closedby="any">
                <p>Are you sure you want to delete all checked tasks?</p>
                <form class="delete-dialog-form" method="dialog">
                    <button autofocus>Cancel</button>
                    <button id="delete-checked-button" onClick={handleDeleteCheckedButton}>Delete</button>
                </form>
            </dialog>
            <dialog id="delete-all-dialog" ref={deleteAllDialogRef} closedby="any">
                <p>Are you sure you want to delete all tasks?</p>
                <form class="delete-dialog-form" method="dialog">
                    <button autofocus>Cancel</button>
                    <button id="delete-all-button" onClick={handleDeleteAllButton}>Delete</button>
                </form>
            </dialog>
        </>
    );
}