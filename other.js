function solution1(nums) {
    const result = [];
    const odd = [];
    const even = [];
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        nums[i] % 2 !== 0
            ? odd.push(nums[i])
            : even.push(nums[i])
    }

    for (let i = 0; i < len / 2; i++) {
        result.push(even[i]);
        result.push(odd[i]);
    }

    return result;
}