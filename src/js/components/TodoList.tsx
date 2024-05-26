import { useEffect, useState } from "react";
import { TodoDataFormat } from "../model/TodoData";
import { TodoListTable } from "../model/TodoListTable";
import TodoListView from "./TodoListViewer";


export default function TodoList({ title, todolist, saveTodo }: {
    title: string,
    todolist: TodoDataFormat[],
    saveTodo: InstanceType<typeof TodoListTable>['save']
}) {
    const [todo, setTodo] = useState(todolist);
    const appendEmptyTodo = () => {
        setTodo([...todo, {}]);
    }
    useEffect(() => saveTodo(todo), [saveTodo, todo]);
    return (
        <div className="bg-red-100">
            <h1>{title}</h1>
            <TodoListView
                todolist={todo}
                setTodo={(todo: TodoDataFormat[]) => setTodo(todo)}
            />
            <div>
                <div className="w-fit mx-auto">
                    <button className="bg-gray-100" onClick={appendEmptyTodo}>＋</button>
                </div>
            </div>

        </div>
    );
}