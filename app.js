function sumOddEvenMaxMin(args){
  let n = Number(args.length);
  let evenMax = Number.NEGATIVE_INFINITY;
  let oddMax = Number.NEGATIVE_INFINITY;
  let evenMin = Number.POSITIVE_INFINITY;
  let oddMin = Number.POSITIVE_INFINITY;
  let evenSum = 0;
  let oddSum = 0;

  for(let i = 1 + 1; i < n; i+=2){
    let current = args[i];
    evenSum += current;
    if(current > evenMax){
      evenMax = current;
    } 
    if(current < evenMin){
      evenMin = current;
    }
  }
  for(let i = 1; i < n; i+=2){
    let current = args[i];
    oddSum += current;
    if(current > oddMax){
      oddMax = current;
    }
    if(current < oddMin){
      oddMin = current;
    }
  }
  if(args.length < 3){
    console.log("EvenMax is = No");
    console.log("EvenMin is = No");
  }else{
    console.log("EvenMax is = " + evenMax);
    console.log("EvenMin is = " + evenMin);
  }
  console.log("EvenSum is = " + evenSum);
  console.log("OddSum is = " + oddSum);
  console.log("OddMax is = " + oddMax);
  console.log("OddMin is = " + oddMin);
}
sumOddEvenMaxMin([1,3,-2,8,11,-3]);
