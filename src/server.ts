import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 4000;
console.log(process.env.PORT);

app.listen(port, () => console.log("Server listening on " + port));
