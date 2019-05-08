const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knew = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knew({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

//ROOT
app.get("/", (req, res) => {
  res.send(`It is working!`);
});

//SIGN IN
app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

//REGISTER
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

//PROFILE
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

//# of Images done
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
