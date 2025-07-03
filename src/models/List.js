export class List {
    constructor(storage) {
        this.storage = storage;
    }

    keys() {
        return this.storage.keys();
    }

    get() {
        return this.storage.list();
    }

    add(item) {
        const itemObject = {
            text: item,
            status: false
        }
        this.storage.set(Date.now(), itemObject);
    }

    edit(key, item) {
        const itemObject = {
            text: item,
            status: this.storage.get(key).status
        }
        this.storage.set(key, itemObject);
    }

    delete(key) {
        this.storage.remove(key);
    }

    clear() {
        this.storage.clear();
    }
}