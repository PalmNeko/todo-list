
import { TodoData } from './TodoData'

describe('UnitTest: TodoData', () => {
    test('can create.', () => {
        expect(new TodoData({})).not.toBeNaN();
        expect(new TodoData()).not.toBeNaN();
    });

    describe('initialize instance', () => {
        test('can set default title.', () => {
            const title = '無名のタイトル';
            expect(new TodoData().title).toBe(title);
        });

        test('can set title', () => {
            const title = 'your original todo';
            let todo;
            todo = new TodoData({ title: title });
            expect(todo.title).toBe(title);
            todo = new TodoData({ title: '' });
            expect(todo.title).toBe('');
        });
    });
})
