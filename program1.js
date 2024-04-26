  function smallestMissingPositiveInteger(nums) {
      const n = nums.length;
      
      // Step 1 Replacing negative numbers and zeros with n+1 form nums 
      for (let i = 0; i < n; i++) {
          if (nums[i] <= 0 || nums[i] > n) {
              nums[i] = n + 1;
          }
      }
      
      //Mark visited indices as negative in the nums
      for (let i = 0; i < n; i++) {
          const index = Math.abs(nums[i]) - 1;
          if (index < n && nums[index] > 0) {
              nums[index] = -nums[index];
          }
      }
      
      //firstpositivvnumber
      for (let i = 0; i < n; i++) {
          if (nums[i] > 0) {
              return i + 1;
          }
      }
      
      //returnn+1
      return n + 1;
  }
    module.exports = smallestMissingPositiveInteger;

