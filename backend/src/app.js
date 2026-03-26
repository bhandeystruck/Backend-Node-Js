import express from "express";

//Creating an express app
const app = express();
//give ability to parse json coming from client
app.use(express.json());

//import routes
import userRouter from "./routes/user.route.js"

app.use("/api/v1/users", userRouter);

//example route: http://localhost:4000/api/v1/users/register




export default app;