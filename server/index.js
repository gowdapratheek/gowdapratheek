import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
import mongoose from "mongoose";
import contactRouter from "./routes/contact.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


app.use("/", contactRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening at port ${process.env.PORT}`)
    )
  )
  .catch((error) =>
    console.log({ message: "error in connecting to mongoose DB", error })
  );