/*eslint-env browser*/

//STEP 1

//function AlphabeticalSort() { 
//	var word= window.prompt("Enter a word");
//    var wordSplit = word.split("");
//    var wordSort = wordSplit.sort();
//    var sortedWord = wordSplit.join("");
//    return sortedWord;
//}
//window.console.log(sortedWord);
	
//STEP 2

// function upperCase() {
//     "use strict";
//     var newText = " ";
//     var text = window.prompt("Enter a string");
//     text = text.split(" ");
// window.console.log(text.length);
//     for(var i = 0; i < text.length; i++){
//         newText += text[i].toString().charAt(0).toUpperCase() + text[i].toString().slice(1) + " ";
// //        window.console.log(newText);
//     }
//     window.console.log(newText.trim());
// }
// upperCase();


//STEP 3
// function countVowels() { 
//     var text = window.prompt("Enter a string");
//     window.console.log(text.match(/[aeiouAEIOU]/g).length);
// }
// countVowels();


//STEP 4
// function stringId() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// console.log(stringId());



//STEP 5

// function LongestCountryName(countryName)
//   {
//   return countryName.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(LongestCountryName(["Australia", "Germany", "Ethiopia" , "United States of America"]));

