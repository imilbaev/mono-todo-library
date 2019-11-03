/**
 * @class TodoList
 */
import React from "react";
import "./TodoList.css";
export interface TodoItem {
    done: boolean;
    todo: string;
}
interface TodoListProps {
    items: TodoItem[];
}
/**
 * TodoList component
 */
export declare class TodoList extends React.Component<TodoListProps> {
    render(): JSX.Element;
}
export {};
