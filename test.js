// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Constraints:
// * 1 <= strs.length <= 200
// * 0 <= strs[i].length <= 200
// * strs[i] consists of only lower-case English letters.

function checkOnlyLowercaseEnglishLetter(text) {
  return /^[a-z]+$/.test(text);
}

function calculatePrefix(strs) {
  for (let str of strs) {
    if (!checkOnlyLowercaseEnglishLetter(str)) {
      return "";
    }
  }
  if (strs.length === 0 || strs.length > 200) {
    return "";
  } else if (strs.length >= 0 && strs.length <= 200) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
      let currentChar = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== currentChar) {
          return prefix;
        }
      }
      prefix += currentChar;
    }
    return prefix;
  }
}

console.log("input1=>", calculatePrefix(["หกหก", "Force", "fortunecookie"]));
console.log("input2=>", calculatePrefix(["dog", "racecar", "car"]));
console.log("input3=>", calculatePrefix(["dogfahmahwat", "dog", "doger"]));
console.log(
  "input4=>",
  calculatePrefix([
    "dogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbndogfahmahwatasdsadsadsadsadasdsadsadsadasdasdsadsadsadsadsadsadsadasdasdsadsadsadsadsadasdsadsadsadsadsadsadsadsadasdsadasdsadaxcvbnm,mnbvcxcvbhnjmkjhngbfdghjk,jhgfgbhnjmkjnhbgvfcfvbghnjmkjnbvcvbn",
    "dog",
    "doger",
  ])
);
