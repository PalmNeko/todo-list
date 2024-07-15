import { useRef } from "react";
import { TodoDataFormat } from "../model/TodoData";
import { Card } from "./Card";


export default function TodoCard({ todo, updateTitle, deleteTodo }: {
    todo: TodoDataFormat,
    updateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    deleteTodo: () => void
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const todoRef = useRef<HTMLDivElement>(null);
    const focusInputField = () => {
        inputRef?.current?.focus();
    }
    const focusNextTodo = () => {
        const nextTodo = todoRef?.current?.nextElementSibling;
        if (!nextTodo) {
            return;
        }
        if (nextTodo instanceof HTMLElement)
            nextTodo.click();
    }
    const focusPreviousTodo = () => {
        const previousTodo = todoRef?.current?.previousElementSibling;
        if (!previousTodo) {
            const firstChild = todoRef?.current?.parentNode?.firstElementChild;
            if (firstChild instanceof HTMLElement)
                firstChild.click();
            return;
        }
        if (previousTodo instanceof HTMLElement)
            previousTodo.click();
    }
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            if (event.shiftKey)
                focusPreviousTodo();
            else
                focusNextTodo();
        }
        if (event.code == "Delete") {
            focusPreviousTodo();
            deleteTodo();
        }
    }
    const handleDeleteButtonKeydown = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            focusPreviousTodo();
            deleteTodo();
        }
    }
    return (
        <div className="todo-card-container" onClick={focusInputField} ref={todoRef} onKeyDownCapture={(event) => handleKeyDown(event)}>
            <Card>
                <div className="todo-card-content">
                    <input className="todo-title" ref={inputRef}
                        type="text" value={todo.title || ''} onChange={updateTitle} />
                    <button className="todo-delete-button"
                        onKeyDown={handleDeleteButtonKeydown}
                        onClickCapture={() => deleteTodo()}>
                        削除
                    </button>
                </div>
            </Card>
        </div>
    )
}