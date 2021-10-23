//Solution One
i = 1;
while (i <= 20) {
  if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else if (i % 5 === 0 && i % 3 === 0) {
    console.log(i + " FizzBuzz");
  } else {
    console.log(i)
  }
  i += 1;
}

//Solution Two
let num = 99;
while ( num >= 1) {
    if (num <= 99 && num >2) {
    console.log(`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
} else if (num === 2) {
console.log(`${num} bottle of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottle of juice on the wall!`);
} else if (num === 1) {
console.log(`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`);
}
num = num - 1;
}

//Solution 3
var countDown = 60;
while(countDown >= 0) {
if (countDown === 50) {
console.log(`Orbiter transfers from ground to internal power`);
}
else if(countDown === 31) {
console.log(`Ground launch sequencer is go for auto sequence start`);
}
else if(countDown === 16) {
console.log(`Activate launch pad sound suppression system`);
}
else if(countDown === 10) {
console.log(`Activate main engine hydrogen burnoff system`);
}
else if(countDown === 6) {
console.log(`Main engine start`);
}
else if(countDown === 0) {
console.log(`Solid rocket booster ignition and liftoff!`);
}
else{
console.log(`T- ${countDown} seconds`);
}
countDown--;
}

//Solution 4
for (let x = 9; x >= 1;  x--) {
  console.log("hello " + x);
}

//Solution 5 
for (let x = 5; x < 10; x++){
 console.log(x);
}

//Solution 6
for (let k = 0; k < 200; k++) {
  console.log(k);
}

//Solution 7
let  solution = 1;
for(var x = 12; x > 0; x--){
    solution *=x;  
}
console.log(solution);

//Solution 8
for (let i = 0; i <= 25; i= i + 1) {
  for (var j = 0; j <=99; j = j + 1) {
  console.log(i + "-" + j);
  }
  }