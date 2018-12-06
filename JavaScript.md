
- [x] What are the benefits of a Javascript closure?

`Closure` allows a function to access variables from an enclosing scope — **environment** — even after it leaves the scope in which it was declared.

One of the main benefits of closures is that it allows **data encapsulation**. 

- [x] Formally define a Javascript closure

A closure is the combination of a function and the lexical environment from which it was declared.

- [x] Give an example of a closure
- [x] What is **data encapsulation**?

Some data should not be directly exposed.

- [x] What is the difference between the memory heap and call stack in javascript?

Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory. Memory heap is where memory allocation happens.

Function calls form a stack of frames. Call Stack is a data structure which record where in the programme we are. If we step into a function, it will be put into the call stack. If we return a function, we pop off the top of the stack.

Queue: 

- [x] What is one problem with programming languages that are fully single-threaded

A downside of this model is that if a message takes too long to complete, the web application is unable to process user interactions like click or scroll. 

Don't block the event loop means don't put useless slow code on the stack


- [x] Is Javascript a single-threaded language? Explain (Hint: This may not be a yes or no question)

Yes because single thread language, single callback, do one thing at a time.
The runtime can only do one thing at a time. 
No but The brownser of not only just the runtime so we can do things concurrently. We can put WebAPI callbacks in the event queue process it until the stack is empty.

- [x] When is using an IIFE necessary? 

An IIFE(Immediate Invoked Function Expression) is a function expression that is called immediately after you define it. It is usually used when you want to create a new variable scope.

- [x] What is the syntax for an IIFE?

The **(surrounding parenthesis)** prevents from treating it as a function declaration.

The **final parenthesis()** are executing the function expression.



- In which phase does hoisting occur?

The behavior of "moving" `var` and `function` declarations to the top of the their recpective scopes during the implementation phase is called **hoisting**.

Function declarations are completely hoisted. This means that a declared function can be called before it is defined.


Variables are partially hoisted. var declarations are hoisted but not its assignments.

let and const are not hoisted.
(if you want to console.log a variable before you declare it, var will show undefined but let and const will show reference error)


- What does the `new` keyword do in Javascript?

1. Creates a new object.
2. Sets the object’s prototype to be the prototype of the constructor function.
3. Executes the constructor function with this as the newly created object.
4. Returns the created object. If the constructor returns an object, this object is returned.


- What type of function is invoked with the `new` keyword? What does this function return?

Functions invoked using the new keyword are called **constructor functions**.

- How can you stop event bubbling?

- What is event delegation?

- Discuss 4 differences between ES5 and ES6 that you find important

- What are the steps of a `try..catch` block in Javascript?
- What type of errors to `try..catch` blocks work for?
- When creating a custom error, what attributes should it have?
- What is a Priority Queue?
- Discuss the differences between `let`, `const`, and `var`. What are their respective scopings?
- What happens when you enable strict mode in javascript?
- How does the rest/spread operator work in JS?
- What problem does `bind` solve in Javascript? How does it accomplish this?
- What is the syntax for passing arguments to the `bind` function?
