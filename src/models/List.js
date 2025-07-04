export class List {
    constructor(storage) {
        this.storage = storage;
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
    }

    edit(key, item) {
        const itemObject = {
            text: item,
            status: this.storage.get(key).status
        }
        this.storage.set(key, itemObject);
    }

    check(key) {
        const item = this.storage.get(key);
        const itemObject = {
            text: item.text,
            status: !item.status
        }
        this.storage.set(key, itemObject);
    }

    delete(key) {
        this.storage.remove(key);
    }

    clear() {
        this.storage.clear();
    }

    copy(key) {
        const item = this.storage.get(key);
        const itemObject = {...item};
        this.storage.set(this.newKey(), itemObject);
    }
}