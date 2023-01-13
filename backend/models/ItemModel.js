import mongoose from "mongoose";

const Item = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Items", Item);
