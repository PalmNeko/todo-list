

export interface TodoDataFormat {
    title?: string;
}

export class TodoData {
    title: string;
    
    constructor(param: TodoDataFormat) {
        this.title = param.title ?? '無名のタイトル';
    }
}