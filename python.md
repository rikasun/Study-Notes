## Variables 
- int
- float
- str
- list
- tuple
- dic 
- set
- bool
```python
type(a)
# determine variable a type 
```
### Numbers
```python
# Division 
3/2 => 1.5
# Floor Division 
3//2 => 1
```
### Strings
```python
print('Hello World')
len('Hello World') => 11
# determine length
``` 
##### String Slicing
```python
s = 'Hello World'
s[1:] => 'ello World'
s[:3] => 'Hel' 
# it doesnt include the 3rd one
s[:-1] => 'Hello Worl' 
s[:] => 'Hello World'
s[::1] => 'Hello World'
s[::2] => 'HloWrd'
# go in steps size of 2
s[::-1] => 'dlroW olleH'
# print a string backwards
```
Strings have an important property known as **immutability**
```python
s[0] = 'x'
# TypeError: 'str' object does not support item assignment
s + ' me' => 'Hello World me'
s = s + ' me' 
# reassign s
letter = 'z'
letter * 10 => 'zzzzzzzzzz'
```
#### Built in methods
```python
s.upper()
s.lower()
s.split()
s.split('W‘)

'Insert another string with curly {}'.format('The inserted string) => 'Insert another string with curly The inserted string'
'string here {} also {}'.format('something1', 'something2')
'The {2} {1} {0}'.format('fox','brown', 'quick')
'The {q} {b} {f}'.format(q='quick', b='brown', f='fox')

result = 100/777 => 0.128700128...
print('The result was {r:1.3f}'.format(r=result)) => 'The result was 0.129' 
# {value:width.precision f} width controls white space

name = 'Jose'
print('My name is {}'.format(name))
print(f'My name is {name}')

print('{0:8} | {1:9}'.format('Fruit', 'Quantity'))
print('{0:8} | {1:9}'.format('Apples', 3))
print('{0:8} | {1:9}'.format('Oranges', 10))
# Fruit    | Quantity 
# Apples   |       3.0
# Oranges  |        10
```

### lists
elements in lists is mutable
```python
new_list = ['one','two']
new_list.append('three')
new_list => ['one', 'two', 'three']
# append permenantly changed the list
new_list.pop() => 'three
new_list.pop(0) => ['two']
sorted(new_list) #not in-place but will return the sorted version
sorted_list = new_list.sort()
type(sorted_list) => NoneType
# it doesnt return anything, it is a in-place
# so instead you can do
new_list.sort()
sorted_list = new_list
new_list.reverse()
' '.join(new_list)

help(mylist.insert) => # you can find the documentations


```
### Dictionary
```python
d = {'key1':1, 'key2':2, 'key3':3 }
d.keys() => dict_keys(['key1', 'key2', 'key3'])
d.values() => dict_values([1, 2, 3])
d.items() => dict_items([('key1', 1), ('key2', 2), ('key2', 3)])
# method to return tuples of all items
```

### Tuples
Similar to lists but has **immutability** and keeps data integrity.
```python
t = (1,2,3)
type(t) => tuple
t.count(1)
t.index(1)
t[0] = "new" => TypeError
```

### Sets
Unordered collection of ***unique*** elements.
```python
myset = set()
myset.add(1) => {1}
mylist =  [1,1,1,1,2,2,3,3,3,3]
set(mylist) => {1,2,3}
```
The ordering operators (<, <=, >, >=) comoare two sets to determine their superset or subset relationship. These operators reflect the two definitions of subset (and superset). 

### Booleans
returns True or False. In python you need to capitalize T and F.
```python
type(False) => Bool
3 == 3.0 => True
```

### Files I/O
```python
%%writefile myfile.txt
# write myfile.txt
myfile = open('myfile.txt')
myfile = open('nosuchfile.txt') => FileNotFoundError
pwd => check the location
myfile.read() => returns a giant string of everything in the file
# \n indicate a new ine
myfile.read() => ''
# because the cursor is at the end of the file now
myfile.seek(0)
# move the cursor to the beginning of the file
myfile.read() => returns all again
myfile.readlines() => returns each lines in a list
# so you can loop through them
myfile = open("/Users/....)
myfile.close()
with open('myfile.txt') as my_new_file:
    contents = my_new_file.read()
contents =>
# shift+Tab next to the function gets all the function
with open('myfile.txt', mode="r") as my_file:
    contents = my_file.read()
mode = 'r' #read only
mode = 'w' #overwrite or create new
mode = 'a' #append only, will add on files
mode = 'r+' #both read and write
mode = 'w+'
``` 

### logical comparisons
- and
- or
- not

```python
 not 1 == 1
```

### controll flow
colon and indentation

#### if, else statement
```python
if condition1:
    # code
elif condition2:
    # code
else: 
    # code
```

#### for loop
Tuple unpacking
```python
mylist = [(1,2), (3,4),(5,6)]
for a, b in mylist:
    print(a)

d = {'k1':1, 'K2':2, 'K3':3}
for key, value in d.items():
    print(value)
```

#### while loop
```python
while some_boolean_condition:
  # do something
else:
  # do something else
```
`break` breaks out of the current closest enclosing loop
`continue` goes to the top of the closest enclosing loop
`pass` does nothing at all, sometimes used as a placeholder to avoid the syntax error

#### some common operators
`range`
```python
range(0, 11) # this is a generator function
list(range(0,11)) => [0,1,2,3,...,10]
list(range(0, 101, 10)) # 10 is the step size
```
`enumerate`
```python
for i, letter in enumerate('abcde'):
    print(i)
    print(letter)
```
`zip`
```python
mylist1 = [1,2,3,4,5]
mylist2 = ['a', 'b', 'c', 'd', 'e']
list(zip(mylist1, mylist2))
```
`in operator`
```python
'x' in ['x', 'y', 'z'] => True
'mykey' in {'mykey': 345} => True
```

`min max`
```python
min(mylist)
max(mylist)
```

`random`
```python
from random import shuffle
mylist = [1, 2, 4 ,5 10]
shuffle(mylist) => not return anything # a in-place action
mylist

from random import randint
randiant(0, 100) => returns some random integer
```

`input`
```python
result = input('what is your number?')
type(result) => str
```
### List Comprehension
```python
mylist = [num**2 for num in range(0,11) if x%2==0]

celcius = [0,10,20,34.5]
fahrenheit = [((9/5)*temp+32) for temp in celcius]

mylist = [x*y for x in [2,4,6] for y i [1,10,1000]]
```


### functions 
```python
def name_of_function(name):
  #code here
```

### *args and **kwargs
`*args`
When a function parameter starts with an asterisk, it allows for an arbitrary number of arguments, and the function takes them in as a tuple of values. 

`**kwargs`
handle arbitrary numbers of keyworded arguments. Instead of creating a tuple of values, `**kwargs` builds a dictionary of key/value pairs.

Useful when you start to use outside libraries

```python
def myfunc(*args):
    return sunm(args) * 0.05

def myfunc(**kwargs):
    print(kwargs) #returns the dictionary
```


### Excercises

```python
def summer_69(arr):
    total = 0
    add = True
    
    for num in arr:
        while add:
            if num!=6:
                total += num
                break
            else:
                add = False
        while not add:
            if num != 9:
                break
            else:
                add = True
                break
                
    return total


def count_primes(num):
    if num < 2:
        return 0
    primes = [2]
    
    x = 3
    
    while x <= num:
        for y in range(3,x,2):
            if x%y == 0:
                x += 2
                break
        else:
            primes.append(x)
            x += 2

    return len(primes)
```

### Lambda Expressions Map and Filter

```python
map(myfunc, mylist)
filter(myboolean, mylist)

def square(num): return num ** 2
lambda num: num**2
map(lambda num: num **2, mylist)
filter(lambda n: n%2 == 0, mylist)
lambda s: s[0]
lambda x,y: x+y
```

### Nested Statement and Scope
When you create a variable name in Python the name is stored in a `name-space`. Variable names also have a scope, the scope determines the visibility of that variable name to other parts of your code.

```python
x = 25
def printer():
    x = 50
    return x

print(x) => 25
print(printer()) => 50
```

local => enclosing functions => global => python built-in