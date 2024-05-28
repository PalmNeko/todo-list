import { useEffect, useState } from "react";
import { TodoDataFormat } from "../model/TodoData";
import { TodoListTable } from "../model/TodoListTable";
import './Component.css';
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
        <div className="todo-list">
            <h1>{title}</h1>
            <TodoListView
                todolist={todo}
                setTodo={(todo: TodoDataFormat[]) => setTodo(todo)}
            />
            <div>
                <div>
                    <button className="todo-add-button" onClick={appendEmptyTodo}>＋</button>
                </div>
            </div>

        </div>
    );
}