import React from 'react';
import { ITodoItem } from '../../model/index';

interface TodoListProps {
    todos: ITodoItem[],
    toggleHandler: (id: number) => void;
    removeTodoItem: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleHandler, removeTodoItem}) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleHandler(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                               onClick={() => removeTodoItem(todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}