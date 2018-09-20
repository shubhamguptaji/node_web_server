const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to Mongo Server!");
    }
    console.log("Connected to Mongo Server");
    // db.collection("Todos")
    //   .find({ _id : new ObjectId("5b9e9403f976cf19b0909d4b") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );
    db.collection("Users")
      .find({ name: "Shubham" })
      .count()
      .then(
        count => {
          console.log("Todos count: " + count);
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );
  }
);


/*
delete methods : 
deleteMany({text: "Something to do"});
deleteOne();
findOneAndDelete();
*/
