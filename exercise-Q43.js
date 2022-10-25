const show_magicians = (magicians) => {
  for (let magician of magicians) {
    console.log(magician);
  }
};
const make_great = (magicians) => {
  let great_magicians = [];
  for (let magician of magicians) {
    great_magicians = `${magician} the great`;
    console.log(great_magicians);
  }
};
let magicians = ["harry houdini", "david blaine", "teller"];
show_magicians(magicians);
make_great(magicians);
