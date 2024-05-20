import { TodoData } from "./TodoData";


export class TodoListTable {
    namespace: string;
    constructor(namespace: string) {
        this.namespace = namespace;
        // 名前空間の下のlocalStorageに保存する。
    }

    save(todolist: Array<TodoData>) {

    }

    load(): Array<TodoData> {
        return new Array<TodoData>();
    }
}