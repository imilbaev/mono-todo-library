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
import { ExampleComponent } from "todo-library";

class Example extends React.Component {
	render() {
		return <ExampleComponent text="Test" />;
	}
}
```

## License

MIT © [imilbaev](https://github.com/imilbaev)