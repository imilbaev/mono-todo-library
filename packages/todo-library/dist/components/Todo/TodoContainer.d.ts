/**
 * @class TodoComponent
 */
import React from "react";
/**
 * TodoContainer
 */
export declare class TodoContainer extends React.Component {
    state: {
        items: {
            todo: string;
            done: boolean;
        }[];
    };
    inputRef: React.RefObject<HTMLInputElement>;
    onKeyDown: ({ key }: React.KeyboardEvent<Element>) => void;
    onToggle: (todoId: number, done: boolean) => void;
    render(): JSX.Element;
}
