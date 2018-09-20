const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to Mongo Server :(");
    }
    // console.log("Connecter to Mongo Server:)");
    // db.collection("Todos")
    //   .deleteMany({ text: "hello" })
    //   .then(result => {
    //     console.log(result);
    //   });
    // console.log("Connecter to Mongo Server:)");
    // db.collection("Todos")
    //   .deleteOne({ text: "hello" })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection("Todos")
      .findOneAndDelete({ text: "hello" })
      .then(result => {
        console.log(result);
      });
    
  }
);
