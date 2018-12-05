
- [x] What are the benefits of a Javascript closure?

`Closure` allows a function to access variables from an enclosing scope — **environment** — even after it leaves the scope in which it was declared.

One of the main benefits of closures is that it allows **data encapsulation**. 

- [x] Formally define a Javascript closure

A closure is the combination of a function and the lexical environment from which it was declared.

- [x] Give an example of a closure
- [x] What is **data encapsulation**?

Some data should not be directly exposed.

- [x] What is the difference between the memory heap and call stack in javascript?
- [x] What is one problem with programming languages that are fully single-threaded

- [x] Is Javascript a single-threaded language? Explain (Hint: This may not be a yes or no question)

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
