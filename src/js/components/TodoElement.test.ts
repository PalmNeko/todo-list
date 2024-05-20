import { AssumptionError } from "../jest/AssumptionError";
import { TodoData } from "../model/TodoData";
import { parameters } from "../parameters";
import { TodoElement } from "./TodoElement";

describe('UnitTest: TodoElement', () => {

    describe('onCreate', () => {
        const onCreateConfig = parameters.HTMLElements.TodoData.onCreate;
        const undefinedErrorMessage = 'must not be undefined.';
        const todoElement = new TodoElement(new TodoData()).render();

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
