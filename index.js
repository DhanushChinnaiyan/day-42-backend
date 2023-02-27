
// npm init
// package.json la script la start:"node index.js"
// npm i nodemon
// npm i dotenv
// npm install express
// npm install mongodb


import express from "express";
import {studentsRouter} from "./student.js"

const app = express()

app.use(express.static("express")); // loading the static file
app.use(express.json()) // middleware tells server to use json


app.use("/students" , studentsRouter )
app.listen(9000,()=>console.log(`server started localhost:9000`))