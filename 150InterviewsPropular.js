var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; j++, i++) {
    nums1[i] = nums2[j];
  }
  console.log(nums1)
};

// var merge = function(nums1, m, nums2, n) {
//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j];
//     }
//     nums1.sort((a, b) => a - b);
//     console.log(nums1,'nums1')
// };
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
