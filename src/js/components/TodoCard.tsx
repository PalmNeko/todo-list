import { KeyboardEventHandler, useRef } from "react";
import { TodoDataFormat } from "../model/TodoData";
import { Card } from "./Card";


export default function TodoCard({ todo, updateTitle, deleteTodo }: {
    todo: TodoDataFormat,
    updateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    deleteTodo: () => void
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInputField = () => {
        inputRef?.current?.focus();
    }
    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.code == "Delete")
            deleteTodo();
    }
    return (
        <div className="todo-card-container" onClick={focusInputField} onKeyDown={onKeyDown}>
            <Card>
                <div className="todo-card-content">
                    <input className="todo-title" ref={inputRef}
                        type="text" value={todo.title} onChange={updateTitle} />
                    <button className="todo-delete-button"
                        onClick={deleteTodo}>
                        削除
                    </button>
                </div>
            </Card>
        </div>
    )
}