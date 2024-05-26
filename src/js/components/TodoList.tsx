import { TodoDataFormat } from "../model/TodoData";
import AddButton from "./AddButton";
import TodoListView from "./TodoListViewer";


export default function TodoList({ title, todolist }: {
    title: string,
    todolist: TodoDataFormat[]
}) {
    return (
        <div className="bg-red-100">
            <h1>{title}</h1>
            <TodoListView todolist={todolist}></TodoListView>
            <div>
                <div className="w-fit mx-auto">
                    <AddButton></AddButton>
                </div>
            </div>

        </div>
    );
}