# DistroState Class Documentation

The `DistroState` class is designed to manage distributed state across components using bound setter and getter methods. This document describes the properties, constructor, and methods of the `DistoState` class.

## Properties

- `shared`: Object that stores the state shared between all registered bindings.
- `states`: Object that stores all bindings managing the shared state.

## Constructor

### `constructor(shared, states)`

Initializes a new instance of the `DistoState` class.

**Parameters:**

- `shared` (Object): Optional. An object containing initial shared state. Each property of this object should correspond to a state key.
- `states` (Object): Optional. An object containing initial state bindings. Should not typically be provided directly by users, as it is managed internally.

**Returns:**

- `DistoState`: A new instance of the `DistoState` class.

## Instance Methods

### `register(id, [get, set])`

Binds setter/getter methods to shared state using a given ID.

**Parameters:**

- `id` (String): The unique identifier for the state to bind.
- `[get, set]` (Array): An array containing two elements:
  - `get`: A function that returns the current state value or a static value representing the state.
  - `set`: A function that accepts a new state value and updates the component's local state.

**Returns:**

- `this`: The `DistoState` instance, to allow for method chaining.

### `unregister(id)`

Removes setter/getter methods by the bound ID. Does not mutate the shared state.

**Parameters:**

- `id` (String): The unique identifier for the state to unbind.

**Returns:**

- `this`: The `DistoState` instance, to allow for method chaining.

### `set(id, value)`

Sets the value of a bound setter. This method also updates the shared state.

**Parameters:**

- `id` (String): The unique identifier for the state to update.
- `value` (*): The new value to set for the specified state.

**Returns:**

- `this`: The `DistoState` instance, to allow for method chaining.

### `get(id)`

Returns the value of a bound getter.

**Parameters:**

- `id` (String): The unique identifier for the state to retrieve.

**Returns:**

- `*|void`: The current value of the state. Returns `void` if no state is found for the provided ID.

## Static Methods

### `static init(shared, states)`

Static factory method to create a new instance of `DistoState` with optional shared and states parameters.

**Parameters:**

- `shared` (Object): Optional. An object containing initial shared state.
- `states` (Object): Optional. An object containing initial state bindings.

**Returns:**

- `DistoState`: A new instance of the `DistoState` class.
