const express = require("express");
const app = express();
const db = require('./models/index');

app.listen(4567, console.log("rodando"));

app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/orders", require("./routes/orders"));
app.use("/products", require("./routes/products"));

db.sequelize.sync();