1. What problem does the context API help solve?

  The context API helps solve the issue of sharing state with nested components, because it allows components at arbitrary levels to read from state defined higher up without prop-drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are JSON objects defining a type of change in the application state. Reducers are functions that take state and actions and apply the action to the state, returning the new state. The store is a redux object that globally carries application state, allowing components to hook into it and retrieve state without prop drilling, similar to a Context.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is essentially global while component state is local. All components should be able to access application state if necessary (for instance, a color theme), but component state should be specific to an instance of a component (such as a form field).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  redux-thunk lets us intersect our action creator with asynchronous features. Based on certain factors, it can be used to decide what to do in case of failure to retrieve data, or while waiting on data, etc.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  Redux feels like the most versatile, although comes with some memorization-heavy overhead. A simple Context with production and consumption might be better for me, but I would need more experience with both to decide.
