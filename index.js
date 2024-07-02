function binarySearch(arr, left, right, x) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function exponentialSearch(arr, x) {
    if (arr[0] === x) {
        return 0;
    }

    let i = 1;
    while (i < arr.length && arr[i] <= x) {
        i = i * 2;
    }

    return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), x);
}
let arr = [2, 3, 4, 10, 40, 50, 60, 70, 80, 90];
let x = 10;
let result = exponentialSearch(arr, x);

result === -1
    ? console.log("عنصر پیدا نشد.")
    : console.log("عنصر در اندیس " + result + " پیدا شد.");