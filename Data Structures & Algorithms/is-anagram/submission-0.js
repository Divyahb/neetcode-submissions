class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if(s.length !== t.length) return false;
     const sObj = {};

     for(const a of s){
        sObj[a] = sObj[a] ? sObj[a] + 1 : 1;
     }

     for(const b of t){
        if(sObj[b]){
            sObj[b] = sObj[b] - 1;
        } else {
            return false;
        }
     }

     return true;
     
    }
}
