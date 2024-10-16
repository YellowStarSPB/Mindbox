import { memo } from 'react';
import { useAppDispatch } from '../../../../store/store-hooks';
import { toggleCompleted } from '../../model/todoSlice';
import { TodoItemType } from '../../types';
import styles from './TodoItem.module.scss';

type TodoItemProps = {
    todo: TodoItemType;
};

const TodoItem = memo(
    ({ todo }: TodoItemProps) => {
        const dispatch = useAppDispatch();

        const handleChangeStatus = () => {
            dispatch(toggleCompleted(todo.id));
        };

        return (
            <div
                className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
            >
                <label className={styles.completedButton}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleChangeStatus}
                    />
                    <span className={styles.customCheckbox}></span>
                </label>
                <p className={styles.todoValue}>{todo.value}</p>
            </div>
        );
    },
    (prevProps, nextProps) => {
        console.log(prevProps, nextProps);
        // Сравниваем только поле completed для предотвращения лишних перерисовок
        return prevProps.todo.completed === nextProps.todo.completed;
    },
);

export default TodoItem;
