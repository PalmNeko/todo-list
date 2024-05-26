
import { TodoListTable } from '../model/TodoListTable';
import TodoList from './TodoList';

function TodoApp() {
    const todolist = [
        { title: '勉強' },
        { title: 'スポーツ' }
    ];
    const table = new TodoListTable('todo-list');
    const todo = table.load();
    return (
        <div>
            <TodoList title="TodoListのタイトル" todolist={todo} />
        </div>
    )
}

export default TodoApp
