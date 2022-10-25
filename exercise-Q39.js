// City Names: Write a function called city_country() that takes in the name of a city and its country.
//The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

const city_country = (city, country) => {
  return `"${city}, ${country}"`;
};
let city1 = city_country("Karachi", "Pakistan");
console.log(city1);
let city2 = city_country("Lahore", "Pakistan");
console.log(city2);
let city3 = city_country("Islamabad", "Pakistan");
console.log(city3);
