import mongoose from "mongoose";

export const connectDB = async () => {
  /* await mongoose.connect(process.env.MONGO_URL, {
      dbName: "food-del",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e)); */
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log(e));
    // .then(() => console.log("Database Connected"))
};
