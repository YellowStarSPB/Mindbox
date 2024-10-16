import { useCallback, useState } from 'react';
import AddTodo from '../../../addTodo/ui/AddTodo/AddTodo';
import TodoItem from '../../../../entities/todo/ui/TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { useAppSelector } from '../../../../store/store-hooks';
import { filteredTodos } from '../../model/todoListSelectors';
import { filterSelector } from '../../../controlPanel/model/controlPanelSelectors';

function TodoList() {
    const [hideTodoList, setHideTodoList] = useState<boolean>(false);
    const currentFilter = useAppSelector(filterSelector);
    const todos = useAppSelector((state) => filteredTodos(state, currentFilter));

    const handleHideList = useCallback(() => {
        setHideTodoList((prev) => !prev);
    }, []);

    return (
        <>
            <AddTodo handleHideList={handleHideList} hideTodoList={hideTodoList} />
            <div className={`${styles.todoList} ${hideTodoList ? styles.hide : ''}`}>
                {todos.length > 0 ? todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                )): <p className={styles.todoListEmpty}>Тут пусто :3</p>}
                
            </div>
        </>
    );
}

export default TodoList;
