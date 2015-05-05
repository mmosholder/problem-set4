// Write a function addNumbers that takes a single string parameter and searches  
// all the numbers in the string, adds them together, then returns the sum. 
// For example: if str is "88Hello 3World!" the output should be 91. 
// You will have to differentiate between single digit numbers and multiple digit numbers 
// like in the example above. So "55Hello" and "5Hello 5" should return two different answers. 
// Each string will contain at least one letter or symbol.

var addNumbers = function (str) {
    var strArr = str.split(' ').join('').split('');

    for (var i = 0; i < strArr.length; i++) {
        if (!isNaN(strArr[i])) {
            console.log(strArr[i]);
        }
    }
};

// Write a function longestWord that takes a single string parameter and returns the largest word in the string. 
// If there are two or more words that are the same length, it returns the first word from the string with that length. 
// Ignore punctuation and assume the input sentence will not be empty.

var longestWord = function (str) {

};