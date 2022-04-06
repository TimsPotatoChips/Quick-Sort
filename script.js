let sortingList = [1, 3, 2, 5, -7, 9, 6, 102, -9, -200, 9, 21, 23, 5, 7, 340324];

function swap(items, leftIndex, rightIndex) {
   let temporaryData = items[leftIndex];

   items[leftIndex] = items[rightIndex];
   items[rightIndex] = temporaryData;

   return items;
}

function partition(items, left, right) {
   console.log("Items:", items);

   let rightMost = items[right];
   let pointer = left;

   for (let j = left; j < right; j++) {
      if (items[j] <= rightMost) {
         items = swap(items, pointer, j);

         pointer++;
      }
   }

   items = swap(items, pointer, right);

   return pointer;
}

function quickSort(items, left, right) {
   if (left >= right) {
      return;
   }

   pivotIndex = partition(items, left, right);
   quickSort(items, left, pivotIndex - 1);
   quickSort(items, pivotIndex + 1, right);
}

quickSort(sortingList, 0, sortingList.length - 1);

console.log(sortingList);