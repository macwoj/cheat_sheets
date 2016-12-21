####list
```python
# iterate with index
for idx, val in enumerate(ints):
    print(idx, val)
    
# list comprehension
doubled = [num * 2 for num in lst]
[expression_if_true if condition else expression_if_false]

n = len(L)
item = L[index]
seq = L[start:stop]
L[-1] # can be used to access the last item in a list.

seq = L[start:stop:step]
seq = L[::2] # get every other item, starting with the first
seq = L[1::2] # get every other item, starting with the second

i = iter(L)
item = i.next() # fetch first value
item = i.next() # fetch second value

#modify
L[i] = obj
L[i:j] = sequence

# modify both lists
L = []
M = L
L.append(obj)

M = L[:] # create a copy

# append
L.append(item) #adds a single item to the end of the list,
L.extend(sequence) #adds items from another list (or any sequence) to the end
L.insert(index, item) #inserts an item at a given index, and move the remaining items to the right
```
####csv
```python
import csv
arrayofdata=[[1,2,4,5,'something','spam',2.334],
             [3,1,6,3,'anything','spam',0]]
             
with open('mydata.csv', 'w') as mycsvfile:
    thedatawriter = csv.writer(mycsvfile)
    for row in arrayofdata:
        thedatawriter.writerow(row)
```

#### ignore exception
```python
try:
except:
    pass
```
#### class
```python
```
