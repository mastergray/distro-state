
# distro-state

`distro-state` is a JavaScript and React utility designed to manage distributed state across components using bound setter and getter methods. It enables the synchronization of state values across different parts of your application, ensuring consistency and reactivity.

## Features

- **State Management**: Manages state shared across multiple bindings.
- **Dynamic Binding**: Dynamically binds and unbinds getter and setter methods to state properties.
- **React Integration**: Includes a React context and hooks for easy integration with React components.
- **Flexibility**: Allows for independent state management within a React application without relying on external state management libraries.

## DistroState Class

### Initialization

```javascript
const distroState = new DistroState(shared, states);
```

- `shared`: Object (optional) - Initial shared state values.
- `states`: Object (optional) - Initial state handlers.

#### Methods

- **register(id, [get, set])**: Binds setter and getter methods to a shared state using the given ID.
- **unregister(id)**: Removes setter and getter methods by the bound ID.
- **set(id, value)**: Sets the value of the bound state.
- **get(id)**: Returns the value of the bound state.

## React Components and Hooks

### DistroStateProvider

Wrap your application or component tree with `DistroStateProvider` to provide the DistroState context.

```jsx
import DistroStateProvider from './path/to/DistroStateProvider';

function App() {
  const initialState = { key: 'value' };

  return (
    <DistroStateProvider state={initialState}>
      <YourComponent />
    </DistroStateProvider>
  );
}
```

### useDistroState

A hook to access the shared DistroState instance.

```jsx
import { useDistroState } from './path/to/hooks';

function Component() {
  const distroState = useDistroState();
  const value = distroState.get('key');
  
  // use distroState as needed
}
```

### useDistroStateRegistry

Manage registration and unregistration of state handlers for specific state IDs.

```jsx
import { useDistroStateRegistry } from './path/to/hooks';

function ComponentWithState({ id }) {
  const distroState = useDistroStateRegistry(id);

  // use distroState and its methods as needed
}
```
