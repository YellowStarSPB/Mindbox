import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialTodoState, TodoItemType } from '../types';

const initialState: InitialTodoState = {
    todos: [],
    filter: 'all',
};

export const todoSlice = createSlice({
    name: '@@todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoItemType>) => {
            state.todos.push(action.payload);
        },
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setFilter: (state, action: PayloadAction<InitialTodoState['filter']>) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            const newTodosState = state.todos.filter((todo) => todo.completed !== true);

            state.todos = newTodosState;
        },
    },
});

export const { addTodo, toggleCompleted, setFilter,clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
