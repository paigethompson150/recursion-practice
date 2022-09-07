#!/usr/bin/node

function fibs(num){
  //Function that takes a number and returns an array containing that many numbers from the fibonacci sequence
  //Input of 8 should return the array [0,1,1,2,3,5,8,13]
  let prevNum = 0;
  let newNum = 0;
  let nextNum = 1;
  let fibArr = [];
  for (let i = 1; i <= num; i++){
    newNum = prevNum + nextNum;
    fibArr.push(prevNum);
    prevNum = nextNum;
    nextNum = newNum;
  }
  return fibArr;
}

console.log(fibs(8));

function recursive_fibs(num){
    if (num <= 1){
      return num;
    }
    else {
      return recursive_fibs(num-1) + recursive_fibs(num-2);
    }
}
