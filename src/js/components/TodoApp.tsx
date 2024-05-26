
import TodoList from './TodoList';

function TodoApp() {
    const todolist = [
        { title: '勉強' },
        { title: 'スポーツ' }
    ];
    return (
        <div>
            <TodoList title="TodoListのタイトル" todolist={todolist}>
            </TodoList>
        </div>
    )
}

export default TodoApp
