const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to Mongo Server :(");
    }
    console.log("Connected to Mongo Server");
    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5b9e9403f976cf19b0909d4c") },
        {
          $set: {
            name: "guptaji"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));
  }
);
