####for
* iterate with index
```python
for idx, val in enumerate(ints):
    print(idx, val)
```
####list comprehension
```python
doubled = [num * 2 for num in lst]
```
```python
[expression_if_true if condition else expression_if_false]
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
