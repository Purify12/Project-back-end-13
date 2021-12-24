const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
const openDBConnection = require("./helpers/db")

const auth = require("./middlewares/auth.js");
const errors = require("./middlewares/errors.js");
const unless = require("express-unless");


// connect to mongodb
const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI || "mongodb+srv://jose:Josepoenya1@cluster0.1ug8h.mongodb.net/projectbackend13?authSource=admin&replicaSet=atlas-14383t-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
var corsOptions = {
  origin: `http://localhost:${port}`
};
app.use(cors(corsOptions));

/**
 * With useNewUrlParser: The underlying MongoDB driver has deprecated their current connection string parser. 
 * Because this is a major change, they added the useNewUrlParser flag to allow users to fall back to the old parser if they find a bug in the new parser. 
 * You should set useNewUrlParser: true unless that prevents you from connecting.
 * 
 * With useUnifiedTopology, the MongoDB driver sends a heartbeat every heartbeatFrequencyMS to check on the status of the connection. 
 * A heartbeat is subject to serverSelectionTimeoutMS , so the MongoDB driver will retry failed heartbeats for up to 30 seconds by default.
 */
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(dbConfig.db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(
//     () => {
//       console.log("Database connected");
//     },
//     (error) => {
//       console.log("Database can't be connected: " + error);
//     }
// );
openDBConnection(uri)

// middleware for authenticating token submitted with requests
/**
 * Conditionally skip a middleware when a condition is met.
 */
auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/users/login", methods: ["POST"] },
      { url: "/users/register", methods: ["POST"] },
    ],
  })
);

app.use(express.json());

// initialize routes 
app.use("/users", require("./routes/users.routes"));
app.use("/artis", require("./routes/artikel"));
app.use("/webinar", require("./routes/webinar"));
app.use("/artikel", require("./routes/artikel"));
app.use("/comment", require("./routes/comment"));
app.use("/category", require("./routes/category"));
app.use("/home", require("./routes/index"));
// middleware for error responses
app.use(errors.errorHandler);

// listen for requests
app.listen(process.env.port || 3000, function () {
  console.log("Ready to Go!");
});
