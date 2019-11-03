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
    render(): JSX.Element;
}
