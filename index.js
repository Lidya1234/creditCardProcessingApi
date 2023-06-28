import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import cardRouter from "./Routes/cardRouter.js"
dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log(err)
});



const app = express();

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`connected on port ${port}`)
})
app.use(express.json())
app.use('/card', cardRouter);
// app.get('/', (req, res) => {
//     res.send("Hi there")
// })