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
print('{0:8} | {1:9}'.format('Apples', 3.))
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


