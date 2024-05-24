import { TodoDataFormat } from "./TodoData";


export class TodoListTable {
    namespace: string;
    constructor(namespace: string) {
        this.namespace = namespace;
        // 名前空間の下のlocalStorageに保存する。
    }

    save(todolist: Array<TodoDataFormat>) {
        const jsonData = JSON.stringify(todolist);
        localStorage.setItem(this.namespace, jsonData);
        return;
    }

    load(): Array<TodoDataFormat> {
        const jsonData = localStorage.getItem(this.namespace);
        if (jsonData == null)
            return [];
        return JSON.parse(jsonData);
    }
}