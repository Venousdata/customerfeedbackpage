// regex for email validation. again, wanted to avoid using libraries where possible
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// adding a number to a boolean converts boolean to 1(true) or 0(false)
// so in this function n is the current number/accumulator, and if it equals the passed in number
// then it'll iterate the accumulator, if not, then it'll add 0 which basically means it won't iterate.
export const countNumOccurrences = (arr, num) =>
  arr.reduce((n, x) => n + (x === num), 0);
