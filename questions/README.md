#README
These are the code questions that Maria forwarded to me. They assume a node environment for running on the command-line.

## Diagonal Matrix Sum
Medium Difficulty: (Do it in a single loop)

Given a 2D square matrix, find the sum of elements in Principal and Secondary diagonals. For example, consider the following 3 X 3 input matrix. 


Input: [[1,2,3], [4,5,6], [7,8,9]] 
3
1 2 3
4 5 6
7 8 9

output:
Principal Diagonal: 15
Secondary Diagonal: 15

### Solution
to view the solution, invoke the following on the command-line:

```
# cd diagonal-matrix
$ node index.js
```

or, if you want to try custom input, you may supply the path to a text file with custom input:

```
$ cd diagonal-matrix
$ node index.js input.txt
```


## Minimum Change Needed
Hard Difficulty:


Given a value of V and an infinite supply of each of the denominations {1, 2, 5, 10, 20, 50, 100, 500, 1000} valued notes, 


The task is to find the minimum number of notes needed to make the change? 


Input: V = 70 

Output: 2 

Explanation: We need a 50 Rs note and a 20 Rs note. 


Input: V = 121 

Output: 3 

Explanation: We need a 100 Rs note, a 20 Rs note, and a 1 Rs coin. 

### Solution
to view the solution, invoke the following on the command-line:

```
# cd minimum-notes
$ node index.js
```

or, if you want to try custom input, you may supply a value to the command-line:

```
$ cd minimum-notes
$ node index.js 121
```
