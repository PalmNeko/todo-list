import { AssumptionError } from "../jest/AssumptionError";
import { parameters } from "../parameters";
import { TodoListElement } from "./TodoListElement";

describe('UnitTest: TodoListElement', () => {

    describe('onCreate', () => {
        const onCreateConfig = parameters.HTMLElements.TodoList.onCreate;
        const undefinedErrorMessage = 'must not be undefined.';
        const todoElement = new TodoListElement([]).render();

        test('classes must be equal to parameters classes.', () => {
            const classes = onCreateConfig.classes;
            const todoClasses = todoElement.classList.values();
            AssumptionError.assertDefined(classes, undefinedErrorMessage);
            expect(new Set(todoClasses)).toEqual(new Set(classes));
        });

        test('tagName must be equal parameters tagname.', () => {
            const tagName = onCreateConfig.tagName;
            AssumptionError.assertDefined(tagName, undefinedErrorMessage);
            expect(todoElement.tagName.toUpperCase()).toBe(tagName.toUpperCase());
        })
    });
});
