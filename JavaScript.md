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
