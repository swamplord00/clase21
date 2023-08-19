require("dotenv").config();
require('./models/User.model')

const cors=require('cors')
const userRoutes=require('./routes/User.routes')
const paymentRoutes=require('./routes/Payment.routes.js')

const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI + 'tienda');

const port = process.env.PORT;

const corsOptions={
    origin:process.env.FRONTEND_URL,
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/users',userRoutes)
app.use('/payment',paymentRoutes)

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta get",
  });
});

app.post("/", (req, res) => {
//   const victor = new User({
//     username: "Victor",
//     lastname:"Briones",
//     password: "victor",
//   });
//   victor.save();
  res.status(200).json({
    mensaje: "ruta post",
    detail: "",
  });
});

app.put("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta put",
  });
});
app.delete("/", (req, res) => {
  res.status(200).json({
    mensaje: "ruta delete",
  });
});

app.listen(port, () => {
  console.log(`eschuchando en el puerto ${port}`);
});
