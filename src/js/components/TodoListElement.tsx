import { TodoDataFormat } from "../model/TodoData";
import TodoCard from "./TodoCard";


export default function TodoList(props: { todoDatas: Array<TodoDataFormat> }) {
    return (
        <div className="bg-green-400 w-100 h-28">
            {
                props.todoDatas.map((todo) => {
                    return <TodoCard {...todo}></TodoCard>
                })
            }
        </div>
    )
}
