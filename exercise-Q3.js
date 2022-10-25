let personName = "Hamid Idrees";

// person's name in lowercase
console.log(personName.toLowerCase());
// person's name in uppercase
console.log(personName.toUpperCase());

// person's name in tiltecase
const titleCase = () => {
  let str = personName.toLowerCase().split(" ");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCase());
