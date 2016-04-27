/*
	Implement a method to perform basic string compression using the counts of repeated characters. For example, the string
	aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string
	method should return the original string.

*/

function compressString(str) {
 var newStr = '';
 for(var i = 0; i < str.length;) {
  var count = 1;
  while(str[i] === str[i+1]) {
   count++;
   i++;
  }
  i++;
  newStr = newStr.concat(str[i-1] + count);
 }
if(newStr.length > str.length) {
 return str;
} else {
  return newStr;
 }
}