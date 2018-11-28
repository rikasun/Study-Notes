- What is a base case in recursion? Why do we need one? _Do_ we always need one?

In recursive program, the solution to base case is provided and solution of bigger problem is expressed in terms of smaller problems.

- What exactly is a Stack Overflow?

If base case is not reached or not defined, then stack overflow problem may arise.

- Describe _direct_ and _indirect_ recursion

A function is called _direct_ rescursive if it calls the same funtion as itself. A function is called _indirect_ recursive if it calls aother function.

- What is _tail call recursion_? Why is it helpful, if at all?

A recursive function is tail recursive when recursive call is the last thing executed by the function. 

The tail recursive functions considered better than non tail recursive functions as tail-recursion can be optimized by compiler. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function’s stack frame is of no use

- Discuss advantages/disadvantages of recursion

Advantages: Recursion provides a clean and simple way to write code. Some problems are inherently recursive like tree traversals, Tower of Hanoi, etc.

Disadvantages: Recursive program has greater space requirements than iterative program as all functions will remain in stack until base case is reached. It also has greater time requirements because of function calls and return overhead.

- How is memory allocated during recursive function calls?

When any function is called from main(), the memory is allocated to it on stack. A recursive function calls itself, the memory for called function is allocated on top of memory allocated to calling function and different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.