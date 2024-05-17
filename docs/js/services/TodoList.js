export class TodoList {
    constructor(queryOrElement) {
        const todoListElement = (() => {
            if (typeof queryOrElement == 'string')
                return document.querySelector(queryOrElement);
            else
                return queryOrElement;
        })();
        if (todoListElement == null)
            return;
    }
}
