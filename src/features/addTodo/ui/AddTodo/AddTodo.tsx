import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch } from '../../../../store/store-hooks';
import { addTodo } from '../../../../entities/todo/model/todoSlice';

import { AddTodoProps } from '../../types';
import { TodoItemType } from '../../../../entities/todo/types';

import styles from './AddTodo.module.scss';

function AddTodo({ handleHideList, hideTodoList }: AddTodoProps) {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<string>('');
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const handleAddTodo = (
        e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
    ) => {
        if (value.length < 1) {
            setIsEmpty(true);
            return;
        } else {
            setIsEmpty(false);
        }
        const prepearedItem: TodoItemType = {
            value,
            id: uuidv4(),
            completed: false,
        };
        if ('key' in e) {
            if (e.key === 'Enter') {
                dispatch(addTodo(prepearedItem));
                setValue('');
                return;
            }
        } else {
            dispatch(addTodo(prepearedItem));
            setValue('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value.length > 0) {
            setIsEmpty(false);
        }
        setValue(e.target.value);
    };

    return (
        <div className={styles.addTodo}>
            <button
                onClick={handleHideList}
                className={`${styles.showButton} ${hideTodoList ? styles.hide : ''}`}
            ></button>
            <label className={styles.label}>
                <input
                    className={`${styles.input} ${isEmpty ? styles.error : ''}`}
                    value={value}
                    onChange={handleChange}
                    type="text"
                    onKeyDown={handleAddTodo}
                    placeholder="What needs to be done?"
                />
            </label>
            <button
                onClick={handleAddTodo}
                className={`${styles.addTodoButton} ${
                    value.length > 0 ? styles.showBtn : ''
                }`}
            >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        transform="matrix(.43 0 0 .43 1.25 1.25)"
                        d="M43 2H25c-2.758 0-5 2.242-5 5v13H7c-2.758 0-5 2.242-5 5v18c0 2.758 2.242 5 5 5h36c2.758 0 5-2.242 5-5V7c0-2.758-2.242-5-5-5Zm-8 26c0 3.86-3.14 7-7 7H13.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L13.414 33H28c2.758 0 5-2.242 5-5V16a1 1 0 1 1 2 0Z"
                    />
                </svg>
            </button>
        </div>
    );
}

export default AddTodo;
