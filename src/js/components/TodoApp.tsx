
import { TodoListTable } from '../model/TodoListTable';
import "./Component.css";
import TodoList from './TodoList';

function TodoApp() {
    const table = new TodoListTable('todo-list');
    const todo = table.load();
    const saveTodo = table.save.bind(table)
    return (
        <div className='todo-app'>
            <TodoList title="TodoList" todolist={todo} saveTodo={saveTodo} />
        </div>
    )
}

export default TodoApp
