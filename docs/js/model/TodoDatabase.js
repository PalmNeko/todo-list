import { TodoList } from "./TodoList";
export class TodoDatabase {
    constructor(namespace) {
        // 名前空間の下のlocalStorageに保存する。
    }
    save(todolist) {
    }
    load() {
        return new TodoList();
    }
}
