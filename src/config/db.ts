import mongoose from "mongoose";
import { ENV } from "../constants";

const connectToDb = (): void => {
  const mongo_url = ENV.mongo_url;

  mongoose
    .connect(mongo_url)
    .then((conn) => {
      console.log(`connected to db at ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log("db connection failed", error.message);
      process.exit(1);
    });
};

export default connectToDb;
