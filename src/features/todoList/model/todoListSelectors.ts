import { InitialTodoState } from '../../../entities/todo/types';
import { RootState } from '../../../store/store';

export const filteredTodos = (state: RootState, filter: InitialTodoState['filter']) => {
    const todos = state.todo.todos;

    if (filter === 'all') {
        console.log(1)
        return todos;
    }
    return todos.filter((todo) => {
        if (filter === 'active') {
            return !todo.completed;
        }
        if (filter === 'completed') {
            return todo.completed;
        }
        return todos;
    });
};
