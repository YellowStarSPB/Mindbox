import { InitialTodoState } from '../../../entities/todo/types';
import { RootState } from '../../../store/store';

export const filterSelector = (state: RootState): InitialTodoState['filter'] => {
    return state.todo.filter;
};
