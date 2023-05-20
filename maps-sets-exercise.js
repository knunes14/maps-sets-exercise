// 1. What does the following code return?
new Set([1,1,2,2,3,4]) // {1,2,3,4}

// 2. What does the following code return? 
// [...new Set("referee")].join("") // "ref" 
// The Set object is used to create a collection of unique values. In this case, the string "referee" is passed to the Set constructor. The spread operator (...) is used to spread the set into an array. The resulting array contains unique elements from the string "referee", which are 'r', 'e', and 'f'. Finally, the join method is called on the array with an empty string "" as the separator. This concatenates the elements of the array into a single string, resulting in "ref"

// 3. What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

// 4. hasDuplicate- Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

// 5. vowelCount- Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        if (vowelMap.has(char)) {
          vowelMap.set(char, vowelMap.get(char) + 1);
        } else {
          vowelMap.set(char, 1);
        }
      }
    }
    return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
