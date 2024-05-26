
import { TodoListTable } from '../model/TodoListTable';
import TodoList from './TodoList';

function TodoApp() {
    const table = new TodoListTable('todo-list');
    const todo = table.load();
    const saveTodo = table.save.bind(table)
    return (
        <div>
            <TodoList title="TodoListのタイトル" todolist={todo} saveTodo={saveTodo} />
        </div>
    )
}

export default TodoApp
