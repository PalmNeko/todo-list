
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
                classes: []
            }
        },
        TodoList: {
            onCreate: {
                tagName: 'div',
                classes: []
            }
        }
    }
};

type HTMLElementConfigType = {
    onCreate: {
        tagName?: keyof HTMLElementTagNameMap,
        classes?: string[];
    };
};
