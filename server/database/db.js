import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = '';//paste mongo connection url here

    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection
 