import TodoApp from './js/components/TodoApp';
import './style.css';

function App() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div ><p>left side bar</p></div>
        <TodoApp></TodoApp>
        <div><p>right side bar</p></div>
      </div>
    </div>
  )
}

export default App
