let current_users = ["eric", "willie", "admin", "erin", "Ever"];
let new_users = ["eric", "Willie", "PHIL", "ever", "Iona"];

let current_users_lower = current_users.map((current) => {
  return current.toLowerCase();
});
let new_users_lower = new_users.map((current) => {
  return current.toLowerCase();
});
console.log(current_users_lower, new_users_lower);
for (let i = 0; i < current_users_lower.length; i++) {
  for (let j = i; j < new_users_lower.length; j++) {
    if (new_users_lower[j] == current_users_lower[i]) {
      console.log("Sorry " + new_users_lower[j] + ", that name is taken.");
    } else {
      console.log("Great, " + new_users_lower[j] + " is still available.");
    }
  }
}
