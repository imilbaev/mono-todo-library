/**
 * @class TodoComponent
 */
import React, { KeyboardEvent, createRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";

/**
 * TodoContainer
 */
export class TodoContainer extends React.Component {
  state = {
    items: [{ todo: "Todo todo", done: false }, { todo: "Todo #2", done: true }]
  };
  inputRef = createRef<HTMLInputElement>();

  onKeyDown = ({ key }: KeyboardEvent): void => {
    if (key === "Enter" && this.inputRef.current) {
      const value = this.inputRef.current.value;
      this.setState({
        items: [...this.state.items, { todo: value, done: false }]
      });
      this.inputRef.current.value = "";
    }
  };

  onToggle = (todoId: number, done: boolean): void => {
    const prevItems = [...this.state.items];
    prevItems[todoId].done = done;

    this.setState({
      items: prevItems
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path={`/todos/:todoId`}
            render={props => (
              <TodoDetails {...props} items={this.state.items} />
            )}
          />
          <Route exact path="/">
            <TodoList items={this.state.items} onToggle={this.onToggle} />
            <input type="text" onKeyDown={this.onKeyDown} ref={this.inputRef} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
