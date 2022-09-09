#!/usr/bin/node

function fibs(num){
  //Function that takes a number and returns an array containing 
  //that many numbers from the fibonacci sequence

  let prevNum = 0;
  let newNum = 0;
  let nextNum = 1;
  let fibArr = [];
  for (let i = 1; i <= num; i++){
    fibArr.push(nextNum);
    newNum = prevNum + nextNum;
    prevNum = nextNum;
    nextNum = newNum;
  }
  return fibArr;
}

function recursive_fibs(num){
  if (num < 2){
    return num;
  }
  else{
    return (recursive_fibs(num-1) + recursive_fibs(num-2));
  }
}



function merge_helper(leftArr, rightArr){
  const array = [];

  while (leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]) {
      array.push(leftArr.shift());
    } else {
      array.push(rightArr.shift());
    }
  }

  return array.concat(leftArr.slice()).concat(rightArr.slice());
}

function merge_sort(array){
  //Takes an unsorted array, recursively splits it into subarrays
  //Returns sorted array
  if(array.length <= 1){
    return array;
  }


  let midpoint = Math.floor(array.length/2);
  let leftArr = array.slice(0, midpoint);
  let rightArr = array.slice(midpoint);

  return merge_helper(merge_sort(leftArr), merge_sort(rightArr));

}

function binary_search(arr, target){
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while (low <= high){
    mid = Math.floor((high + low) / 2);
    if (arr[mid] === target){
      return arr[mid];
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Not found";
  
}

console.log(binary_search([1,2,3,4,5,6,7,8,9,10], 8));