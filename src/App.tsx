import TodoList from './js/components/TodoListElement';
import { TodoListTable } from './js/model/TodoListTable';
import './style.css';
function App() {

  const table = new TodoListTable('todo-list');
  console.log('testa');
  const todoDatas = table.load();
  if (todoDatas.length == 0) {
    table.save([
      { title: 'test' },
      { title: 'test1' },
      { title: 'test2' },
    ]);
  }
  return (
    <div>
      <TodoList todoDatas={todoDatas}></TodoList>
    </div>
  )
}

export default App
