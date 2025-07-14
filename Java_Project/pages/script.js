//Function 1 for calulating the cost of a student pass versus an adult pass
let age = 20;

if (age >= 18) {
    console.log("Adult summer day pass is $12");
} else {
    console.log("Children's summer day pass is $8");
}
//Output: Adult summer day pass is $12

// Function 2 for storing your name and email address in an array after registration
function registerUser(firstName, lastName, email) {
    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
}

//Function 3 for combining two prices (adults and children day passes) into a single price
let adultPrice = 12; 
let childPrice = 8;
let adultCount = 2;
let childCount = 5;
function totalPrice(adultPrice, childPrice) {
    let total = adultPrice(adultCount) + childPrice(childCount);

    return total;
}
console.log(totalPrice())
// Output: 64 (2 adults at $12 each + 5 children at $8 each = $24 + $40 = $64)

//Function 4 for randomly picking a golf course hole from an array of holes
let holes = ["Hole 1", "Hole 2", "Hole 3", "Hole 4", "Hole 5", "Hole 6", "Hole 7", "Hole 8", 
    "Hole 9", "Hole 10", "Hole 11", "Hole 12", "Hole 13", "Hole 14", "Hole 15", "Hole 16", "Hole 17", 
    "Hole 18" ];
    function getRandomHole(holes) {
        let randomIndex = Math.floor(Math.random() * holes.length);
        return holes[randomIndex];
    }
    console.log(getRandomHole(holes));
    // Output: Randomly selected hole, e.g., "Hole 7" 


//Function 5 for giving special message for a hole-in-one
let score = 1;
function checkHoleInOne(score) {
    if (score === 1) {
        return "Wow! You got a hole-in-one!";
    } else {
        return "Sorry, better luck next time";
        }
    }
console.log(checkHoleInOne(score));
// Output: "Wow! You got a hole-in-one!"


