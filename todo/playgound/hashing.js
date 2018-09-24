const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

bcrypt.compare(
  password,
  "$2a$10$B8lxO.Y1/uwfT6XNmsoHH.zTlgQczUKuZwrE8PDxTd8ME/PJBM6tS",
  (err, res) => {
    console.log(res);
  }
);

// var data = {
//   id: 10
// };

// var token = jwt.sign(data, "hello");
// console.log(token);

// var decoded = jwt.verify(token, "hello");
// console.log(decoded);

// var message = "hello world";
// var hash = SHA256(message).toString();

// console.log(hash);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "someSecret").toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
// var resultHash = SHA256(JSON.stringify(data) + "someSecret").toString();

// if (resultHash === token.hash) {
//   console.log("Secure data");
// } else {
//   console.log("Data may be changed!");
// }
