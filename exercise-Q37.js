// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const makeShirt = (size, message) => {
  console.log("Summarize the shirt that's going to be made.");
  console.log(`I'm going to make ${size} T-Shirt.`);
  console.log(`I will say, ${message}`);
};
makeShirt("large", "I love Javascript.");
makeShirt("medium", "I love Javascript.");
makeShirt("small", "I love Javascript.");
