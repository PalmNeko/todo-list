import { TodoData } from "../model/TodoData";


export class TodoElement {

    constructor(todo: TodoData) {

    }

    render(): HTMLElement {
        const element = document.createElement('div');
        return element;
    }
}
