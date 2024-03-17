import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT as string;
const mongo_url = process.env.MONGO_URL as string;

export const ENV = {
  port,
  mongo_url,
};
