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
                <input className="bg-inherit"
                    type="text" value={todo.title} onChange={updateTitle} />
                <button className="text-right"
                    onClick={deleteTodo}>
                    削除
                </button>
            </Card>
        </div>
    )
}