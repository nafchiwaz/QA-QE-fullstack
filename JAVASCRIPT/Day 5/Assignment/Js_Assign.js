function isPalindrome(str) {
   
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    
    const reversedStr = cleanStr.split('').reverse().join('');
  
    
    return cleanStr === reversedStr;
  }
  
 
  console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
  console.log(isPalindrome('Was it a car or a cat I saw?')); // true
  console.log(isPalindrome('Hello, World!')); // false




  //NUMBER 2

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello Africa"));
  
  
  //NUMBER 3


  function longestPalindromicSubstring(s) {
    let max = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < 2; j++) {
            let l = i, r = i + j;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                if (r - l + 1 > max.length) max = s.slice(l, r + 1);
                l--; r++;
            }
        }
    }
    return max;
}

// Test Cases
console.log(longestPalindromicSubstring('babad')); // 'bab' or 'aba'
console.log(longestPalindromicSubstring('cbbd'));  // 'bb'


//NUMBER 4


function areAnagrams(str1, str2) {
    // Convert both strings to lowercase to handle case insensitivity
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    if (str1.length !== str2.length) return false;
    
    let count = {};
    
    for (let char of str1) count[char] = (count[char] || 0) + 1;
    for (let char of str2) count[char] = (count[char] || 0) - 1;
    
    for (let char in count) if (count[char] !== 0) return false;
    
    return true;
  }
  
  console.log(areAnagrams('Listen', 'Silent')); // true
  console.log(areAnagrams('Hello', 'World'));   // false

  


  // NUMBER 5 Remove Duplicates from a String


  function removeDuplicates(str) {
    let seen = new Set();
    return [...str].filter(char => !seen.has(char) && seen.add(char)).join('');
}

console.log(removeDuplicates("banana")); // "ban"
console.log(removeDuplicates("hello world")); // "helo wrd"





  // NUMBER 6 Count Palindromes in a String


  function countPalindromes(s) {
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return count;
}

console.log(countPalindromes("abba")); // 6 ("a", "b", "b", "a", "bb", "abba")
console.log(countPalindromes("racecar")); // 10







  //NUMBER 7 Longest Common Prefix

  function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    
    return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""






  //NUMBER 8 Case Insensitive Palindrome
  function isCaseInsensitivePalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log(isCaseInsensitivePalindrome("A man, a plan, a canal, Panama")); // true
console.log(isCaseInsensitivePalindrome("Hello")); // false
