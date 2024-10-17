import { InitialTodoState, TodoItemType } from '../../types';
import todoReducer, {
    addTodo,
    toggleCompleted,
    setFilter,
    clearCompleted,
} from '../todoSlice';

const initialState: InitialTodoState = {
    todos: [],
    filter: 'all',
};

describe('todoSlice', () => {
    it('should handle initial state', () => {
        expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle adding a todo', () => {
        const newTodo: TodoItemType = {
            id: '1',
            value: 'Test Todo',
            completed: false,
        };

        const expectedState = {
            ...initialState,
            todos: [newTodo],
        };

        const action = addTodo(newTodo);
        const result = todoReducer(initialState, action);
        expect(result).toEqual(expectedState);
    });

    it('should handle toggling a todo', () => {
        const initialStateWithTodo: InitialTodoState = {
            ...initialState,
            todos: [{ id: '1', value: 'Test Todo', completed: false }],
        };

        const action = toggleCompleted('1');
        const result = todoReducer(initialStateWithTodo, action);

        expect(result.todos[0].completed).toBe(true);
    });

    it('should handle setting the filter', () => {
        const action = setFilter('completed');
        const result = todoReducer(initialState, action);
        expect(result.filter).toEqual('completed');
    });

    it('should handle clearing completed todos', () => {
        const initialStateWithTodos: InitialTodoState = {
            ...initialState,
            todos: [
                { id: '1', value: 'Test Todo 1', completed: true },
                { id: '2', value: 'Test Todo 2', completed: false },
            ],
        };

        const expectedState = {
            ...initialState,
            todos: [{ id: '2', value: 'Test Todo 2', completed: false }],
        };

        const action = clearCompleted();
        const result = todoReducer(initialStateWithTodos, action);
        expect(result.todos).toEqual(expectedState.todos);
    });
});
