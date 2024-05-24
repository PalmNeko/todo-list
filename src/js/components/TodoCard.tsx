import { TodoData } from "../model/TodoData";


export default function TodoCard(props: { title?: string }) {
    const todo = new TodoData(props);
    return <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">{todo.title}</div>
    </>
}
