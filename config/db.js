import { connect } from "mongoose";
const MONGO_URL = process.env.MONGO_CONNECTION_URL;

export function connectToDatabase() {
  connect(MONGO_URL)
    .then(() => {
      console.clear()
      console.log("Connected to database successfull");
    })
    .catch((e) => {
      console.log("e", e);
    });
}
