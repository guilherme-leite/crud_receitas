require("dotenv").config();
require("mysql2");

const cors = require("cors");

const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(cors());

app.use("/api/receitas", userRouter);

app.listen(process.env.APP_PORT, ()=> {
  console.log("escutando na porta 3000")
})