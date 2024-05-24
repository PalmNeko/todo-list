import { TodoData } from "../model/TodoData";


export default function TodoCard(props: { title?: string }) {
    const todo = new TodoData(props);
    return <>
        <div className="w-1/2 h-1/3 mx-auto rounded overflow-hidden shadow-lg">{todo.title}</div>
    </>
}
