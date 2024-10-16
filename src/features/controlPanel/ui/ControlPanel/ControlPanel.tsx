import { useAppDispatch, useAppSelector } from '../../../../store/store-hooks';
import { countTodosSelector } from '../../../../entities/todo/model/todoSelectors';
import { clearCompleted, setFilter } from '../../../../entities/todo/model/todoSlice';
import { filterSelector } from '../../model/controlPanelSelectors';

import { InitialTodoState } from '../../../../entities/todo/types';

import styles from './ControlPanel.module.scss';
import { memo } from 'react';

const ControlPanel = memo(() => {
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(filterSelector);
    const countTodos = useAppSelector(countTodosSelector);

    const handleChangeFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const filterValue = e.currentTarget.getAttribute('data-filter');
        if (filterValue) {
            dispatch(setFilter(filterValue as InitialTodoState['filter']));
        }
    };
    const handleClearCompleted = () => {
        if (countTodos > 0) {
            dispatch(clearCompleted());
        }
    };
    return (
        <div className={styles.controlPanel}>
            {countTodos > 0 && (
                <p className={styles.todoCount}>{`${countTodos} items left`}</p>
            )}
            <div className={styles.controls}>
                <button
                    onClick={handleChangeFilter}
                    data-filter="all"
                    className={`${styles.filterButton} ${
                        currentFilter === 'all' ? styles.active : ''
                    }`}
                >
                    All
                </button>
                <button
                    onClick={handleChangeFilter}
                    data-filter="active"
                    className={`${styles.filterButton} ${
                        currentFilter === 'active' ? styles.active : ''
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={handleChangeFilter}
                    data-filter="completed"
                    className={`${styles.filterButton} ${
                        currentFilter === 'completed' ? styles.active : ''
                    }`}
                >
                    Completed
                </button>
            </div>
            <button onClick={handleClearCompleted} className={styles.clearButton}>
                Clear completed
            </button>
        </div>
    );
});

export default ControlPanel;
