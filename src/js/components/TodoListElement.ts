import { TodoData } from "../model/TodoData";


export class TodoListElement {
    
    constructor(list: Array<TodoData>) {

    }

    render(): HTMLElement {
        return document.createElement('div');
    }
}
