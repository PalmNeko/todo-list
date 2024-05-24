import { useState } from 'react';
import TodoList from './js/components/TodoListElement';
import { TodoListTable } from './js/model/TodoListTable';
import './style.css';
function App() {

  const table = new TodoListTable('todo-list');
  const [todoDatas, setTodoDatas] = useState(table.load());

  const appendButton = () =>
    setTodoDatas([...todoDatas, {}]);

  return (
    <div>
      <button onClick={appendButton}>＋</button>
      <TodoList todoDatas={todoDatas}></TodoList>
    </div>
  )
}

export default App
