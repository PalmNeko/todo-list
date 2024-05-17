

export class TodoListManager {

    constructor(queryOrElement: HTMLElement | string) {
        const todoListElement = (() => {
            if (typeof queryOrElement == 'string')
                return document.querySelector(queryOrElement);
            else
                return queryOrElement;
        })();
        if (todoListElement == null)
            return ;
        // localStorageからデータを読み込む。
        // 
    }
}