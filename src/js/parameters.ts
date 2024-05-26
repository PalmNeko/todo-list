
type ParameterType = {
    HTMLElements: {
        TodoData: HTMLElementConfigType;
        TodoList: HTMLElementConfigType;
    };
};

export const parameters: ParameterType = {
    HTMLElements: {
        TodoData: {
            onCreate: {
                tagName: 'div',
                classNames: []
            }
        },
        TodoList: {
            onCreate: {
                tagName: 'div',
                classNames: []
            }
        }
    }
};

type HTMLElementConfigType = {
    onCreate: {
        tagName?: keyof HTMLElementTagNameMap,
        classNames?: string[];
    };
};
