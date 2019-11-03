/**
 * @class TodoDetails
 */
/// <reference types="react" />
import { RouteComponentProps } from "react-router-dom";
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
export declare function TodoDetails({ match, items }: TodoDetailsProps): JSX.Element;
export {};
