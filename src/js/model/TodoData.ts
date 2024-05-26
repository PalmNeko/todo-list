

export interface TodoDataFormat {
    id?: number,
    title?: string;
}

export class TodoData {
    title: string;

    constructor(param?: TodoDataFormat) {
        if (typeof param == 'undefined')
            param = {};
        this.title = param.title ?? '無名のタイトル';
    }
}