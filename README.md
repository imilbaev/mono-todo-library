# mono-todo-library

> Example of lerna monorepo with react and typescript

## Install

```bash
git clone https://github.com/imilbaev/mono-todo-library.git
lerna bootstrap --hoist
```

## Run

```bash
lerna run start --parallel
```

## Usage

```tsx
import React from "react";
import { TodoContainer } from "todo-library";

export class App extends React.Component {
  render() {
    return <TodoContainer />;
  }
}
```

## License

MIT © [imilbaev](https://github.com/imilbaev)
