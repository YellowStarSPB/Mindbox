export type InitialTodoState = {
    todos: TodoItemType[];
    filter: 'all' | 'active' | 'completed';
};

export type TodoItemType = {
    value: string;
    id: string;
    completed: boolean;
};
