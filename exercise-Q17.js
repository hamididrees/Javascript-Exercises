//### invite few people for dinner

// invitation for dinner
let guestList = ["Ali", "Hamid", "Waqar"];
console.log(
  `Mr. ${guestList[0]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[1]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[2]}, I'm inviting to my house for tonight dinner.`
);

// Hamid can't make it to dinner
console.log(`\nSorry, ${guestList[1]} can't make it to dinner.`);

// lets invite talha instead
guestList.splice(1, 1, "Talha");
console.log(`\n${guestList[1]}\n`);

// now again print the invitation
console.log("\nNew list of invitation.");
console.log(
  `Mr. ${guestList[0]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[1]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[2]}, I'm inviting to my house for tonight dinner.`
);

// we got a big dinning table so lets add some more people to the list
console.log("\nadd or invite three more persons on dinner");

// add guest to the beginning of array
guestList.unshift("Ammar");
// add guest in the middle of the array
guestList.splice(2, 0, "Umer");
// add guest in the end of the array
guestList.push("Hamza Shakir");

// print new set of invitation
console.log("\nNew list of invitation.");
console.log(
  `Mr. ${guestList[0]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[1]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[2]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[3]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[4]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[5]}, I'm inviting to my house for tonight dinner.`
);

// Oh no, the dinner table won't arrive on time
console.log("\nSorry! I can only invite two people for dinner.");
console.log(`Sorry! Mr. ${guestList[5]}, there is no seat on table.`);
guestList.pop();
console.log(`Sorry! Mr. ${guestList[4]}, there is no seat on table.`);
guestList.pop();
console.log(`Sorry! Mr. ${guestList[3]}, there is no seat on table.`);
guestList.pop();
console.log(`Sorry! Mr. ${guestList[2]}, there is no seat on table.`);
guestList.pop();

// new list of invitation
console.log("\nNew list of invitation.");
console.log(
  `Mr. ${guestList[0]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[1]}, I'm inviting to my house for tonight dinner.`
);
