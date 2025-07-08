export class List {
    constructor(storage) {
        this.storage = storage;
        this.listeners = new Set();
    }

    notify() {
        for (const listener of this.listeners) {
            listener();
        }
    }

    subscribe(callback) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }

    newKey() {
        return Date.now();
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
        this.storage.set(this.newKey(), itemObject);
        this.notify();
    }

    edit(key, item) {
        const itemObject = {
            text: item,
            status: this.storage.get(key).status
        }
        this.storage.set(key, itemObject);
        this.notify();
    }

    check(key) {
        const item = this.storage.get(key);
        const itemObject = {
            text: item.text,
            status: !item.status
        }
        this.storage.set(key, itemObject);
        this.notify();
    }

    delete(key) {
        this.storage.remove(key);
        this.notify();
    }

    clear() {
        this.storage.clear();
        this.notify();
    }

    copy(key) {
        const item = this.storage.get(key);
        const itemObject = {...item};
        this.storage.set(this.newKey(), itemObject);
        this.notify();
    }
}