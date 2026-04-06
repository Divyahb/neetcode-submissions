class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length) return false;
     const sObj = {};

     for(const char of s){
        sObj[char] = (sObj[char] || 0) + 1;
     }

     for(const char of t){
        if(!sObj[char]) return false;
        sObj[char]--;
     }

     return true;
     
    }
}
