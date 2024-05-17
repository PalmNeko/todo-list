import { TodoData } from "../model/TodoData";


export class TodoElement {

    constructor(todo: TodoData) {

    }

    render(): HTMLElement {
        return document.createElement('div');
    }
}
