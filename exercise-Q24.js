//More Conditional Tests: You don’t
//have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
let test = "equal";
console.log(test == "equal");
console.log(test != "equal");

console.log(test.toLowerCase() == "equal");

let val = 10;
console.log(val > 10);
console.log(val < 10);
console.log(val <= 10);
console.log(val >= 10);

val = 10;
console.log(val == 10);
console.log(val != 10);
if (val <= 8 && val >= 10) console.log(false);

if (val <= 8 || val >= 10) console.log(true);

let valArray = [23, 24, 56, 3];
console.log(valArray.includes(23));

console.log(valArray.includes(100));
