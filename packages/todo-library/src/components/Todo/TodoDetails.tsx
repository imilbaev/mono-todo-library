/**
 * @class TodoDetails
 */

import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type TParams = { todoId: string };

/** My First component */
export function TodoDetails({ match }: RouteComponentProps<TParams>) {
	return (
		<div>
			<h3>ID is {match.params.todoId}</h3>
			<Link to="/">Back</Link>
		</div>
	);
}
