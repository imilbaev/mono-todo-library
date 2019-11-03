/**
 * @class TodoComponent
 */
import React from "react";
export declare class TodoContainer extends React.Component {
    state: {
        items: {
            todo: string;
            done: boolean;
        }[];
    };
    inputRef: React.RefObject<HTMLInputElement>;
    onKeyDown: ({ key }: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
}
