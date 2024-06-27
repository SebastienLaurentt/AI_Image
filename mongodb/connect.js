import mongoose, { mongo } from "mongoose";

const connectDb = (url) => {
  mongoose.set('strictQuery', false);

  mongoose.connect(url)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log( err));
}

export default connectDb;