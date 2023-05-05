require("dotenv").config();
const express = require('express');
const server = express();
const router=require("./routes/index")
const cors=require("cors")
const PORT = process.env.PORT || 3001;
const { sequelize } = require('./DB_connection');

server.use(express.json())
server.use(cors())
server.use("/", router)



sequelize
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Listening on port", PORT);
    });
  })
  .catch((err) => console.log(err));