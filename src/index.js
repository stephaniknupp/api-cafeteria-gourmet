require("dotenv").config();

const routes = require("./routes/routes");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const db = database.db;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

module.exports = db;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

const port = process.env.PORT ? process.env.PORT : 3000;

// app.use(cors({ credentials: true, origin: true }));
app.use("/api", routes);

// app.options("*", cors());

app.listen(port, () => {
  console.log(`Server Started at ${3000}`);
});

// console.log("oii", getAll);
