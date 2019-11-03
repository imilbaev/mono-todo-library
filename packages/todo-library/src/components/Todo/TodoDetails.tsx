/**
 * @class TodoDetails
 */

import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { TodoItem } from "./TodoList";

interface RouterParams {
  todoId: string;
}

interface TodoDetailsProps extends RouteComponentProps<RouterParams> {
  items: TodoItem[];
}

/**
 * TodoDetails component example
 */
export function TodoDetails({ match, items }: TodoDetailsProps) {
  const todoId = match.params.todoId;
  const { todo, done } = items[todoId];
  return (
    <div>
      <h3>ToDo: {todo}</h3>
      <p>Status: {done ? "done" : "not done yet"}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
