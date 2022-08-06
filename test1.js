/* 
Description:

You are given an array of integers arr. Consider its elements in pairs: (arr[0], arr[1]), (arr[2], arr[3]), and so on. Arrange the elements in each pair in ascending order. In other words, swap the position of paired elements if the left

element is greater than the right one.

If arr contains an odd number of elements, the last element should be left unchanged.

 

Example

For arr = [1, 5, 7, 3, 2, 1], the output should be solution(arr) = [1, 5, 3, 7, 1, 2].
Explanation:

The given array consists of 3 pairs: (1, 5), (7, 3), (2, 1).
After arranging elements in each pair in ascending order, we get: (1, 5), (3, 7), (1, 2).
So, the answer is [1, 5, 3, 7, 1, 2].
 

For arr = [6, 7, 8, 8, 5, 3, 2], the output should be solution(arr) = [6, 7, 8, 8, 3, 5, 2].
Explanation:

The given array consists of 3 pairs and 1 ending element: (6, 7), (8, 8), (5, 3), and (2).
After arranging elements in every pair in ascending order, we get: (6, 7), (8, 8), (3, 5), and (2).
So, the answer is [6, 7, 8, 8, 3, 5, 2].
*/;

const arr = [11, 2, 23, 17, 47, 10, 0];
const sortArray = (arr) => {
        const sort = [];
        for ( let i = 0; i < arr.length; i++ ) {
            if ( i % 2 === 0 ) {
                if ( arr.indexOf(arr[i+1] ) !== -1 ) {
                    [a, b] = [arr[i], arr[i+1]];
                    a > b ? sort.push(b, a) : sort.push(a, b);
                } else {
                    sort.push(arr[i]);
                }
            }
        } return sort
}
