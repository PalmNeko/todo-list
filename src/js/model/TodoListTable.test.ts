
import { expect, test } from '@jest/globals';
import { TodoListTable } from './TodoListTable';

// jest.mock('localStorage')
describe('UnitTest: TodoListTable', () => {
    const todoListData = [
        { title: 'test' },
        { title: 'save' },
    ];

    test('can create.', () => {
        const table = new TodoListTable('sample');
        expect(table).not.toBeNaN();
        expect(table.namespace).toBe('sample');
    });

    describe.skip('save method', () => {
        test('must save according to format.', () => {
            const table = new TodoListTable('sample');
            const jsonTodoList = JSON.stringify(todoListData);
            table.save(todoListData);
            const data = localStorage.getItem('sample');
            expect(data).not.toBeNull();
            if (data == null)
                return;
            expect(data).toBe(jsonTodoList);
        });
    });

    describe.skip('load method', () => {
        test('can load todo.', () => {
            const table = new TodoListTable('sample');
            table.save(todoListData);
            const data = table.load();
            expect(data).toEqual(todoListData);
        });
    });

})
