// Pig-latin
function pigLatin(string) {
  var vowels = ["a", "e", "i", "o", "u"]
  var vowelsY = ["a", "e", "i", "o", "u", "y"]
  var upperCase = false
  if (string.charAt(0) === (string.charAt(0).toUpperCase())){
    upperCase = true;
  }
  string = string.toLowerCase()
  if (string.charAt(0) === "q" && string.charAt(1) === "u") {
    string = string.slice(2) + "qu";
  } else if (!testAgainst(string.charAt(0), vowels)) {
    string = string.slice(1) + string.charAt(0);
    while (!testAgainst(string.charAt(0), vowelsY)) {
      if (string.charAt(0) === "q" && string.charAt(1) === "u") {
        string = string.slice(2) + "qu";
      } else {
        string = string.slice(1)+string.charAt(0);
      }
    }
  }

  if (upperCase === true) {
    var firstLetter = string.charAt(0).toUpperCase();
    string = string.slice(1)
    string = firstLetter + string
  }
  var string = string + "ay";

  return string;
}

function sentenceLatin(string) {
  var array = string.split(" ");
  var result = ""
  for (var i = 0; i < array.length; i++) {
    result = result + (pigLatin(array[i])) + " ";
  }
  return result;
}

console.log(sentenceLatin("This is sentence"));

function testAgainst(character, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === character) {
      return true;
      break;
    }
  }
}

  // array.forEach(function(element){
  //   if (element === character) {
  //     return true
  //   } else {
  //     return false
  //   }
  // });






// future ideas

//str.charAt(0)

// if (/[a-z]/g.test(string) === true) {
//   debugger;
// }

//   if (/[a e i o u]/.test(string.charAt(0))) {
  // return true



// Leap Year
// function leapYear(year) {
//   if ((year %4 === 0) && !(year %100 == 0) || (year %400 === 0)) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(leapYear(1900));
