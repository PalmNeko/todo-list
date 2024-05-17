import { TodoData } from "./TodoData";


export class TodoTable {
    constructor(namespace: string) {
        // 名前空間の下のlocalStorageに保存する。
    }

    save(todolist: Array<TodoData>) {

    }

    load(): Array<TodoData> {
        return new Array<TodoData>();
    }
}