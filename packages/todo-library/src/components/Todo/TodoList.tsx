/**
 * @class TodoList
 */

import React from "react";
import { Link } from "react-router-dom";

import "./TodoList.css";

export interface TodoItem {
  done: boolean;
  todo: string;
}

interface TodoListProps {
  items: TodoItem[];
  onToggle: Function;
}

/**
 * TodoList component
 */
export class TodoList extends React.Component<TodoListProps> {
  render() {
    const { items, onToggle } = this.props;

    return (
      <ul>
        {items.map(({ todo, done }: TodoItem, id: number) => {
          return (
            <li className={done ? "done" : ""} key={id}>
              <input
                name="isDone"
                type="checkbox"
                checked={done}
                onChange={() => onToggle(id, !done)}
              />
              <Link to={`/todos/${id}`}>{todo}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
