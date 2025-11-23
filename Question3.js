function sumAll(...numbers){
  return numbers.reduce((accumulator,current)=>accumulator+current,0);
}
console.log(sumAll(1,2,3,4));
