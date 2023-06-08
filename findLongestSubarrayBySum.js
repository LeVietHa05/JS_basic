/**
 * giả sử có đầu vào là một mảng các số nguyên và một số nguyên sum
 * mảng đó có giới hạn là 10^5 phần tử
 * các giá trị trong mảng đó có giới hạn là 0 <= a[i] <= 10^3
 * giá trị sum đó có giới hạn là 0 <= sum <= 10^4
 * tìm mảng con dài nhất có tổng bằng sum
 * ví dụ: 
 * a = [6, 9, 2, 1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10]
 * sum = 15
 * kết quả là [1, 8]
 * 1 là vị trí bắt đầu của mảng con + 1
 * 8 là vị trí kết thúc của mảng con + 1
 * nếu không tìm thấy mảng con nào thì trả về [-1, -1]
 */

function findLongestSubarrayBySum(arr, sum) {
    let left = 0;
    let right = 0;
    let currentSum = 0;
    let result = [-1, -1];
    while (right < arr.length) {
        currentSum += arr[right];
        while (left < right && currentSum > sum) {
            currentSum -= arr[left];
            left++;
        }
        if (currentSum == sum && (result[1] - result[0] < right - left)) {
            result = [left + 1, right + 1];
        }
        right++;
    }
    return result;
}

console.log(findLongestSubarrayBySum([6, 9, 2, 1, 2, 3, 4, 5, 0, 0, 0, 6, 7, ], 15));
8, 9, 10
function tets(arr, sum) {
    let tong = 0;
    let start = -1;
    let end = -1;
    for (let i = 0; i < arr.length; i++) {
        for (let y = i; y < arr.length; y++) {
            tong += arr[y];
            if (tong == sum) {
                start = i + 1;
                end = y + 1;
                break;
            }
        }
    }
    console.log(start, end)
}

tets([6, 9, 2, 1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9, 10], 15)