function fibRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}
console.log(fibRecursive(4));

// Merge Sort implementation
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(sortedLeft, sortedRight) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] <= sortedRight[rightIndex]) {
      result.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      result.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(
    sortedLeft.slice(leftIndex),
    sortedRight.slice(rightIndex),
  );
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);
const sortedArray = mergeSort(arr);
console.log("Sorted Array:", sortedArray);
