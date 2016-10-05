var profile = require("./profile.js");
// users will be the users you put in node app.js user1 user2 user3
// when you output through node.js, there is an argv object containing the users you planted at the end. The first two properties of that object are node, and the url, so thus we "slice" off those 2 objects then proceed with the rest.
var users = process.argv.slice(2);
users.forEach(profile.get);
