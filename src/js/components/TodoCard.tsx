import { TodoDataFormat } from "../model/TodoData";
import { Card } from "./Card";


export default function TodoCard({ todo, updateTitle, deleteTodo }: {
    todo: TodoDataFormat,
    updateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    deleteTodo: () => void
}) {
    return (
        <div>
            <Card>
                <input type="text" value={todo.title} onChange={updateTitle} />
                <button onClick={deleteTodo}>削除</button>
            </Card>
        </div>
    )
}