import { TodoDataFormat } from "../model/TodoData"
import TodoCard from "./TodoCard"


export default function TodoListView({ todolist }: {
    todolist: TodoDataFormat[]
}) {
    return <div>
        {
            todolist.map(todo => {
                return <TodoCard todo={todo}></TodoCard>
            })
        }
    </div>
}