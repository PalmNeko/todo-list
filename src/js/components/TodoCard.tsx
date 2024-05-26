import { TodoDataFormat } from "../model/TodoData";
import { Card } from "./Card";


export default function TodoCard({ todo }: {
    todo: TodoDataFormat
}) {
    return <div>
        <Card>
            <div>{todo.title}</div>
        </Card>
    </div>
}