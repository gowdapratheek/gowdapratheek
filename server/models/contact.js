import { Schema, model } from "mongoose";

const contactSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

const contactModel = model("Contact", contactSchema);
export default contactModel;
