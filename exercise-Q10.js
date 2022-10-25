// program to generate random strings
// declare all characters
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function of generate string
function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
console.log(generateString(15));

// program to check if a string starts with 'S' and ends with 'G'
function checkString(str) {
  // check if the string starts with S and ends with G
  if (str.startsWith("S") && str.endsWith("G")) {
    console.log("The string starts with S and ends with G");
  } else if (str.startsWith("S")) {
    console.log("The string starts with S but does not end with G");
  } else if (str.endsWith("G")) {
    console.log("The string starts does not with S but end with G");
  } else {
    console.log("The string does not start with S and does not end with G");
  }
}
// take input
let messageString = "STRING";
checkString(messageString);
