// Q1 (Updated): Find the First Non-Repeating Element in an Array 
// Input: [4, 5, 1, 2, 0, 4, 1, 0] 
// Output: 5 

// let nums = [4, 5, 1, 2, 0, 4, 1, 0];

// function firstNonRepeating = (ele) => {
//     let frequency = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (num[i] == 1) {

//         }
//     }
// }
// console.log(firstNonRepeating);


// for (let num of nums) {
//     frequency[num] = (frequency[num] || 0) + 1;
// }

// let firstNonRepeating = null;
// for (let num of nums) {
//     if (frequency[num] === 1) {
//         firstNonRepeating = num;
//         break;
//     }
// }

// console.log(firstNonRepeating);








//  Q2. Check if Two Objects Have the Same Keys and Values 


// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 2, a: 1 };

// function areObjectsEqual(o1, o2) {
//     let keys1 = Object.keys(o1);
//     let keys2 = Object.keys(o2);

//     if (keys1.length !== keys2.length) return false;

//     for (let key of keys1) {
//         if (!o2.hasOwnProperty(key) || o1[key] !== o2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(areObjectsEqual(obj1, obj2));




// Q3.Merge Two Arrays and Remove Duplicates
// Input: [1, 2, 3], [2, 3, 4]
// Output: [1, 2, 3, 4]

// let nums1 = [1, 2, 3]
// let nums2 = [2, 3, 4]

// const mergedAndUnique = [...new Set([...nums1, ...nums2])];
// console.log(mergedAndUnique);




// Q4 (Updated): Convert an Array of Objects into a Single Object
// let arr = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
// ];
// Output:
// {
// 1: "A",
// 2: "B"
// }

//  Use a loop or reduce() to convert array into object with id as key

// const dataObject = {};

// for (const item of arr) {
//     dataObject[item.id] = item.name;
// }

// console.log(dataObject);





//  Q5. Find a Pair With Given Sum (Using Object Map)
// Input: [1, 2, 4, 7], Target = 6
// Output: true (Because 2 + 4 = 6)
//  Use object for complement lookup


// let nums = [1, 2, 4, 7];
// let target = 6;
// let map = {};

// let found = false;
// for (let num of nums) {
//     let complement = target - num;
//     if (map[complement]) {
//         found = true;
//         break;
//     }
//     map[num] = true;
// }
// console.log(found)






//  Q6. Find Missing Number in Sorted Array (Binary Search)
// Input: [1, 2, 3, 5, 6]
// Output: 4
//  Use binary approach to find the missing number



//  Q7. Convert Object to Array of Key-Value Pairs
// let obj = { a: 1, b: 2 }
// Output: [["a", 1], ["b", 2]]
//  Use Object.entries()




//  Q8. Bitwise Operation: Count Number of 1s in Binary
// Input: 9
// Binary: 1001
// Output: 2
//  Use bitwise AND & and right shift >>





//  Q9. Binary Search in Sorted Array
// Input: [1, 3, 5, 7, 9], Target = 5
// Output: 2 (Index of 5)
//  Implement binary search manually

// var array = [1, 3, 5, 7, 9];
// var target = 5;

// function Binary(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let middleIndex = Math.round((array.length - 1) / 2);

//     let middleElement = array[middleIndex];

//     if (target == middleElement) {
//       return middleIndex;
//     } 
//   }
// }

// console.log(Binary(array, target));





//  Q10. Group Elements by Frequency
// Input: [1, 1, 2, 3, 3, 3]
// Output:
// {
// }
// "1": 2,
// "2": 1,
// "3": 3
//  Use object to group and count occurrences

// let nos = [1, 1, 2, 3, 3, 3];

