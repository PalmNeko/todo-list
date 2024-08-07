import { useRef } from "react";
import { TodoDataFormat } from "../model/TodoData";
import { Card } from "./Card";


export default function TodoCard({ todo, updateTitle, deleteTodo, appendEmptyTodo }: {
    todo: TodoDataFormat,
    updateTitle: (event: React.ChangeEvent<HTMLInputElement>) => void,
    deleteTodo: () => void,
    appendEmptyTodo: () => void,
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const deleteButtonRef = useRef<HTMLButtonElement>(null);
    const todoRef = useRef<HTMLDivElement>(null);
    const focusInputField = () => {
        inputRef?.current?.focus();
    }
    const focusNextTodo = () => {
        const nextTodo = todoRef?.current?.nextElementSibling;
        if (!nextTodo) {
            return false;
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
    const focusInputButton = () => {
        inputRef?.current?.focus();
    }
    const focusDeleteButton = () => {
        deleteButtonRef?.current?.focus();
    }
    const runDeleteButton = () => {
        focusPreviousTodo();
        deleteTodo();
    }
    const handleKeyDown = (event: React.KeyboardEvent) => {
        event.stopPropagation();
        if (event.key == 'Enter') {
            if (event.shiftKey)
                focusPreviousTodo();
            else
                if (focusNextTodo() == false) {
                    appendEmptyTodo();
                    setTimeout(focusNextTodo, 0);
                }
        }
        if (event.key == 'ArrowDown')
            focusNextTodo();
        else if (event.key == 'ArrowUp')
            focusPreviousTodo();
        else if (event.key == 'ArrowRight')
            focusDeleteButton();
        else if (event.key == 'ArrowLeft')
            focusInputButton();
        if (event.code == "Delete")
            runDeleteButton();
    }
    const handleDeleteButtonKeydown = (event: React.KeyboardEvent) => {
        event.stopPropagation();
        if (['Enter', 'Space'].includes(event.key)) {
            runDeleteButton();
        }
    }
    return (
        <div className="todo-card-container" onClick={focusInputField} ref={todoRef} onKeyDown={(event) => handleKeyDown(event)}>
            <Card>
                <div className="todo-card-content">
                    <input className="todo-title" ref={inputRef}
                        type="text" value={todo.title || ''} onChange={updateTitle} />
                    <button className="todo-delete-button"
                        ref={deleteButtonRef}
                        onKeyDown={handleDeleteButtonKeydown}
                        onClick={() => runDeleteButton()}>
                        削除
                    </button>
                </div>
            </Card>
        </div>
    )
}