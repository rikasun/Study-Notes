
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

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

The method for it is event.stopPropagation(). For instance, here body.onclick doesn’t work if you click on <button>:

```
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

- What is the difference between `event.target` and `event.currentTarget`?

The most deeply nested element that caused the event is called a target element, accessible as `event.target`. event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.

this (=event.currentTarget) – is the “current” element, the one that has a currently running handler on it.


- What does `stopImmediatePropagation` do?

If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.

To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

- What is event delegation?

It’s often used to add same handling for many similar elements, but not only for that.

The algorithm:

1. Put a single handler on the container.
2. In the handler – check the source element event.target.
3. If the event happened inside an element that interests us, then handle the event.


- Discuss 4 differences between ES5 and ES6 that you find important

1. Block Scope 
- Prevent Variable Hoisting Outside of Scope(var is hoisted, so reassign in the scope will not change the value in the scope)
- Prevent Duplicate Variable Declaration(you cannot use let to declare the same variable twice)
- Eliminates The Need For IIFE

2. Lexical “this” (via Arrow Functions)
Lexical “this” a feature that forces the variable “this” to always point to the object where it is physically located within.
3. Dealing With “arguments”
In ES6, we can use a new feature called “Rest” parameters. It’s represented with 3 dots and a name like …args. Rest parameters is an Array and so we can use all the Array functions.
4. Classes
5. Strict Mode

- What are the steps of a `try..catch` block in Javascript?

```javascript
try {
  // code...
} catch (err) {
  // error handling
}
```

- What type of errors to `try..catch` blocks work for?

try..catch only works for runtime errors. For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.
try..catch works synchronously. If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it:

- When creating a custom error, what attributes should it have?

We can inherit from Error and other built-in error classes normally, just need to take care of name property and don’t forget to call super.

- What's the difference between the `DOMContentLoaded` and `load` event triggers?

`DOMContentLoaded` – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may be not yet loaded.

`load` – the browser loaded all resources (images, styles etc).

- Discuss the differences between `let`, `const`, and `var`. What are their respective scopings?

An undeclared variable — assignment without var, let or const — creates a var variable in global scope.

let and const are new. They are not hoisted and block-scoped alternatives for variable declaration. This means that a pair of curly braces define a scope in which variables declared with either let or const are confined in. 
```javascript
let g1 = 'global 1'
let g2 = 'global 2'
{
  g1 = 'new global 1'
  let g2 = 'local global 2'
  console.log(g1) //'new global 1'
  console.log(g2) //'local global 2'
}

console.log(g1) // 'new glocal 1'
console.log(g2) // 'global 2'
```

`const` cannot be reassigned, but its property can be changed!

- What happens when you enable strict mode in javascript?

JavaScript is executed in strict mode by using the “use strict” directive. Strict mode tightens the rules for parsing and error handling on your code.


- How does the rest/spread operator work in JS?


- What problem does `bind` solve in Javascript? How does it accomplish this?

.bind() returns a new function, with a certain context and parameters. It is usually used when you want a function to be called later with a certain context.  This is useful for asynchronous callbacks and events.

.bind() works like the call function. It requires you to pass in the arguments one by one separated by a comma.



- What is the syntax for passing arguments to the `bind` function?
- Does JS assign variables by value or by reference?
- What are the 7 different JS types? 


- Explain the difference between + and -*/ in JS when it comes to coercion.

`+` operator is a tricky operator because it works for both number addition and string concatenation.

But, the `*`, `/` , and `-` operators are exclusive for numeric operations. When these operators are used with a string, it forces the string to be coerced to a number.


- How does prototypal inheritance work?

- Function calls: call, apply and bind

All of these three methods are used to attach this into function and the difference is in the function invocation.

- What does the `length` attribute refer to on a Function in Javascript?

In JavaScript, functions are objects.

built-in property “length” that returns the number of function parameters. rest parameters are not counted.

- Explain the differences between a Function Expression and Function Declaration

A Function Expression is created when the execution reaches it and is usable from then on — it is not hoisted.

A Function Declaration can be called both before and after it was defined — it is hoisted.

- How does JavaScript handle values and references? 