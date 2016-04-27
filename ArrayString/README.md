# 1.1 Implement an algorithm to determine if a string has all unique characters. What if you
can not use additional data structure.

Note:
ASCII string or UNICODE string

ASCII defines 128 characters, where Unicode defines less than 2^21 characters.


Solution #1 : Using a different array

function checkUnique(str) {
 var len = str.length;
 if(len > 256) {
  return false;
 }
 var arr = new Array(256);
 for(var i = 0; i < len; i++) {
  var val = str.charAt(i);
  if(arr.indexOf(val) > -1) {
   return false;
  }
 arr[i] = val;
 }
 return true;
}

Time Complexity = O(n);
Space Complexity = O(n);


Solution #2 : Using bitwise operator. didn't understand yet


Solution #3 : Comparing each letter to other letters.
Time complexity = O(n^2)
Space complexity = O(1)


Solution #4 : Sort the String and check immediate neighbours
Time complexity = O(nlog n)  - looking at best sorting algorithm time
Space complexity = depends on the sorting algorithm.



# 1.3 Given two strings, write a method to decide if one is permutation to other.


Solution #1 : Sort the strings

Note : JS : Array.sort() : It doesn't work on numbers


function isPermuted(str1, str2) {

 if(str1.length !== str2.length) { return false; }
 
 var str1 = str1.split('').sort().join('');
 var str2 = str2.split('').sort().join('');

 return str1 === str2;
}

Test Cases:
isPermuted('thereisagame', 'meagasiereht');				// return true



Solution #2 : Check if two strings have identical character counts.
