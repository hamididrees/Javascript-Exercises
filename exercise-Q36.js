// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const makeShirt = (size, message) => {
  console.log("Summarize the shirt that's going to be made.");
  console.log(`I'm going to make ${size} T-Shirt.`);
  console.log(`I will say, ${message}`);
};
makeShirt("large", "I love Javascript.");
