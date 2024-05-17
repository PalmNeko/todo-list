import { TodoList } from "./TodoListData";
export class TodoTable {
    constructor(namespace) {
        // 名前空間の下のlocalStorageに保存する。
    }
    save(todolist) {
    }
    load() {
        return new TodoList();
    }
}
