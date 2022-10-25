// Hello Admin: Make a list of five or more usernames, including the name 'admin'. Imagine you are writing code that will console.log a greeting to each user after they log in to a website.
// Loop through the list, and print a greeting to each user

let users = ["admin", "employe", "manager", "worker", "staff"];
for (user of users) {
  if (user == "admin")
    console.log("Hello admin, would you like to see a status report?");
  else if (user == "employe") console.log("hello employe");
  else if (user == "manager") console.log("hello manager");
  else if (user == "worker") console.log("hello worker");
  else if (user == "staff") console.log("hello staff");
}
