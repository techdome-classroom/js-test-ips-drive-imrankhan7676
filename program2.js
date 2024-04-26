    
    function longestSubstring(s) {
        let maxLength = 0;
        let start = 0;
        const charIndexMap = new Map();
     //makingloopfrom0toend
        for (let end = 0; end < s.length; end++) {
            const char = s[end];
            if (charIndexMap.has(char)) {
                start = Math.max(start, charIndexMap.get(char) + 1);
            }
            charIndexMap.set(char, end);
            maxLength = Math.max(maxLength, end - start + 1);
        }
    
        return maxLength;
    }

module.exports = { longestSubstring };
