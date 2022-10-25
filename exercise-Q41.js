// Magicians: Make a array of magician’s names.
//Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const show_magicians = (magicians) => {
  for (let magician of magicians) {
    console.log(magician);
  }
};
let magicians = ["harry houdini", "david blaine", "teller"];
show_magicians(magicians);
