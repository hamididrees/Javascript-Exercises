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
console.log(
  `Mr. ${guestList[0]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[1]}, I'm inviting to my house for tonight dinner.`
);
console.log(
  `Mr. ${guestList[2]}, I'm inviting to my house for tonight dinner.`
);
