// Conditionals Exercises: Solution One
let num = 10;
if (num % 2 === 0) {
  console.log ('even')
} else if (num % 2 !== 0) {
  console.log('odd');
}

//Solution Two
let musicians = 1;
if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
  } else if (musicians === 2) {
      console.log("duet");
      } else if (musicians === 3) {
          console.log("trio");
         } else if (musicians === 4) {
              console.log("quartet");
              } else if (musicians > 4) {
                  console.log("Wow!This is a large group!");
              }

//Solution Three
let room = "dining room";
let suspect = "Mr. Parkes";
let weapon = "";
let solved = false;

if (room === "ballroom") {
    weapon = "poison"; solved = suspect === "Mr. Kalehoff";
} else if (room === "gallery") {
    weapon = "trophy"; solved = suspect === "Ms. Van Cleve"; 
} else if (room === "billiards room") {
    weapon = "pool stick"; solved = suspect === "Mrs. Sparr";    
} else {weapon = "knife"; solved = suspect === "Mr. Parkes";
}
if (solved) {
	console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}


//Solution Four
 let  balance = 0.00; 
 let  checkBalance = true; 
 let isActive = false; 

if (checkBalance) {
  if (isActive && balance > 0) {
      console.log(`Your balance is $${balance}`);
  }
  else if (!isActive) {
      console.log("Your account is no longer active.");
  }
  else if (balance === 0) {
      console.log("Your account is empty.");
  }
  else {
      console.log("Your balance is negative. Please contact bank.");
    }
  }
else {
    console.log("Thank you. Have a nice day!");
}

//Solution Five
let flavor = "strawberry";
let vessel = "cone";
let toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}`);
}

//Solution 6
let shirtWidth = 18;
let shirtLength = 28;
let shirtSleeve = 8.13;

if (shirtWidth <= 19 && shirtLength === 28 && shirtSleeve === 8.13){
  console.log('S');
} else if (shirtWidth <= 20 && shirtLength === 29 && shirtSleeve === 8.38) {
  console.log('M');
} else if (shirtWidth <= 22 && shirtLength === 30 && shirtSleeve === 8.63) {
    console.log('L');
} else if (shirtWidth <= 24 && shirtLength === 31 && shirtSleeve === 8.88) {
 console.log('XL');
} else if (shirtWidth <= 26 && shirtLength === 33 && shirtSleeve === 9.63) {
  console.log('2XL');
} else if (shirtWidth <= 28 && shirtLength === 34 && shirtSleeve === 10.13) {
   console.log('3XL');
} else {
 console.log('N/A');
}

//Solution 7
let eatsPlants = true;
let eatsAnimals = true;

let category = eatsPlants && eatsAnimals ? 'Omnivores' 
               : !eatsPlants && eatsAnimals ? 'carnivore'
               : eatsPlants && !eatsAnimals ? 'herbivore'
               : 'undefined';

//Solution 8
let education = 'no high school diploma';
let salary;

switch(education) {
  case "no high school diploma": salary = 25636;
    break;
  case "a high school diploma": salary = 35256;
    break;
  case "an Associate's degree": salary = 41496;
    break;
  case "a Bachelor's degree": salary = 59124;
    break;
  case "a Master's degree": salary = 69732;
    break;
  case "a Professional degree": salary = 89960;
    break;
  case "a Doctoral degree": salary = 84396;
}
console.log(`In 2015, a person with ${education}
     earned an average of $${salary}/year.`);