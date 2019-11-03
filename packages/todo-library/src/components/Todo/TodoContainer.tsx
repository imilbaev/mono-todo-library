/**
 * @class TodoComponent
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";

export class TodoContainer extends React.Component {
	state = {
		items: [{ todo: "Todo todo", done: false }, { todo: "Todo #2", done: true }]
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route path={`/todos/:todoId`} children={TodoDetails} />
					<Route exact path="/">
						<TodoList items={this.state.items} />
						<input type="text" name="add" />
						<button type="button">
							Добавить
						</button>
					</Route>
				</Switch>
			</Router>
		);
	}
}