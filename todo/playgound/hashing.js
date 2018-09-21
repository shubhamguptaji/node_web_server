const { SHA256 } = require("crypto-js");

var message = "hello world";
var hash = SHA256(message).toString();

console.log(hash);

var data = {
  id: 4
};

var token = {
  data,
  hash: SHA256(JSON.stringify(data) + "someSecret").toString()
};

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
var resultHash = SHA256(JSON.stringify(data) + "someSecret").toString();

if (resultHash === token.hash) {
  console.log("Secure data");
} else {
  console.log("Data may be changed!");
}
