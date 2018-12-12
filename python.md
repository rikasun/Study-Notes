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
s.split('W)

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
```


