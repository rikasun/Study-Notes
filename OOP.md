[Tutorial](https://www.youtube.com/watch?v=lbXsrHGhBAU)

### Type

Procedure programming
(functions first then data)

Object-oriented
(data first then functions)

JavaScript(Prototype inheritance)(OOP without classes;
   producing child instances from parent instances)

Other(Class-based inheritance)

#### Structure
class(data type def)
- field(data member)
- method(function member)

object/instance(piece of data)

*
class member(member of class itself, not instances)
class.fields class.method(args)
aka static field and static methods
is procedure programming not object-oriented

#### Principal
`Encapsulation`: methods act as 'interface' to object fields. Avoid spaghetti code.

public vs
private

`Inheritance`: a type may include all members from another type

In real world it's hard to identify relationship, but will not duplicate existing functionality. Think if it is a is-a or has-a

single inheritance: Java/C#  avoid confusion
multiple inheritance: need to cover corner cases


overriding(redefine an inherited method) => object.method(args)

`Polymorphism`: depends upon type of x(x.foo())

#### Term
Constructor(set up an instance at creation)

Interface(a set of methods)(several classes have same methods)

Abstract Class(a class which cannot be instantiated)
