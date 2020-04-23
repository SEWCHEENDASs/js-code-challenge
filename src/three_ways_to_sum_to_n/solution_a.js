// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

var sum_to_n = function(n) {
    // your code here
    let result = 0
  for (let i = 1; i <= n; i++) {
    result = result + i
  }
  return result
};

function stringNumbers(n) {
  var finalString = ''
  for (let i = 1; i <= n; i++) {
    if (i >= n) {
      finalString += i + ' '
    } else {
      finalString += i + ' + '
    }
  }
  return finalString
}

let n = 5
console.log(`sum_to_n(${n}) === ${stringNumbers(n)}=== ${sum_to_n(n)}`)


