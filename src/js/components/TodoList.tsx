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
    const handleTodoListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter')
            appendEmptyTodo();
    }
    useEffect(() => saveTodo(todo), [saveTodo, todo]);
    return (
        <div className="todo-list" tabIndex={0} onKeyDown={handleTodoListKeyDown}>
            <h1>{title}</h1>
            <TodoListView
                todolist={todo}
                appendEmptyTodo={appendEmptyTodo}
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