import { TodoDataFormat } from "../model/TodoData";
import TodoCard from "./TodoCard";


export default function TodoListView({ todolist, setTodo, appendEmptyTodo }: {
    todolist: TodoDataFormat[],
    setTodo: (todo: TodoDataFormat[]) => void,
    appendEmptyTodo: () => void,
}) {
    const setTitle = (index: number, title: string) => {
        const newTodo = [...todolist];
        newTodo[index].title = title;
        setTodo(newTodo);
    }
    const deleteTodo = (index: number) => {
        const newTodo = [...todolist];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    }
    return <div className="todo-list-view">
        {
            todolist.map((todo, index) => {
                return (
                    <TodoCard
                        key={index}
                        todo={todo}
                        updateTitle={(e) => setTitle(index, e.target.value)}
                        deleteTodo={() => deleteTodo(index)}
                        appendEmptyTodo={appendEmptyTodo}
                    />
                )
            })
        }
    </div>
}