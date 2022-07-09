import express from "express";
import mongoose from "mongoose";
import userAuth from "./src/models/userAuthModel.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`connected to mongoDB`);
    }
  }
);

const app = express();
app.use(express.json());

app.post("/userAuth/login", async (req, res) => {
  const { email, password } = req.body;
  isLocated = await userAuth.find({ email: email });
  if (isLocated) {
    res.status(200).json({ isOk: true });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

app.post("/userAuth/signup", async (req, res) => {
  const credentials = req.body;

  isInserted = await userAuth.insert(credentials);
  if (isInserted) {
    res.status(200).json({ isOk: true });
  } else {
    res.status(500).json({ error: "Not Signed up" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});
