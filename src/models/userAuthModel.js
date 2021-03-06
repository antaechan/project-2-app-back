import { mongoose } from "mongoose";
const { Schema } = mongoose;

const userAuthSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const userAuth = mongoose.model("userAuth", userAuthSchema);
export default userAuth;
