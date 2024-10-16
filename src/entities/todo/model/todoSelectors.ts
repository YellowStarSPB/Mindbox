import { RootState } from '../../../store/store';

export const countTodosSelector = (state: RootState): number => {
    const filteredItems = state.todo.todos.filter((filter) => filter.completed !== true);
    return filteredItems.length;
};
