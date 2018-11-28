- What is a state tree in the context of Redux?

**Everything** that changes in your application, including the **data** and the **UI state**, is contained in a **single object**, we call the state or the `state tree`.

- Why don't we want to modify (i.e. mutate) our redux state?

state tree is **read only**. You cannot modify or write to it. Instead, anytime you want to change the state, you need to **dispatch an action**.

An action is a plain JavaScript object describing the change. Just like the state is the minimal representation of the data in your app, the action is the minimal representation of the change to that data.

- What is a pure function? Impure function?

The pure functions are the functions whose returned value depends solely on the values of their arguments. Pure functions do not have any observable side effects, such as network or database calls. Pure functions do not modify the values passed to them. 

Impure functions may call the database or the network, they may have side effects, they may operate on the DOM, and they may override the values that you pass to them.

- Describe in detail what a redux reducer is. What makes it a pure function?

To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called the Reducer.

Inside any Redux application, there is one particular function that takes the state of the whole application and the action being dispatched and returns the next state of the whole application. It is important that it does not modify the state given to it. It has to be pure, so it has to return a new object.



- What is the role of the store in Redux?
- What does the `subscribe` method do in Redux?