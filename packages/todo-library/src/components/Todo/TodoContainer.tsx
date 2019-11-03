/**
 * @class TodoComponent
 */
import React, {KeyboardEvent, createRef} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";

export class TodoContainer extends React.Component {
	state = {
		items: [{ todo: "Todo todo", done: false }, { todo: "Todo #2", done: true }]
	};
	inputRef = createRef<HTMLInputElement>();

	onKeyDown = ({key}: KeyboardEvent) => {
		if (key === 'Enter' && this.inputRef.current) {
				const value = this.inputRef.current.value;
				this.setState({
					items: [...this.state.items, {todo: value, done: false}]
				});
				this.inputRef.current.value = "";
		}
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path={`/todos/:todoId`} children={TodoDetails} />
					<Route exact path="/">
						<TodoList items={this.state.items} />
						<input type="text" onKeyDown={this.onKeyDown} ref={this.inputRef} />
					</Route>
				</Switch>
			</Router>
		);
	}
}