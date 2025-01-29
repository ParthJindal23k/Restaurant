const express = require("express");
const cors = require("cors");
const app = express();

const { dbConnection } = require("./database/dbConnection");
const { errorMiddleware } = require("./error/error");
const router = require("./routes/ReservationRoute");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',router);

dbConnection();

app.use(errorMiddleware)

app.listen(9000, () =>{
    console.log("Server is running on this port");
})